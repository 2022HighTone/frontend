import { useDispatch } from 'react-redux';
import { schoolInput } from '../../../modules/action/search';
import useSelectState from '../default';

const useSearch = () => {
  const dispatch = useDispatch();
  const state = useSelectState().search;
  const setState = {
    setSchoolInput: (payload: string) => dispatch(schoolInput(payload)),
  };
  return { state, setState };
};

export default useSearch;
