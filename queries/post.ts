import client from '../store/client';

export const userPostQuery = async (creator: string) => {
  console.log('user=>', creator);
  const {
    data: {
      data: { posts },
    },
  } = await client.post(
    '/',
    {
      query: queryString,
      variables: { creator: String(creator) },
    }
    // {
    //   withCredentials: true,
    // }
  );
  console.log(posts);
  return posts;
};

const queryString = `query{$id: String!}{ 
    posts(creator: $id){ 
        id
        title
        type
        content
        community


    }
}`;
