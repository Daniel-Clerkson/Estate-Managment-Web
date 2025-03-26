import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import img1 from "../Images/img.jfif";
import { FaPlus} from "react-icons/fa";
import { FaEye} from "react-icons/fa6";

const Hero = () => {
  let [dataVal, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [pageSize, setPageSize] = useState(5)
  const navigate = useNavigate();
  let data;

  const fetchEstates = async () => {
    setLoading(true);

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("No token found in localStorage");
        setLoading(false);
        navigate("/");
        return;
      }
      const details = await fetch(
        `https://dev-api.giddaa.com/developer/estate/get-all?pageSize=${pageSize}`,
        {
          headers: {
            method: "GET",
            Authorization: `Bearer ${token}`,
          }
        }
      );

      if (!details.ok) {
        console.error("Fetch error:", details.statusText);
        setLoading(false);
        return;
      }
      const response = await details.json();
      const responseData = await response.value.value.data;
      data = responseData;
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
      <div>
        <div className="flex items-center justify-between p-5">
          <h1 className="uppercase font-serif font-black text-lg md:text-2xl">
            Estate Managment- 50
          </h1>
          <button className="createEstate items-center justify-between bg-green-800 p-3 rounded-full text-white font-semibold hidden md:flex">
            <FaPlus className="mr-3" /> Create Estate{" "}
          </button>
        </div>
        <h2 className="text-center mt-14">{dataVal ? "" : <ClipLoader />}</h2>
        {dataVal
          ? dataVal.map((datas) => (
              <div className="cards flex items-center justify-around flex-col md:flex-row flex-wrap">
                <div className="card w-52 rounded-md m-5 text-center shadow-lg">
                  <div className="image ">
                    <img
                      src={
                        datas.images.length > 0
                          ? datas.images[0].document
                          : img1
                      }
                      alt=""
                      className="rounded-t-md h-28 object-cover w-full"
                    />
                  </div>
                  <div className="desc p-4">
                    <p className="font-semibold text-lg">{datas.name}</p>
                    <p className="text-sm mt-1 text-gray-400">
                      {datas.address}
                    </p>
                  </div>
                  <div className="more p-4 width text-gray-400">
                    <FaEye className="ml-40 bg-gray-300 rounded-full" />
                  </div>
                </div>
                <div>
                  <button
                    className="text-center bg-green-600 text-white p-2 rounded-md loadMore"
                    onClick={() => setPageSize(pageSize + 5)}
                  >
                    Load More
                  </button>
                  <p>{pageSize}</p>
                </div>
              </div>
            ))
          : ""}
      </div>
    </>
  );
};

export default Hero;
