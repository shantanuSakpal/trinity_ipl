import { useContext, createContext, useState } from "react"

const UserContext = createContext();
export function UserProvider({ children }) {
    const [user, setUser] = useState("neil");
    return <>
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    </>
}

function UseUser() {
    return useContext(UserContext);
}
export default UseUser();