import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import img1 from '../../Images/img.jfif'

const EstateImages = ({estate}) => {
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
        `https://dev-api.giddaa.com/developer/estate/${estate}`,
        {
          headers: {
            method: "GET",
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
      const responseData = await response.value.value;
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
      <h2 className="text-center mt-14">{dataVal ? "" : <ClipLoader />}</h2>
      {dataVal ? (
        <div className="images flex flex-wrap p-5 m-5 items-center justify-between relative">
          {dataVal.images.length > 0 ? dataVal.images.map((datas) => (
            <div className="frontView m-5" key={datas.document}>
              <div className="relative ml-5">
                <div className="absolute top-32 md:top-64 p-3 ">
                  <p className="text-green-800 bg-white rounded-2xl pl-4 pr-4 ml-3 text-center font-semibold">
                    Side View
                  </p>
                  <p className="bg-green-800 border text-white rounded-2xl pl-4 pr-4 ml-3 font-semibold mt-2 text-center">
                    Actual Image
                  </p>
                </div>
                <img
                  src={
                    datas.document
                  }
                  className="rounded-xl"
                />
              </div>
            </div>
          )):''}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default EstateImages;
