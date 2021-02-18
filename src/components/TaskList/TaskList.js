import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import TaskListItem from "../TaskListItem/TaskListItem";
import "../animation/fadeAndScale.css";

const TaskList = ({ tasks, onRemoveTask, onUpdateTask }) => (
  <TransitionGroup component="ul">
    {tasks.map(({ id, text, completed }) => (
      <CSSTransition key={id} timeout={500} classNames="fadeAndScale">
        <TaskListItem
          id={id}
          text={text}
          completed={completed}
          onRemove={() => onRemoveTask(id)}
          onUpdate={() => onUpdateTask(id)}
        />
      </CSSTransition>
    ))}
  </TransitionGroup>
);
export default TaskList;
