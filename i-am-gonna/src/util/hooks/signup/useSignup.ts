import { useDispatch } from 'react-redux';
import { email, name, password } from '../../../modules/action/signup';
import useSelectState from '../default';

const useSignup = () => {
  const dispatch = useDispatch();
  const state = useSelectState().signup;
  const setState = {
    setName: (payload: string) => dispatch(name(payload)),
    setEmail: (payload: string) => dispatch(email(payload)),
    setPassword: (payload: string) => dispatch(password(payload)),
  };
  return { state, setState };
};

export default useSignup;
