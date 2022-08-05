import { EDIT_RESUME } from "./resumeTypes";

export const editResume = (data) => {
  return {
    type: EDIT_RESUME,
    payload: data,
  };
};
