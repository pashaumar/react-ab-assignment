import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import PostsListView from "./components/postsListView/PostsListView";
import PostView from "./components/individualPostView/PostView";
import UserView from "./components/individualUserView/UserView";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={PostsListView} />
          <Route path="/post/:id" component={PostView} />
          <Route path="/user/:id" component={UserView} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
