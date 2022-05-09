import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { CgChevronDown, CgCircleci } from 'react-icons/cg';
import Button from '../Button';
import PostCardProps from './PostCard.types';
import posts from './Posts';

const PostCard = ({ postAction, draftAction, query }: PostCardProps) => {
  const [title, setTitle] = useState('');
  const [postType, setPostType] = useState('text');
  const [content, setContent] = useState('');
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('text');

  useEffect(() => {
    if (query?.tab) {
      setActiveTab(query.tab);
    }
  }, []);

  useEffect(() => {
    router.push(`${router.pathname}?tab=${activeTab}`, undefined, { shallow: true });
  }, [activeTab]);

  const handlePost = () => {
    postAction({ title, postType, content });
  };

  const handleDraft = () => {
    draftAction({ title, postType, content });
  };

  return (
    <div className="max-w-[640px] w-[640px]">
      <div className="flex justify-between items-center py-4">
        <p>Create a post</p>
        <div className="font-bold flex space-x-1">
          <p>Drafts</p>
          <p className="px-2 bg-gray-400 text-white">0</p>
        </div>
      </div>
      <hr />
      <div className="flex items-center justify-between w-80 rounded h-11 shadow-border px-2 my-4 bg-white">
        <div className="flex items-center space-x-2">
          <CgCircleci />
          <p>Choose a community</p>
        </div>
        <CgChevronDown />
      </div>
      <div className="rounded shadow-border my-2 bg-white ">
        <div className="flex h-11 border-b-[1px]">
          {posts.map(({ name, TabHead }) => (
            <button
              onClick={() => setActiveTab(name)}
              key={name}
              className={`px-6  h-full flex items-center space-x-2  border-r-[1px] ${
                activeTab === name ? 'border-b-blue-400 text-blue-400 border-b-2' : ''
              }`}
            >
              <TabHead />
            </button>
          ))}
        </div>

        {posts.map(({ name, Component }) => {
          if (name === activeTab) {
            return <Component key={name} />;
          }
        })}
        <hr className="mx-4" />
        <div className="flex justify-end items-center h-16 px-4 space-x-2">
          <Button label={'Save Draft'} outlined onClick={handleDraft} />
          <Button label={'Post'} onClick={handlePost} />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
