import { Chain } from '@ephox/agar';
import { Editor as TinyMCEEditor } from 'tinymce';
interface EventHandlerArgs<T> {
    editorEvent: T;
    editor: TinyMCEEditor;
}
declare type HandlerType<A> = (a: A, editor: TinyMCEEditor) => unknown;
declare const EventStore: () => {
    cEach: <T>(name: string, assertState: (state: EventHandlerArgs<T>[]) => void) => Chain<any, any>;
    createHandler: <T_1>(name: string) => HandlerType<T_1>;
    cClearState: Chain<unknown, unknown>;
};
declare const cSetContent: (content: string) => Chain<TinyMCEEditor, TinyMCEEditor>;
declare const cAssertContent: (content: string) => Chain<TinyMCEEditor, TinyMCEEditor>;
export { EventStore, cSetContent, cAssertContent };
