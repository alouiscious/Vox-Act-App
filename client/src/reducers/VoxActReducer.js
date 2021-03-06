import { combineReducers } from "redux";
import talentsReducer from "./TalentsReducer";
import userReducer from "./UserReducer";
import usersReducer from "./UsersReducer";
import counterReducer from "./CounterReducer";

const rootReducer = combineReducers({
  userReducer,
  usersReducer,
  talentsReducer,
  counterReducer,
})

export default rootReducer
