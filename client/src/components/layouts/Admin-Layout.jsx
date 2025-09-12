import { Navigate, NavLink, Outlet } from "react-router-dom";
import { FaRegListAlt, FaUser, FaHome } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { useAuth } from "../../store/auth";
import { toast } from "react-toastify";
export const AdminLayout = () => {
  const {user, isLoading} = useAuth();
  console.log("User:", user);
  if(isLoading){
    return <h2>Loading...</h2>
  }
  if(!user.isAdmin){
    return <Navigate to="/" />
  }
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul>
              <li>
                <NavLink to="/admin/users">
                  <FaUser />
                  Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/contacts">
                  <FaMessage />
                  Contacts
                </NavLink>
              </li>
              <li>
                <NavLink to="/services">
                  <FaRegListAlt />
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <FaHome />
                  Home
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};
