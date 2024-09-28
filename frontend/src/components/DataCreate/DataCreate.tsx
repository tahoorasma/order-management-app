import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createData } from "../../state/actions/dataActions";
import styles from "./CreateNewDataComponent.module.css";

const CreateNewDataComponent: React.FC = () => {
  const router = useRouter();
  const [customerName, setCustomerName] = useState("");
  const [item, setItem] = useState("");
  const [orderNo, setOrderNo] = useState("");
  const [_id, setID] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [status, setStatus] = useState("-");
  const [postValStatus, setPostValStatus] = useState(false);

  const dispatch = useDispatch();
  
  const handleCustomerNameChange = (event: any) => {
    setCustomerName(event.target.value);
  };

  const handleItemChange = (event: any) => {
    setItem(event.target.value);
  };

  const handleOrderNoChange = (event: any) => {
    setOrderNo(event.target.value);
    setID(event.target.value);
  };

  const handleCustomerPhoneChange = (event: any) => {
    setCustomerPhone(event.target.value);
  };

  const handleCustomerAddressChange = (event: any) => {
    setCustomerAddress(event.target.value);
  };

  const handleCustomerEmailChange = (event: any) => {
    setCustomerEmail(event.target.value);
  };
  
  //setStatus("-");

  const config = {
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };

  const dataToBeFedToOrderAPI = {
    orderNo: orderNo,
    customerName: customerName,
    item: item,
    customerPhone: customerPhone,
    customerEmail: customerEmail,
    customerAddress: customerAddress,
    status: status
  };
  
  const createNewOrder = async (event: any ) => {
    event.preventDefault();
    try {
      const response = await axios.post(`http://localhost:8080/data/`, dataToBeFedToOrderAPI);
      dispatch(createData(response.data));
      console.log(response.data);
      setPostValStatus(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      {!postValStatus ? (
        <>
          <h1 style={{ color: "teal", textAlign: "center" }}>Create New Order</h1><br/>
          <div className={styles.inputContainer}>
            <label htmlFor="customerName">Customer Name:</label>
            <input
              id="customerName"
              type="text"
              value={customerName}
              onChange={handleCustomerNameChange}
              placeholder="Enter customer name"
            />
          </div>
          <div className={styles.inputContainer}>
            <label htmlFor="item">Item:</label>
            <input
              id="item"
              type="text"
              value={item}
              onChange={handleItemChange}
              placeholder="Enter item name"
              />
              </div>
              <div className={styles.inputContainer}>
              <label htmlFor="orderNo">Order Number:</label>
              <input
                         id="orderNo"
                         type="text"
                         value={orderNo}
                         onChange={handleOrderNoChange}
                         placeholder="order number"
                       />
              </div>
              <div className={styles.inputContainer}>
              <label htmlFor="customerPhone">Customer Phone:</label>
              <input
                         id="customerPhone"
                         type="text"
                         value={customerPhone}
                         onChange={handleCustomerPhoneChange}
                         placeholder="Enter customer phone number"
                       />
              </div>
              <div className={styles.inputContainer}>
              <label htmlFor="customerAddress">Customer Address:</label>
              <input
                         id="customerAddress"
                         type="text"
                         value={customerAddress}
                         onChange={handleCustomerAddressChange}
                         placeholder="Enter customer address"
                       />
              </div>
              <div className={styles.inputContainer}>
              <label htmlFor="customerEmail">Customer Email:</label>
              <input
                         id="customerEmail"
                         type="text"
                         value={customerEmail}
                         onChange={handleCustomerEmailChange}
                         placeholder="Enter customer email"
                       />
              </div>
              <br/>
              <button onClick={createNewOrder} style={{ backgroundColor: "teal", color: "white", padding: "4px", border: "none", width: "10%", maxWidth: "500px", cursor: "pointer" }}>Create Order</button>
              </>
              ) : (
                <>
                <h1>Order created successfully!</h1>
                <button onClick={() => router.push("/")}>Go Back</button>
                </>
              )}
              </div>
              );
              };
             
export default CreateNewDataComponent;