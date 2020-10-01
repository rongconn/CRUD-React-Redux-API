import Axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleOnChange(event) {
        let { name, value } = event.target;
        this.setState({
            [name]: value,
        });
        console.log("onchange:", this.name);
    }

    componentWillReceiveProps = (nextProps) => {
        if (!nextProps && !nextProps.taskEditting) return;
        this.setState({
            id: nextProps.taskEditting.id,
            name: nextProps.taskEditting.name,
        });
    };

    handleOnSubmit(event) {
        event.preventDefault();
        if (this.state.id === "") {
            Axios({
                method: "POST",
                url: `http://localhost:3003/users`,
                data: this.state,
            }).catch((err) => {
                console.log(err);
            });
        } else {
            Axios({
                method: "PUT",
                url: `http://localhost:3003/users/${this.state.id}`,
                data: this.state,
            }).catch((err) => {
                console.log(err);
            });
        }
        this.onClear();
    };

    onClear = () => {
        this.setState({
            id: "",
            name: "",
        });
    };

    render() {
        return (
            <div className="card card-warning">
                <div className="card-header bg-warning w-100 d-flex justify-content-around align-items-center">
                    <span className="font-weight-bold">
                        {this.state.id === "" ? "Thêm Tên" : "Cập nhật Tên"}
                    </span>
                    <i
                        type="button"
                        className="fa fa-times-circle"
                        onClick={() => this.props.onCloseForm()}
                    />
                </div>
                <div className="card-body">
                    <form onSubmit={this.handleOnSubmit}>
                        <div className="form-group">
                            <p>Tên :</p>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={this.state.name}
                                onChange={this.handleOnChange}
                            />
                        </div>

                        <div className="text-center">
                            {this.state.id === "" ? (
                                <button type="submit" className="btn btn-warning">
                                    Thêm
                                </button>
                            ) : (
                                    <button type="submit" className="btn btn-warning">
                                        Cập nhật
                                    </button>
                                )}
              &nbsp;
                                <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => this.onClear()}
                                 >
                                Hủy Bỏ
                                </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        taskEditting: state.taskReducer.taskEditting,
    };
};

export default connect(mapStateToProps, null)(TaskForm);
