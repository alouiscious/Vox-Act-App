import { combineReducers } from "redux";
import loginReducer from "./LoginReducer";
import talentsReducer from "./TalentsReducer";
import userReducer from "./UserReducer";
import usersReducer from "./UsersReducer";

const rootReducer = combineReducers({
  user: userReducer,
  users: usersReducer,
  login: loginReducer,
  talents: talentsReducer
})

export default rootReducer
