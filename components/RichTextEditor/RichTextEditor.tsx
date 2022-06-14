import React from 'react';
import isHotkey from 'is-hotkey';
import { useCallback, useMemo } from 'react';
import {
  BsAlignCenter,
  BsCodeSlash,
  BsJustify,
  BsJustifyLeft,
  BsJustifyRight,
  BsListOl,
  BsListUl,
  BsTypeBold,
  BsTypeH1,
  BsTypeH2,
  BsTypeItalic,
  BsTypeUnderline,
} from 'react-icons/bs';
import { CgQuote } from 'react-icons/cg';
import { createEditor, Descendant } from 'slate';
import { withHistory } from 'slate-history';
import { Editable, Slate, withReact } from 'slate-react';
import BlockButton from './BlockButton';
import Element from './Element';
import Leaf from './Leaf';
import MarkButton, { toggleMark } from './MarkButton';
import Toolbar from './Toolbar';

const HOTKEYS = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code',
};

const initialValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [
      {
        text: '',
      },
    ],
  },
];

const RichTextEditor = () => {
  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  return (
    <Slate editor={editor} value={initialValue}>
      <Toolbar>
        <MarkButton format="bold" icon={BsTypeBold} />
        <MarkButton format="italic" icon={BsTypeItalic} />
        <MarkButton format="underline" icon={BsTypeUnderline} />
        <MarkButton format="code" icon={BsCodeSlash} />
        <BlockButton format="heading-one" icon={BsTypeH1} />
        <BlockButton format="heading-two" icon={BsTypeH2} />
        <BlockButton format="block-quote" icon={CgQuote} />
        <BlockButton format="numbered-list" icon={BsListOl} />
        <BlockButton format="bulleted-list" icon={BsListUl} />
        <BlockButton format="left" icon={BsJustifyLeft} />
        <BlockButton format="center" icon={BsAlignCenter} />
        <BlockButton format="right" icon={BsJustifyRight} />
        <BlockButton format="justify" icon={BsJustify} />
      </Toolbar>
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        placeholder="Enter some rich text…"
        spellCheck
        autoFocus
        onKeyDown={(event) => {
          for (const hotkey in HOTKEYS) {
            if (isHotkey(hotkey, event as any)) {
              event.preventDefault();
              const mark = HOTKEYS[hotkey];
              toggleMark(editor, mark);
            }
          }
        }}
      />
    </Slate>
  );
};

export default RichTextEditor;
