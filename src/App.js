import { Route, Switch } from "react-router-dom";

//Components
import Login from "./components/Login";
import Chat from "./components/Chat";

//Contexts
import AuthContextProvider from "./contexts/AuthContextProvider";

const App = () => {
  return (
    <div className="App">
      <AuthContextProvider>
        <Switch>
          <Route path="/chats" component={Chat} />
          <Route path="/" component={Login} />
        </Switch>
      </AuthContextProvider>
    </div>
  );
};

export default App;
