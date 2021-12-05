import { Route, Switch } from "react-router-dom";
import Home from "./pages";
import Portfolio from "./pages/portfolio";
import NotFound from "./pages/404";
import Doji from "./components/portfolio/projects/doji";

export default function App() {
  return (
    <Switch>
      <Route path="/computer" component={Home} exact />
      <Route path="/" component={Portfolio} exact />
      <Route path="/portfolio/doji" component={Doji} exact />
      <Route path="*" component={NotFound} exact />
    </Switch>
  );
}