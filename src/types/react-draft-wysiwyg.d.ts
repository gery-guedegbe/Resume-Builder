declare module "react-draft-wysiwyg" {
  import { ComponentType } from "react";
  import { EditorState, RawDraftContentState } from "draft-js";

  export interface ToolbarConfig {
    options?: string[];
    inline?: {
      options?: string[];
    };
    blockType?: {
      inDropdown?: boolean;
    };
    fontSize?: {
      options?: number[];
    };
    fontFamily?: {
      options?: string[];
    };
    list?: {
      options?: string[];
    };
    textAlign?: {
      options?: string[];
    };
    link?: {
      inDropdown?: boolean;
    };
    history?: {
      inDropdown?: boolean;
    };
  }

  export interface EditorProps {
    editorState: EditorState;
    onEditorStateChange: (editorState: EditorState) => void;
    toolbar?: ToolbarConfig;
    toolbarClassName?: string;
    wrapperClassName?: string;
    editorClassName?: string;
    localization?: { locale: string };
    placeholder?: string;
    readOnly?: boolean;
    onBlur?: () => void;
    onFocus?: () => void;
    onContentStateChange?: (contentState: RawDraftContentState) => void;
  }

  export const Editor: ComponentType<EditorProps>;
}
