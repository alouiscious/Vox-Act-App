import { combineReducers } from "redux";
// // import talentsReducer from "./TalentsReducer";
// import userReducer from "./UserReducer";
import usersReducer from "./UsersReducer";

const rootReducer = combineReducers({
//   userReducer,
  usersReducer,
//   talentsReducer
})

export default rootReducer
