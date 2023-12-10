import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.scss";
import {Provider} from "react-redux";
import store from "./Store";
import 'bootstrap-icons/font/bootstrap-icons.css'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<App/>
		</Provider>
	</React.StrictMode>,
);
