import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllData, updateData } from "../../state/actions/dataActions";
import axios from "axios";



const UpdateDataComponent = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [orderNo, setorderNo] = useState("");
  const [status, setStatus] = useState("In Process");
  const [postValStatus, setPostValStatus] = useState(false);


  const handleorderNoChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setorderNo(event.target.value);
  };


  const handleStatusChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setStatus(event.target.value);
  };


  const dataToBeFedToDataAPI = {
    orderNo: router.query.orderNo,
    status: status
  };


  const updateExistingData = async (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
     {
      const response = await axios.put(`http://localhost:8080/data/${orderNo}`, 
      { orderNo: router.query.orderNo, status });
      console.log(response.data);
      dispatch(updateData(response.data));
      setPostValStatus(true)
    } 
  };

  return (
    <div style={{ backgroundColor: "#b9f6f8", padding: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
      {!postValStatus ? (
        <>
        <br/><br/><br/>
          <h2 style={{ color: "teal", textAlign: "center" }}>Update Status for Order</h2>
          <input onChange={handleorderNoChange} placeholder="Order Number" style={{ margin: "10px", width: "100%", maxWidth: "500px" }} />
          <select onChange={handleStatusChange} value={status} style={{ margin: "10px", width: "100%", maxWidth: "500px" }}>
            <option value="In Process">In Process</option>
            <option value="Completed">Completed</option>
            <option value="Failed">Failed</option>
          </select>
          <br/>
          <button onClick={updateExistingData} style={{ backgroundColor: "teal", color: "white", padding: "10px", border: "none", width: "100%", maxWidth: "500px", cursor: "pointer" }}>Update</button>
        </>
      ) : (
        <>
        <h1>Status updated successfully!</h1>
        <button onClick={() => router.push("/")} style={{ color: "teal", cursor: "pointer", textAlign: "center", margin: "20px" }}>Go to Homepage</button>
        </>
      )}
    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
};


export default UpdateDataComponent;