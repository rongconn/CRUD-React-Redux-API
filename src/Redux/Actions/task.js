import Axios from "axios";
import * as ActionType from "./../Constants";

export const getTaskListAPI = () => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url: `http://localhost:3003/users`,
    })
      .then((res) => {
        dispatch({
          type: ActionType.GET_TASK_LIST_API,
          taskList: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const handleOnChangeTask = (task) => ({
  type: ActionType.HANDLE_ON_CHANGE_TASK,
  task,
});

export const btnAddTask = () => ({
  type: ActionType.BTN_ADD_TASK,
});
