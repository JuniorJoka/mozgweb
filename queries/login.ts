import client from '../store/client';
import useStore from '../store';

const loginQuery = async (username: string, password: string) => {
  const { data } = await client.post(
    '/',
    {
      query: queryString,
      variables: { username, password },
    },
    {
      withCredentials: true,
    }
  );
  const jwtToken = (
    data as {
      data: {
        login: string;
      };
    }
  ).data.login;
  useStore.getState().setJwtToken(jwtToken);
};

const queryString = `mutation ($username: String!, $password: String!) {
          login(username: $username, password: $password)
        }
        `;

export default loginQuery;
