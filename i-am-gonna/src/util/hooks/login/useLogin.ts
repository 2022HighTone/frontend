import { useDispatch } from 'react-redux';
import { id, password } from '../../../modules/action/login';
import useSelectState from '../default';

const useLogin = () => {
  const dispatch = useDispatch();
  const state = useSelectState().login;
  const setState = {
    setId: (payload: string) => dispatch(id(payload)),
    setPassword: (payload: string) => dispatch(password(payload)),
  };
  return { state, setState };
};

export default useLogin;
