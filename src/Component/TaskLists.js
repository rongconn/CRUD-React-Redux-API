import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Action from "./../Redux/Actions/task";
import TaskItems from "./TaskItems";

function TaskList(props) {
    const dispatch = useDispatch();
    let taskList = useSelector((state) => state.taskReducer.taskList);

    useEffect(() => {
        dispatch(Action.getTaskListAPI());
    });

    const handleOnChangeTask = (task) => {
        dispatch(Action.handleOnChangeTask(task));
    };
    return (
        <table className="table table-bordered table-hover">
            <thead>
                <tr>
                    <th className="text-center">STT</th>
                    <th className="text-center">Tên</th>
                    <th className="text-center">Hành Động</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                </tr>
                {taskList.map((task, index) => (
                    <TaskItems
                        task={task}
                        key={index}
                        serial={index + 1}
                        handleOnChangeTask={handleOnChangeTask}
                    />

                ))}

            </tbody>
        </table>
    );
}

export default TaskList;