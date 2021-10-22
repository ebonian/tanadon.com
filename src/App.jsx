import { Route, Switch } from "react-router-dom";
import Home from "./pages";
import NotFound from "./pages/404";

export default function App() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="*" component={NotFound} exact />
    </Switch>
  )
}
