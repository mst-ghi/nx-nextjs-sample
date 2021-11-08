import { useDispatch, useSelector } from 'react-redux';
import { appSelector, AppStateProps, mutateMessage } from '@micro-test/store';

export const useApp = () => {
  const dispatch = useDispatch();
  const state: AppStateProps = useSelector(appSelector);

  const setMessage = (message: string) => {
    dispatch(mutateMessage(message));
  };

  return {
    state,
    setMessage,
  };
};
