import "./App.css";
import { Route } from "react-router-dom";
import HomePage from "./pages/homepage.component";
import HatsPage from "./pages/hatspage.component";

function App() {
  return (
    <switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/hats" component={HatsPage} />
    </switch>
  );
}

export default App;
