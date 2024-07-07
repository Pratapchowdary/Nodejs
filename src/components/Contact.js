// src/components/Contacts.js
import React from "react";

const Contacts = () => {
  const contacts = [
    {
      name: "John Doe",
      phone: "123-456-7890",
      email: "john.doe@example.com",
      address: "123 Main St, Anytown, USA",
    },
    {
      name: "Jane Smith",
      phone: "234-567-8901",
      email: "jane.smith@example.com",
      address: "456 Oak St, Somecity, USA",
    },
    {
      name: "Alice Johnson",
      phone: "345-678-9012",
      email: "alice.john@example.com",
      address: "789 Pine St, Yourtown, USA",
    },
  ];

  return (
    <div className="container">
      <h2 className="my-4">Contacts</h2>
      <div className="row justify-content-center">
        {contacts.map((contact) => (
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="bg-light">
                <h5 className="card-title d-lg-none">{contact.name}</h5>
                <p className="card-text">
                  <strong>Phone:</strong> {contact.phone}
                </p>
                <p className="card-text">
                  <strong>Email:</strong> {contact.email}
                </p>
                <p className="card-text">
                  <strong>Address:</strong> {contact.address}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
