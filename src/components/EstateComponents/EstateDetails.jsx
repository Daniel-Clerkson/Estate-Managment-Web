import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EstateDetails = ({estate}) => {
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
      data = await responseData;
      console.log(data)
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
    <div className="p-0 md:p-10">
      {dataVal ? (
        <>
          <div className="header flex">
            <h1 className="text-2xl font-serif font-extrabold mr-2 ml-2 md:ml-10">
              Estate Details
            </h1>
            <div className="border-b-2 w-3/4 mb-4"></div>
          </div>
          <div className="main p-1 md:p-10">
            <div className="first flex flex-wrap justify-between flex-col md:flex-row">
              <div className="name p-2">
                <h2 className="font-semibold mb-2">NAME</h2>
                <h2 className="text-gray-700">
                  {" "}
                  {dataVal
                    ? dataVal.name
                      ? dataVal.name
                      : "Null"
                    : "lol"}
                </h2>
              </div>
              <div className="state p-2">
                <h2 className="font-semibold mb-2">STATE</h2>
                <h2 className="text-gray-700">
                  {" "}
                  {dataVal
                    ? dataVal.city.stateId
                      ? dataVal.city.stateId
                      : "Null"
                    : "lol"}
                </h2>
              </div>
              <div className="city p-2">
                <h2 className="font-semibold mb-2">CITY</h2>
                <h2 className="text-gray-700">
                  {" "}
                  {dataVal
                    ? dataVal.city.name
                      ? dataVal.city.name
                      : "Null"
                    : "lol"}
                </h2>
              </div>
              <div className="address p-2">
                <h2 className="font-semibold mb-2">ADDRESS</h2>
                <h2 className="text-gray-700">
                  {" "}
                  {dataVal
                    ? dataVal.address
                      ? dataVal.address
                      : "Null"
                    : "lol"}
                </h2>
              </div>
            </div>
            <div className="second flex flex-wrap justify-between flex-col md:flex-row">
              <div className="name p-2">
                <h2 className="font-semibold">POPULAR LANDMARK</h2>
                <h2 className="text-gray-700">
                  {" "}
                  {dataVal
                    ? dataVal.landmark
                      ? dataVal.landmark
                      : "Null"
                    : "lol"}
                </h2>
              </div>
              <div className="name p-2">
                <h2 className="font-semibold mb-2">Estate Land(In Hectares)</h2>
                <h2 className="text-gray-700">
                  {" "}
                  {dataVal
                    ? dataVal.landSize
                      ? dataVal.landSize
                      : "Null"
                    : "lol"}
                </h2>
              </div>
              <div className="name p-2">
                <h2 className="font-semibold mb-2">COMPLETION STATUS</h2>
                <h2 className="text-gray-700">
                  {dataVal
                    ? dataVal.completionStatus
                      ? dataVal.completionStatus
                      : "Null"
                    : "lol"}
                </h2>
              </div>
              <div className="name p-2">
                <h2 className="font-semibold mb-2">VIDEO URL</h2>
                <h2 className="text-gray-700">
                  {dataVal
                    ? dataVal.videoUrl
                      ? dataVal.videoUrl
                      : "Null"
                    : "lol"}
                </h2>
              </div>
            </div>
            <div className="description mt-4">
              <div className="name p-2">
                <h2 className="font-semibold mb-2">NUMBER OF FLOORS</h2>
                <h2 className="text-gray-700">
                  {dataVal ? (dataVal.floors ? dataVal.floors : "0") : "lol"}
                </h2>
              </div>
              <div className="name p-2">
                <h2 className="font-semibold mb-2">DESCRIPTION</h2>
                <h2 className="text-gray-700 w-4/5 md:w-1/2">
                  {dataVal
                    ? dataVal.description
                      ? dataVal.description
                      : "Null"
                    : "lol"}
                </h2>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default EstateDetails;