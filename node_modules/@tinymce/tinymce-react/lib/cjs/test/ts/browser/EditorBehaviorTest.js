"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var agar_1 = require("@ephox/agar");
var bedrock_client_1 = require("@ephox/bedrock-client");
var Loader_1 = require("../alien/Loader");
var miniature_1 = require("@tinymce/miniature");
var sand_1 = require("@ephox/sand");
var TinyMCE_1 = require("../../../main/ts/TinyMCE");
var TestHelpers_1 = require("../alien/TestHelpers");
bedrock_client_1.UnitTest.asynctest('EditorBehaviorTest', function (success, failure) {
    var browser = sand_1.PlatformDetection.detect().browser;
    if (browser.isIE()) {
        // INT-2278: This test currently times out in IE so we are skipping it
        success();
        return;
    }
    var isEditor = function (val) {
        var tinymce = TinyMCE_1.getTinymce();
        if (!tinymce) {
            return false;
        }
        return val instanceof tinymce.Editor;
    };
    var eventStore = TestHelpers_1.EventStore();
    var sTestVersion = function (version) { return miniature_1.VersionLoader.sWithVersion(version, agar_1.GeneralSteps.sequence([
        agar_1.Logger.t('Assert structure of tinymce and tinymce-react events', agar_1.Chain.asStep({}, [
            Loader_1.cRender({
                onEditorChange: eventStore.createHandler('onEditorChange'),
                onSetContent: eventStore.createHandler('onSetContent')
            }),
            Loader_1.cEditor(TestHelpers_1.cSetContent('<p>Initial Content</p>')),
            // tinymce native event
            eventStore.cEach('onSetContent', function (events) {
                agar_1.Assertions.assertEq('First arg should be event from Tiny', '<p>Initial Content</p>', events[0].editorEvent.content);
                agar_1.Assertions.assertEq('Second arg should be editor', true, isEditor(events[0].editor));
            }),
            // tinymce-react unique event
            eventStore.cEach('onEditorChange', function (events) {
                agar_1.Assertions.assertEq('First arg should be new content', '<p>Initial Content</p>', events[0].editorEvent);
                agar_1.Assertions.assertEq('Second arg should be editor', true, isEditor(events[0].editor));
            }),
            eventStore.cClearState,
            Loader_1.cRemove
        ])),
        agar_1.Logger.t('onEditorChange should only fire when the editors content changes', agar_1.Chain.asStep({}, [
            Loader_1.cRender({
                onEditorChange: eventStore.createHandler('onEditorChange')
            }),
            Loader_1.cEditor(TestHelpers_1.cSetContent('<p>Initial Content</p>')),
            Loader_1.cEditor(TestHelpers_1.cSetContent('<p>Initial Content</p>')),
            eventStore.cEach('onEditorChange', function (events) {
                agar_1.Assertions.assertEq('onEditorChange should have been fired once', 1, events.length);
            }),
            eventStore.cClearState,
            Loader_1.cRemove
        ])),
        agar_1.Logger.t('Should be able to register an event handler after initial render', agar_1.Chain.asStep({}, [
            Loader_1.cRender({ initialValue: '<p>Initial Content</p>' }),
            Loader_1.cReRender({ onSetContent: eventStore.createHandler('onSetContent') }),
            Loader_1.cEditor(TestHelpers_1.cAssertContent('<p>Initial Content</p>')),
            Loader_1.cEditor(TestHelpers_1.cSetContent('<p>New Content</p>')),
            eventStore.cEach('onSetContent', function (events) {
                agar_1.Assertions.assertEq('Should have bound handler, hence new content', '<p>New Content</p>', events[0].editorEvent.content);
            }),
            eventStore.cClearState,
            Loader_1.cRemove
        ])),
        agar_1.Logger.t('Providing a new event handler and re-rendering should unbind old handler and bind new handler', agar_1.Chain.asStep({}, [
            Loader_1.cRender({ onSetContent: eventStore.createHandler('InitialHandler') }),
            Loader_1.cEditor(TestHelpers_1.cSetContent('<p>Initial Content</p>')),
            Loader_1.cReRender({ onSetContent: eventStore.createHandler('NewHandler') }),
            Loader_1.cEditor(TestHelpers_1.cSetContent('<p>New Content</p>')),
            eventStore.cEach('InitialHandler', function (events) {
                agar_1.Assertions.assertEq('Initial handler should have been unbound, hence initial content', '<p>Initial Content</p>', events[0].editorEvent.content);
            }),
            eventStore.cEach('NewHandler', function (events) {
                agar_1.Assertions.assertEq('New handler should have been bound, hence new content', '<p>New Content</p>', events[0].editorEvent.content);
            }),
            eventStore.cClearState,
            Loader_1.cRemove
        ])),
        agar_1.Logger.t('"format" prop should set the format of the content emitted by onEditorChange', agar_1.Chain.asStep({}, [
            Loader_1.cRender({
                outputFormat: 'text',
                onEditorChange: eventStore.createHandler('onEditorChange')
            }),
            agar_1.Chain.op(function (context) {
                context.editor.setContent('<p>Test #1</p>');
            }),
            eventStore.cEach('onEditorChange', function (events) {
                agar_1.Assertions.assertEq('Content emitted should be format: "text"', 'Test #1', events[0].editorEvent);
            }),
            Loader_1.cReRender({
                outputFormat: 'html',
                onEditorChange: eventStore.createHandler('onEditorChange2')
            }),
            agar_1.Chain.op(function (context) {
                context.editor.setContent('<p>Test #2</p>');
            }),
            eventStore.cEach('onEditorChange2', function (events) {
                agar_1.Assertions.assertEq('Content emitted should be format: "html"', '<p>Test #2</p>', events[0].editorEvent);
            }),
            eventStore.cClearState,
            Loader_1.cRemove
        ])),
    ])); };
    agar_1.Pipeline.async({}, [
        sTestVersion('5'),
        sTestVersion('4')
    ], success, failure);
});
