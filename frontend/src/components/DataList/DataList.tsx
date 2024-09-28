import axios from "axios";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { getAllData } from "../../state/actions/dataActions";
import Loader from "../Loader/Loader";




const DataList: React.FC = () => {
  const allData = useSelector((state: any) => state?.data?.allData);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();




  const fetchAllData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/data/");
      const data = response.data;
      dispatch(getAllData(data));
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };




  const deleteData = (params: any) => {
    console.log(params);
    axios.delete(`http://localhost:8080/data/${params}`);
    console.log("Values deleted successfully");
    router.reload();
  };




  useEffect(() => {
    fetchAllData();
  }, []);




  const redirectToUpdatePage = (params: any) => {
    window.location.href="http://localhost:3000/updatedata";
    //router.push(`/data/${params}`);
  };




  const renderData = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Item</th>
            <th>Order Number</th>
            <th>Customer Phone</th>
            <th>Customer Address</th>
            <th>Customer Email</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {allData?.map((data: any) => (
            <tr key = {data?._id}>
              <td>{data?.customerName}</td>
              <td>{data?.item}</td>
              <td>{data?.orderNo}</td>
              <td>{data?.customerPhone}</td>
              <td>{data?.customerAddress}</td>
              <td>{data?.customerEmail}</td>
              <td>{data?.status}</td>
              <td>
                <button onClick={() => redirectToUpdatePage(data?.orderNo)}style={{ backgroundColor: "green", color: "white", padding: "5px", border: "none", width: "75%", maxWidth: "500px", cursor: "pointer" }}>Update</button>
                <br/>
                <button onClick={() => deleteData(data?.orderNo)}style={{ backgroundColor: "red", color: "white", padding: "5px", border: "none", width: "75%", maxWidth: "500px", cursor: "pointer" }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
        <style jsx>{`
          table {
            border-collapse: collapse;
            width: 95%;
          }
          th, td {
            text-align: left;
            padding: 3px;
          }
          th {
            background-color: #b9f6f8;
          }
          tr:nth-child(even) {
            background-color: #f2f2f2;
          }
          td:last-child {
            text-align: center;
          }
          td:not(:last-child) {
            border-right: 1px solid #b9f6f8;
          }
        `}</style>
      </table>
    );
  };  
  //const router = useRouter();




  return (
    <div>
      <h1 style={{ color: "teal", textAlign: "center" }}>Order List</h1>
      {isLoading ? <Loader /> : renderData()}
    </div>
  );
};
export default DataList;




// key={data?._id}
/*const deleteData = (params: any) => {
  console.log(params);
  axios.delete(`http://localhost:8080/data/${params}`);
  console.log("Values deleted successfully");
  router.reload();
};




const fetchAllData = async () => {
  await axios
    .get("http://localhost:8080/data/")
    .then((res) => {
      dispatch(getAllData(res.data));
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
};*/



