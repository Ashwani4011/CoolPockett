import { useContext, createContext, useState } from "react";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {

    const [userData, setUserData] = useState({
        fullname: "", email: "", phone: "", cor: "", password: "",
        accountType: "", productGoal: "", dob: "", address: "", city: "", state: "", postalCode: "", ssn: ""
    });


    return (
        <AuthContext.Provider value={{ userData, setUserData }}>
            {children}
        </AuthContext.Provider>
    );
}