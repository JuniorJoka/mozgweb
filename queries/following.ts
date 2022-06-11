import client from '../store/client';

const getFollowingQuery = async () => {
  const { data } = await client.post(
    '/',
    {
      query: queryString,
    },
    {
      withCredentials: true,
    }
  );

  return (
    data as {
      data: {
        following: { username: string }[];
      };
    }
  ).data.following;
};

const queryString = `query {
    following {
        username
    }
}`;

export default getFollowingQuery;
