import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Default User",
});

export default UserContext;

//Now we can access this context from anywhere in our app
