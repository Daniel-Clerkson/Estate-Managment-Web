import Estate from "./Estate";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [pageNumber, setPageNumber] = useState(3);
  const [getData, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchEstates = async () => {
    setLoading(true);
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("No token found in localStorage");
      setLoading(false);
      return;
    }

    try {
      // const details = await fetch(
      //   "https://dev-api.giddaa.com/developer/estate/get-all",
      //   {
      //     headers: {
      //       method:'GET',
      //       Authorization: `Bearer ${token}`,
      //     },
      //   }
      // );

      // if (!details.ok) {
      //   console.error("Fetch error:", details.statusText);
      //   setLoading(false);
      //   return;
      // }

      // const response = await details.json();

      // const responseData = await response.value.value.data;
      // setData(responseData);
      // console.log("Reponse Data " + responseData);
      // console.log(data)

      fetch("https://dev-api.giddaa.com/developer/estate/get-all", {
        headers: {
          method: "GET",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          if (!res.ok) {
            // senbd errors
          } else {
            return res.json();
          }
        })
        .then((resData) => {
          console.log("res data", resData);
          console.log("res data value 1", resData.value);
          console.log("res data value 2", resData.value.value);
          console.log("res data value 2 data", resData.value.value.data);

          setData('Data');
          console.log("Final Get Data " + getData);
        });
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      console.log("Final Data " + getData);
      setLoading(false);
    }
  };

  useEffect(() => {
    // fetchEstates();
  }, []);

  return (
    <>
      {/* <h1>{(console.log(dataVal[0].name))}</h1> */}
      <button onClick={()=>fetchEstates()}>{loading ? "Loading" : "Click Me" }</button>
    </>
  );
};

export default Home;
