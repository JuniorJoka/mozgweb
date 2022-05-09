export default interface PostCardProps {
  postAction: (action: Action) => Promise<void>;
  draftAction: (action: Action) => Promise<void>;
  query?: { tab: string };
}

export interface Action {
  title: string;
  postType: string;
  content?: string;
  communityId?: string;
}
