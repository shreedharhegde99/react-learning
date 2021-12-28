import "./App.css";
import { AuthContext } from "./ContextApi/ContextProvider";
import Login from "./ContextApi/Login";
import Dashboard from "./ContextApi/Dashboard";

function App() {
  return (
    <AuthContext.Consumer>
      {({ isAuth }) => {
        return isAuth ? (
          <div>
            <Dashboard />
          </div>
        ) : (
          <div>
            <Login />
          </div>
        );
      }}
    </AuthContext.Consumer>
  );
}

export default App;
