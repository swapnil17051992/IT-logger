/** @format */

import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";

import M from "materialize-css/dist/js/materialize.min.js";
import Searchbar from "./components/Searchbar";
import Logs from "./components/Logs/log";
import AddBtn from "./components/AddBtn";
import AddLogModal from "./components/Logs/AddLogModal";

import { Provider } from "react-redux";

import EditLogModal from "./components/Logs/EditLogModal";
import AddTechModal from "./components/Tech/TechAddModal";
import TechList from "./components/Tech/TechList";
import store from "./store";

const App = () => {
	useEffect(() => {
		M.AutoInit();
	}, []);
	return (
		<Provider store={store}>
			<div className='App'>
				<Searchbar />
				<div className='container'>
					<AddBtn />
					<AddLogModal />
					<EditLogModal />
					<AddTechModal />
					<TechList />
					<Logs />
				</div>
			</div>
		</Provider>
	);
};

export default App;
