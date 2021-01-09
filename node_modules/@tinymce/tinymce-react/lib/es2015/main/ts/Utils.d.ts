/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { IAllProps } from './components/Editor';
import { Editor as TinyMCEEditor, EditorEvent } from 'tinymce';
export declare const isFunction: (x: unknown) => x is Function;
export declare const bindHandlers: (editor: TinyMCEEditor, prevProps: Partial<IAllProps>, props: Partial<IAllProps>, boundHandlers: Record<string, (event: EditorEvent<unknown>) => unknown>) => void;
export declare const bindHandlers2: <H>(on: (name: string, handler: H) => void, off: (name: string, handler: H) => void, adapter: (handler: (event: EditorEvent<unknown>, editor: TinyMCEEditor) => unknown) => H, prevProps: Partial<IAllProps>, props: Partial<IAllProps>, boundHandlers: Record<string, H>) => void;
export declare const uuid: (prefix: string) => string;
export declare const isTextarea: (element: Element | null) => element is HTMLTextAreaElement;
export declare const mergePlugins: (initPlugins: string | string[] | undefined, inputPlugins: string | string[] | undefined) => string[];
