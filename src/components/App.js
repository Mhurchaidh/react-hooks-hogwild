import React from "react";
import Nav from "./Nav";
import PorkPen from "./PorkPen";
import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			<PorkPen hogs={hogs}/>
		</div>
	);
}

export default App;