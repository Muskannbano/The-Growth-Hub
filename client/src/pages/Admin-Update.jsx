import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const AdminUpdate = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const params = useParams();
  const { authorizationToken, API } = useAuth();

  // Fetch single user details
  const getSingleUserData = async () => {
    try {
      const res = await fetch(`${API}/api/admin/users/${params.id}`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      const result = await res.json();
      console.log("Single User Data:", result);

      // Adjust according to API response
      if (res.ok && result) {
        setData(result.user || result); 
      } else {
        toast.error(result.message || "Failed to load user data");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error fetching user data");
    }
  };

  useEffect(() => {
    getSingleUserData();
  }, []);

  // Handle input changes
  const handleInput = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle update
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API}/api/admin/users/update/${params.id}`, {
        method: "PATCH",
        headers: {
          Authorization: authorizationToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("User updated successfully");
      } else {
        toast.error(result.message || "Error while updating user");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <section className="section-update">
      <div className="container contact-content">
        <h1 className="main-heading">Update User</h1>
      </div>
      <div className="grid grid-two-cols container">
        <section className="section-form">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="off"
                value={data.username || ""}
                onChange={handleInput}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                value={data.email || ""}
                onChange={handleInput}
                required
              />
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                id="phone"
                value={data.phone || ""}
                onChange={handleInput}
                required
              />
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </section>
      </div>
    </section>
  );
};
