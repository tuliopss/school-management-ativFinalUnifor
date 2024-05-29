import { resetMessage } from "../slices/student-slice";

export const useResetComponentMessage = (dispatch) => {
  return () => [
    setTimeout(() => {
      dispatch(resetMessage());
    }, 2000),
  ];
};
