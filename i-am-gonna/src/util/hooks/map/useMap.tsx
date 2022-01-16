import { useDispatch } from 'react-redux';
import useSelectState from '../default';

const useMap = () => {
  const dispatch = useDispatch();
  const state = useSelectState().map;
  const setState = {};
  return { state, setState };
};

export default useMap;
