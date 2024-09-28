import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteData } from "../../state/actions/dataActions";
import axios from "axios";


const DeleteDataComponent = () => {
  const dispatch = useDispatch();
  const router = useRouter();


  const [orderNo, setorderNo] = useState("");
  const [postValStatus, setPostValStatus] = useState(false);


  const handleorderNoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setorderNo(event.target.value);
  };


  const deleteExistingData = async (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    {
      const response = await axios.delete(`http://localhost:8080/data/${orderNo}`, {
        data: { orderNo: orderNo },
      });
      console.log(response.data);
      dispatch(deleteData(response.data));
      setPostValStatus(true);
    } 
  };

  return (
    <div style={{ backgroundColor: "#b9f6f8", padding: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
      {!postValStatus ? (
        <>
        <br/><br/><br/>
          <h2 style={{ color: "teal", textAlign: "center" }}>Delete Order</h2><br/>
          <input onChange={handleorderNoChange} placeholder="Order Number" value={orderNo} style={{ margin: "10px", width: "100%", maxWidth: "500px" }} />
          <br/>
          <button onClick={deleteExistingData} style={{ backgroundColor: "teal", color: "white", padding: "10px", border: "none", width: "100%", maxWidth: "500px", cursor: "pointer" }}>Delete</button>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/></>
      ) : (
        <>
        <h1>Order deleted!</h1>
        <button onClick={() => router.push("/")} style={{ color: "teal", cursor: "pointer", textAlign: "center", margin: "20px" }}>Go to Homepage</button>
        </>
      )}
      <br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
};


export default DeleteDataComponent;
