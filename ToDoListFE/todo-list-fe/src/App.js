import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "/node_modules/bootstrap/dist/js/bootstrap.min.js"
import './App.css';
import TodosView from "./component/todo/TodosView";
import Navbar from "./component/common/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddTodo from "./component/todo/AddTodo";
import UpdateTodo from "./component/todo/UpdateTodo";
import TodoDetail from "./component/todo/TodoDetail";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <div className="container">
        <Routes >
          <Route
            exact
            path="/"
            element={<TodosView />}
          >
          </Route>
          <Route
            exact
            path="/add-todo"
            element={<AddTodo />}
          >
          </Route>
          <Route
            exact
            path="/update-todo/:id"
            element={<UpdateTodo />}
          >
          </Route>
          <Route
            exact
            path="/todo-detail/:id"
            element={<TodoDetail />}
          >
          </Route>
        </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
