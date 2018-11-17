import React, { Dispatch } from "react";
import { PlansOverviewPage } from "./PlansOverviewPage/PlansOverviewPage";
import { Switch } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "../reducers/rootReducer";
import { IStoreState } from "../store/IStoreState";
import { connect } from "react-redux";

const AppView = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul>
);
AppView.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
};

function pageComponent() {
  switch (nav) {
    case "MainPage":
      return <PlansOverviewPage />;
      break;

    default:
      break;
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});
const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppView);
