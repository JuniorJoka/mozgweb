import useStore from '../store';

const logoutQuery = () => {
  useStore.getState().setJwtToken('');
};

export default logoutQuery;
