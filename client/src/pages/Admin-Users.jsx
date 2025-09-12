import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";

export const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { authorizationToken, API } = useAuth();

  const getAllusersData = async () => {
    try {
      const response = await fetch(`${API}/api/admin/users`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken, // already "Bearer <token>"
        },
      });

      const data = await response.json();
      console.log("Users data:", data);

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch users");
      }

      // ✅ make sure only arrays go into state
      if (Array.isArray(data.users)) {
        setUsers(data.users);
      } else if (Array.isArray(data)) {
        setUsers(data);
      } else {
        setUsers([]);
      }
    } catch (err) {
      console.error("Error fetching users:", err.message);
      setError(err.message);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };
// Delete the user
const deleteUser=async(id)=>{
  try {
     const response = await fetch(`${API}/api/admin/users/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken, // already "Bearer <token>"
        },
      });
       const data = await response.json();
      console.log(`USER AFTER Deletion : ${data}`);
      if(response.ok){
        getAllusersData()
      }
  } catch (error) {
      console.error("Error deleting user:", error);
  }

}
  useEffect(() => {
    getAllusersData();
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <>
      <section className="admin-users-section">
        <div className="container">
          <h1>Admin User Data</h1>
        </div>
        <div className="container admin-users">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((curUser, index) => (
                  <tr key={curUser._id || index}>
                    <td>{curUser.username}</td>
                    <td>{curUser.email}</td>
                    <td>{curUser.phone}</td>
                    <td>
                     <Link to={`/admin/users/${curUser._id}/edit`}>Edit</Link>
                    </td>
                    <td>
                     
                      <button onClick={()=>deleteUser(curUser._id)} className="btn deletebtn">Delete</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5"><p>No users found</p></td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};
