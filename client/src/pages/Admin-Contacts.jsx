import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const AdminContacts = () => {
  const [contactData, setContactData] = useState([]);
  const { authorizationToken, API } = useAuth();

  const getContactsData = async () => {
    try {
      const response = await fetch(`${API}/api/admin/contacts`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      if (response.ok) {
        setContactData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContact = async (id) => {
    try {
      const response = await fetch(
        `${API}/api/admin/contacts/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      if (response.ok) {
        getContactsData();
        toast.success("Contact Deleted Successfully");
      } else {
        toast.error("Error in Deleting Contact");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContactsData();
  }, []);

  return (
    <section className="admin-contacts-section">
      <h1>Admin Contact Data</h1>
      <div className="contacts-container">
        {contactData.map((contact, index) => {
          const { username, email, message, _id } = contact;
          return (
            <div className="contact-card" key={_id}>
              <h2>{username}</h2>
              <p><strong>Email:</strong> {email}</p>
              <p className="message"><strong>Message:</strong> {message}</p>
              <button className="btn delete-btn" onClick={() => deleteContact(_id)}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};
