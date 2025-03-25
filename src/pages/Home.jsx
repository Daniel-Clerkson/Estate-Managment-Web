import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import img1 from "../Images/img.jfif";

const Home = () => {
  let [dataVal, setData] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  let data;

  const fetchEstates = async () => {
    setLoading(true);

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("No token found in localStorage");
        setLoading(false);
        return;
      }
      const details = await fetch(
        `https://dev-api.giddaa.com/developer/estate/get-all?pageNumber=1&pageSize=4`,
        {
          headers: {
            method: "GET",
            Authorization: `Bearer ${token}`,
            pageNumber: 1,
          },
        }
      );

      if (!details.ok) {
        console.error("Fetch error:", details.statusText);
        setLoading(false);
        return;
      }
      const response = await details.json();
      const responseData = await response.value.value.data;
      data = responseData
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setData(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEstates();
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <h2 className="text-center mt-14">{dataVal ? "" : <ClipLoader />}</h2>
        {dataVal ? (
          <div className="flex flex-wrap justify-between items-center">
            {dataVal.map((datas) => (
              <div className="shadow-md w-56 p-3 rounded-xl pt-0 pl-0 pr-0 m-5" key={datas.id}>
                <div className="img">
                  <img
                    src={datas.images.length > 0 ?  datas.images[0].document : img1}
                    className=" rounded-xl bg-contain"
                    alt="Image not Found"
                  />
                </div>
                <div className="details text-center h-3/4">
                  <h1 className="m-1">{dataVal ? datas.name : ""}</h1>
                  <h1 className="text-gray-500">
                    {dataVal ? datas.address : ""}
                  </h1>
                  <button><Link to={`../estate/${datas.id}`}>See Me Live</Link></button>
                </div>
              </div>
            ))}
            <EstateLoadMore />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Home;
