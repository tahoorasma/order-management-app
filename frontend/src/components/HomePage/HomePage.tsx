import React from 'react';


const HomePage = () => {
  const handleViewRecords = () => {
    // Handle logic for viewing records
    window.location.href="http://localhost:3000/datalist";
  };


  const handleAddNew = () => {
    // Handle logic for adding new record
    window.location.href="http://localhost:3000/newdata";
  };


  const handleUpdate = () => {
    // Handle logic for updating record
    window.location.href="http://localhost:3000/updatedata";
  };


  const handleDelete = () => {
    // Handle logic for deleting record
    window.location.href="http://localhost:3000/deletedata";
  };


  return (
    <div style={{ textAlign: "center", backgroundColor: "#b9f6f8" }}>
      <br/><br/><h1 style={{ color: "teal" }}>Order Management</h1>
      <br/>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{ marginBottom: "10px" }}>
          <button style={{ backgroundColor: "#f2fdfd", color: "black", fontSize: "18px" }} onClick={handleViewRecords}>View Orders</button>
        </li><br/>
        <li style={{ marginBottom: "10px" }}>
          <button style={{ backgroundColor: "#f2fdfd", color: "black", fontSize: "18px" }} onClick={handleAddNew}>Add New Order</button>
        </li><br/>
        <li style={{ marginBottom: "10px" }}>
          <button style={{ backgroundColor: "#f2fdfd", color: "black", fontSize: "18px" }} onClick={handleUpdate}>Update Order</button>
        </li><br/>
        <li>
          <button style={{ backgroundColor: "#f2fdfd", color: "black", fontSize: "18px" }} onClick={handleDelete}>Delete Order</button>
        </li><br/><br/><br/><br/><br/><br/>
      </ul>
    </div>
  );
};


export default HomePage;