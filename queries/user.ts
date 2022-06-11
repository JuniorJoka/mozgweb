import client from '../store/client';

const userQuery = async (username: string) => {
  const {
    data: {
      data: { user },
    },
  } = await client.post(
    '/',
    {
      query: queryString,
      variables: { username },
    },
    {
      withCredentials: true,
    }
  );
  return user;
};

const queryString = `query ($username: String!) {
          user(username: $username){
              id
              username
              email
          }
        }
        `;

export default userQuery;
