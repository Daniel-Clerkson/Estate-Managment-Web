import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const AddEstates = ({ addEstateSubmit }) => {
  const [cityID, setCityID] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [videoURL, setVideoURL] = useState("");
  const [description, setDescription] = useState("");
  const [ownerType, setOwnerType] = useState("");
  const [landmark, setLandMark] = useState("");
  const [completionStatus, setCompletionStatus] = useState("");
  const [completionDate, setCompletionDate] = useState("");
  const [completionLevel, setCompletionLevel] = useState("");
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [landSize, setLandSize] = useState(0);
  const [sellerID, setSellerID] = useState("");
  const [organizerID, setOrganizerID] = useState("");
  const [floors, setFloors] = useState(0);
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    const newEstate = {
      name: name,
      cityId: cityID,
      address: address,
      videoUrl: videoURL,
      ownerType: ownerType,
      landmark: landmark,
      description: description,
      completionStatus: completionStatus,
      completionDate: "2025-04-07T15:25:19.519Z",
      completionLevel: completionLevel,
      longitude: longitude,
      latitude: latitude,
      features: [
        {
          id: "string",
          name: "string",
          icon: "string",
          hasAmpleParkingSpace: true,
          hasUniformSecurity: true,
          hasCCTVSurveillanceSystem: true,
          hasInverter: true,
          has24HoursElectricity: true,
          hasInternetServices: true,
          hasFiberOptics: true,
          hasReliableWaterSupply: true,
          hasChildernPlayground: true,
          hasEquestrainOrPoloCenter: true,
          hasTennisCourt: true,
          hasGolfCourt: true,
          hasLoungeOrBar: true,
          hasResturant: true,
          hasLakesOrPonds: true,
          hasGazebos: true,
          hasChildcareFacilities: true,
          hasSchool: true,
          hasHospital: true,
          hasShoppingComplex: true,
          hasChurchOrMosque: true,
          hasGreeneryAndOpenGardens: true,
          hasGym: true,
          hasBasketballCourt: true,
          hasFootballPitch: true,
          hasSwimmingPool: true,
          hasClubHouse: true,
          hasBank: true,
          hasCinema: true,
          hasEnsuite: true,
          hasPoPCeiling: true,
          hasWalkInClosets: true,
          hasAirConditioning: true,
          hasSpeedInternet: true,
          hasWineCeller: true,
          hasFurnished: true,
          hasWifi: true,
          hasFibreOptics: true,
          hasSatelliteTV: true,
          hasElevator: true,
          hasBoysQuarters: true,
          hasSmartHomeTechnology: true,
          hasFullyEquippedKitcken: true,
          hasModernAppliances: true,
          hasGraniteCountertops: true,
          hasBreakfastBar: true,
          hasStorageRoom: true,
          hasUpgradedBathroomFeatures: true,
          hasSpaLikeFeatures: true,
          hasTileOrMarbleFeatures: true,
          hasOpenFloorPlan: true,
          hasLargeWindows: true,
          hasBuiltInHouseTheater: true,
          hasPrivateBackyard: true,
          hasPatioOrDarkSpace: true,
          hasLandscapedGarden: true,
          hasHomeOfficeSpace: true,
          hasBuiltInShelfOrBookSpace: true,
          hasAmpleNaturalLight: true,
          hasSecuritySystem: true,
          hasBulletProofDoors: true,
          hasGatedCompound: true,
          hasReinforcedDoorsAndWindows: true,
          hasGaurdedCommunity: true,
          hasUniformedSecurity: true,
          hasParkingGarage: true,
          hasDriveWaySpace: true,
          hasStreetParkingAvaliability: true,
          hasPrivateParkingSpace: true,
          hasElectricity: true,
          hasBackupGenerator: true,
          hasBorehole: true,
          hasWaterBoard: true,
          hasProximityToSchools: true,
          hasProximityToShoppingMalls: true,
          hasProximityToSupermarkets: true,
          hasNearByPublicTransportation: true,
          hasAccessiblityViaBoltOrUber: true,
          hasFencedBackyard: true,
          hasPetFriendlyNeighbourhood: true,
          hasNearbyWalkingTrailsAndSidewalks: true,
        },
      ],
      feature: {
        id: "string",
        name: "string",
        icon: "string",
        hasAmpleParkingSpace: true,
        hasUniformSecurity: true,
        hasCCTVSurveillanceSystem: true,
        hasInverter: true,
        has24HoursElectricity: true,
        hasInternetServices: true,
        hasFiberOptics: true,
        hasReliableWaterSupply: true,
        hasChildernPlayground: true,
        hasEquestrainOrPoloCenter: true,
        hasTennisCourt: true,
        hasGolfCourt: true,
        hasLoungeOrBar: true,
        hasResturant: true,
        hasLakesOrPonds: true,
        hasGazebos: true,
        hasChildcareFacilities: true,
        hasSchool: true,
        hasHospital: true,
        hasShoppingComplex: true,
        hasChurchOrMosque: true,
        hasGreeneryAndOpenGardens: true,
        hasGym: true,
        hasBasketballCourt: true,
        hasFootballPitch: true,
        hasSwimmingPool: true,
        hasClubHouse: true,
        hasBank: true,
        hasCinema: true,
        hasEnsuite: true,
        hasPoPCeiling: true,
        hasWalkInClosets: true,
        hasAirConditioning: true,
        hasSpeedInternet: true,
        hasWineCeller: true,
        hasFurnished: true,
        hasWifi: true,
        hasFibreOptics: true,
        hasSatelliteTV: true,
        hasElevator: true,
        hasBoysQuarters: true,
        hasSmartHomeTechnology: true,
        hasFullyEquippedKitcken: true,
        hasModernAppliances: true,
        hasGraniteCountertops: true,
        hasBreakfastBar: true,
        hasStorageRoom: true,
        hasUpgradedBathroomFeatures: true,
        hasSpaLikeFeatures: true,
        hasTileOrMarbleFeatures: true,
        hasOpenFloorPlan: true,
        hasLargeWindows: true,
        hasBuiltInHouseTheater: true,
        hasPrivateBackyard: true,
        hasPatioOrDarkSpace: true,
        hasLandscapedGarden: true,
        hasHomeOfficeSpace: true,
        hasBuiltInShelfOrBookSpace: true,
        hasAmpleNaturalLight: true,
        hasSecuritySystem: true,
        hasBulletProofDoors: true,
        hasGatedCompound: true,
        hasReinforcedDoorsAndWindows: true,
        hasGaurdedCommunity: true,
        hasUniformedSecurity: true,
        hasParkingGarage: true,
        hasDriveWaySpace: true,
        hasStreetParkingAvaliability: true,
        hasPrivateParkingSpace: true,
        hasElectricity: true,
        hasBackupGenerator: true,
        hasBorehole: true,
        hasWaterBoard: true,
        hasProximityToSchools: true,
        hasProximityToShoppingMalls: true,
        hasProximityToSupermarkets: true,
        hasNearByPublicTransportation: true,
        hasAccessiblityViaBoltOrUber: true,
        hasFencedBackyard: true,
        hasPetFriendlyNeighbourhood: true,
        hasNearbyWalkingTrailsAndSidewalks: true,
      },
      landSize: landSize,
      images: [
        {
          base64: "string",
          ownerId: "string",
          optionId: "string",
          type: "string",
          extension: "string",
          description: image,
          name: "string",
          extraProperties: {
            isCoverImage: true,
          },
          revisionId: "string",
        },
      ],
      organizationId: organizerID,
      sellerId: sellerID,
      floors: floors,
    };

    console.log(newEstate);

    toast.success("Successfully Added");

    addEstateSubmit(newEstate);

    navigate("/home")
  };

  return (
    <>
      <section className="bg-indigo-50">
        <ToastContainer />
        <div className="container m-auto max-w-2xl py-24">
          <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
            <form onSubmit={submitForm}>
              <h2 className="text-3xl text-center font-semibold mb-6">
                Add Estate
              </h2>

              <div className="mb-4">
                <label
                  htmlFor="type"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Estate Name
                </label>
                <input
                  id="text"
                  name="name"
                  className="border rounded w-full py-2 px-3"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  City ID
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="border rounded w-full py-2 px-3 mb-2"
                  value={cityID}
                  onChange={(e) => setCityID(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  className="border rounded w-full py-2 px-3"
                  rows="4"
                  placeholder="Beautiful Apartment in Lagos..."
                  value={description}
                  onChange={(e) => setAddress(e.target.value)}
                ></textarea>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="type"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Video URL
                </label>
                <input
                  id="videoURL"
                  name="videoURL"
                  className="border rounded w-full py-2 px-3"
                  value={videoURL}
                  onChange={(e) => setVideoURL(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Owner Type
                </label>
                <input
                  type="text"
                  id="ownerType"
                  name="ownerType"
                  className="border rounded w-full py-2 px-3 mb-2"
                  value={ownerType}
                  onChange={(e) => setOwnerType(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Landmark
                </label>
                <input
                  type="text"
                  id="landmark"
                  name="landmark"
                  className="border rounded w-full py-2 px-3 mb-2"
                  value={landmark}
                  onChange={(e) => setLandMark(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Description
                </label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  className="border rounded w-full py-2 px-3 mb-2"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Completion Status
                </label>
                <input
                  type="text"
                  id="completionStatus"
                  name="completionStatus"
                  className="border rounded w-full py-2 px-3 mb-2"
                  value={completionStatus}
                  onChange={(e) => setCompletionStatus(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Completion Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="border rounded w-full py-2 px-3 mb-2"
                  value={completionDate}
                  onChange={(e) => setCompletionDate(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Completion Level
                </label>
                <input
                  type="text"
                  id="ownerType"
                  name="ownerType"
                  className="border rounded w-full py-2 px-3 mb-2"
                  value={completionLevel}
                  onChange={(e) => setCompletionLevel(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Longitude
                </label>
                <input
                  type="number"
                  id="longitude"
                  name="lon"
                  className="border rounded w-full py-2 px-3 mb-2"
                  value={longitude}
                  onChange={(e) => setLongitude(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Latitude
                </label>
                <input
                  type="number"
                  id="lat"
                  name="lat"
                  className="border rounded w-full py-2 px-3 mb-2"
                  value={latitude}
                  onChange={(e) => setLatitude(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  OrganizerID
                </label>
                <input
                  type="number"
                  id="lat"
                  name="lat"
                  className="border rounded w-full py-2 px-3 mb-2"
                  value={organizerID}
                  onChange={(e) => setOrganizerID(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  SellerID
                </label>
                <input
                  type="text"
                  id="sell"
                  name="sell"
                  className="border rounded w-full py-2 px-3 mb-2"
                  value={sellerID}
                  onChange={(e) => setSellerID(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Floors
                </label>
                <input
                  type="number"
                  id="fls"
                  name="fls"
                  className="border rounded w-full py-2 px-3 mb-2"
                  value={floors}
                  onChange={(e) => setFloors(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Image
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="Image"
                  required
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>

              <div>
                <button
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                  type="submit"
                  onClick={() => submitForm()}
                >
                  Add Estate
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddEstates;
