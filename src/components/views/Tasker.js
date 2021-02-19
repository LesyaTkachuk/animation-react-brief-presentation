import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import TaskList from "../TaskList/TaskList";
import TaskEditor from "../TaskEditor/TaskEditor";
import { uuid } from "uuidv4";
import Filter from "../Filter/Filter";
import Section from "../Section/Section";
import "../animation/fadeAndScale.css";

class Tasker extends Component {
  state = {
    tasks: [],
    filter: "",
  };

  componentDidMount() {
    const persistedTasks = localStorage.getItem("tasks");
    if (persistedTasks) {
      this.setState({
        tasks: JSON.parse(persistedTasks),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { tasks } = this.state;

    console.log("Tasks componentDidUpdate");
    // console.log("prevState:", prevState);
    // console.log("this.state:", this.state);

    if (prevState.tasks !== tasks) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }

  changeFilter = (filter) => {
    console.log(filter);
    this.setState({ filter });
  };

  getFilteredTasks = () =>
    this.state.tasks.filter((task) =>
      task.text.toLowerCase().includes(this.state.filter.toLowerCase())
    );

  addTask = (text) => {
    const task = {
      id: uuid(),
      text,
      completed: false,
    };

    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task],
    }));
  };

  removeTask = (taskId) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter(({ id }) => id !== taskId),
    }));
  };

  updateCompleted = (taskId) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      ),
    }));
  };

  // updateCompleted = (taskId) => {
  //   this.setState((prevState) => {
  //     return {
  //       tasks: prevState.tasks.map((task) => {
  //         if (task.id === taskId) {
  //           return {
  //             ...task,
  //             completed: !task.completed,
  //           };
  //         }
  //         return task;
  //       }),
  //     };
  //   });
  // };

  render() {
    const { tasks, filter } = this.state;

    const filteredTasks = this.getFilteredTasks();
    return (
      <Section>
        <TaskEditor onAddTask={this.addTask} />
        <CSSTransition
          in={tasks.length > 1}
          timeout={500}
          classNames="fadeAndScale"
          unmountOnExit
        >
          <Filter value={filter} onChangeFilter={this.changeFilter} />
        </CSSTransition>
        {/* {tasks.length > 1 && (
          <Filter value={filter} onChangeFilter={this.changeFilter} />
        )} */}

        <TaskList
          tasks={filteredTasks}
          onRemoveTask={this.removeTask}
          onUpdateTask={this.updateCompleted}
        />
        <CSSTransition
          in={tasks.length === 0}
          timeout={500}
          classNames="fadeAndScale"
          unmountOnExit
        >
          <img
            className="waiter"
            src="https://s.tcdn.co/4ce/580/4ce58078-ce94-370f-8abb-836a56b5fa0b/2.png"
            alt="waiter"
          />
        </CSSTransition>
      </Section>
    );
  }
}

export default Tasker;
