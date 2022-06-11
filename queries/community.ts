import client from '../store/client';

interface getCommunityArgs {
  id?: string;
  name?: string;
}

const getCommunityQuery = async (name: string) => {
  console.log('got here');
  const { data } = await client.post(
    '/',
    {
      query: queryString,
      variables: { name },
    },
    {
      withCredentials: true,
    }
  );

  console.log(data);
  console.log('not here');
};
const queryString = (name: string) => `query {
  community(name: "${name}"){
    id
    name
  }
}`;

export default getCommunityQuery;
