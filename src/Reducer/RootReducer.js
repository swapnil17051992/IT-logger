/** @format */

import { combineReducers } from "redux";
import LogReducer from "../Reducer/Logs/Logsreducer";
import techReducer from "../Reducer/Logs/Techreducer";
const RootReucer = combineReducers({
	log: LogReducer,
	tech: techReducer,
});

export default RootReucer;
