import { Chain } from '@ephox/agar';
import * as React from 'react';
import { Editor, IAllProps } from '../../../main/ts/components/Editor';
import { Editor as TinyMCEEditor } from 'tinymce';
export interface Context {
    DOMNode: HTMLElement;
    editor: TinyMCEEditor;
    ref: React.RefObject<Editor>;
}
declare const cRender: (props: IAllProps) => Chain<unknown, Context>;
declare const cReRender: (props: IAllProps) => Chain<Context, Context>;
declare const cRemove: Chain<unknown, unknown>;
declare const cDOMNode: (chain: Chain<Context['DOMNode'], unknown>) => Chain<Context, Context>;
declare const cEditor: (chain: Chain<Context['editor'], unknown>) => Chain<Context, Context>;
export { cRender, cReRender, cRemove, cDOMNode, cEditor };
