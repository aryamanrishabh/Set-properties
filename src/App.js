import Form from "./Form";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Result from "./Result";

const App = () => {
  return (
    <>
      <Router>
        <header>
          <Navbar />
        </header>
        <Route exact path="/">
          <Form />
        </Route>
        <Route path="/results">
          <Result />
        </Route>
      </Router>
    </>
  );
};

export default App;
