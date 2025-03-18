import Estate from "./Estate";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [pageNumber, setPageNumber] = useState(3);
  let data = {};
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
      const details = await fetch(
        "https://dev-api.giddaa.com/developer/estate/get-all",
        {
          headers: {
            method:'GET',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!details.ok) {
        console.error("Fetch error:", details.statusText);
        setLoading(false);
        return;
      }

      const response = await details.json();

      const responseData = await response;
      data = responseData;
      // console.log(data);
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // fetchEstates();
  }, []);

  return (
    <>
      <h1>{ console.log(data) }</h1>
      <button onClick={()=>fetchEstates()}>{loading ? "Loading" : "Click Me" }</button>
    </>
  );
};

export default Home;
