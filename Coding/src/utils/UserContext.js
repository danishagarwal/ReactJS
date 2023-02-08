import { createContext } from "react"
//Creating a context 

const UserContext = createContext({
    user: { name: "Dummy", email: "dummyEmail@gmail.com" }
});

export default UserContext;