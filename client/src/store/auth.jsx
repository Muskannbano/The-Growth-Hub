import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [services, setServices] = useState([])
  const storeTokenInLs = (serverToken) => {
    localStorage.setItem("token", serverToken);
    setToken(serverToken); //  update React state
  };

  let isLoggedIn = !!token;
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  //JWT Authentication
  const userAuthentication = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/auth/user`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        // console.log("userdata", data.userData);
        setUser(data.userData);
      }
    } catch (error) {
      console.log("Error fetching user data");
    }
  };
//get the services from database
const getServices = async() => {
  try {
    const response = await fetch(`http://localhost:5000/api/data/service`,{
      method:"GET",
    })
    if(response.ok){
      const data = await response.json()
      console.log(data.msg)
      setServices(data.msg)
    }
  } catch (error) {
    console.log(`Services Error: ${error}`)
  }
}

  useEffect(() => {
    getServices()
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, storeTokenInLs, LogoutUser, user, services }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  const authContextVal = useContext(AuthContext);
  if (!authContextVal) {
    throw new Error("useAuth used outside of a provider");
  }
  return authContextVal;
};
