import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import TaskForms from "./Component/TaskForms";
import TaskLists from "./Component/TaskLists";
import * as Action from "./Redux/Actions/task";

function App() {
  const dispatch = useDispatch();
  const btnAddTask = () => {
    dispatch(Action.btnAddTask());
    setCloseForm(true);
  };

  const [closeForm, setCloseForm] = useState(true);

  const onCloseForm = () => {
    setCloseForm(false);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="text-center">
          <h1>CRUD React - Redux</h1>
          <hr />
        </div>
        <div className="row">
          {closeForm ? (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <TaskForms onCloseForm={onCloseForm} />
            </div>
          ) : (
            ""
          )}
          <div
            className={
              closeForm
                ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
                : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
            }
          >
            <div className="row">
              <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                <button
                  className="btn btn-primary mb-2"
                  onClick={() => btnAddTask()}
                >
                  <span className="fa fa-plus mr-2" />
                  Thêm Tên
                </button>
              </div>
              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              </div>
            </div>

            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskLists/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
