import Axios from "axios";
import React, { Component } from "react";

class TaskItems extends Component {
    constructor(props) {
        super(props);
        this.handleOnDeleteTask = this.handleOnDeleteTask.bind(this);
    }

    handleOnDeleteTask(taskID) {
        Axios({
            method: "DELETE",
            url: `http://localhost:3003/users/${taskID}`,
        }).catch((err) => {
            console.log(err);
        });
    };
    render() {
        const { task, serial } = this.props;
        return (
            <tr>
                <td>{serial}</td>
                <td>{task.name}</td>
                <td className="text-center">
                    <button
                        type="button"
                        className="btn btn-warning"
                        onClick={() => this.props.handleOnChangeTask(task)}
                    >
                        <span className="fa fa-pencil mr-2" />
                Sửa
                </button>
                &nbsp;
                &nbsp;
                &nbsp;
                <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => {
                            this.handleOnDeleteTask(task.id);
                        }}
                    >
                        <span className="fa fa-trash mr-2" />
                 Xóa
                </button>
                </td>
            </tr>
        );
    }
}

export default TaskItems;
