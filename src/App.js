import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/elements/Header/Header";

function App() {
  return (
		<>
			<Router>
				<Header />
				{/* <Switch>
					<Route />
				</Switch> */}
			</Router>
		</>
  );
}

export default App;
