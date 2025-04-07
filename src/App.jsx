import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'

import MainLayout from './layout/MainLayout'
import Homepage from './pages/Home'
import './index.css'
import Login from './pages/Login'
import Estate from './pages/Estate'
import CreateEstate from './pages/CRUDPages/CreateEstate'
import ErrorPage from './pages/Error'

const App = () => {

  const token = localStorage.getItem("token");

  //Add Estate
    const addEstate = async (newJob) => {
      try {
        // Add try catch block to catch errors
        const res = await fetch("https://dev-api.giddaa.com/developer/estate/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },

          body: JSON.stringify(newJob),
        });
        if (!res.ok) {
          //check if the request response is not ok, meaning that the server returned a status code which is not in the 200-299 range.
          throw new Error(`HTTP error! status: ${res.status}`); // we throw an error with the res status code
        }
        const data = await res.json()
        console.log(data)
        return;
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    // Delete Estate
    const deleteEstate = async (id) => {
      // id should be used instead of the undefined variable estate
      const res = await fetch(
        `https://dev-api.giddaa.com/developer/estate/${id}`, // corrected the use of id here
        {
          method: "DELETE",
        }
      );
      if (!res.ok) {
          //check if the request response is not ok, meaning that the server returned a status code which is not in the 200-299 range.
          throw new Error(`HTTP error! status: ${res.status}`); // we throw an error with the res status code
        }
        const data = await res.json()
        console.log(data)
      return;
    };


    // Updates Estate
    const updateEstate = async (job) => {
      const res = await fetch(`/api/jobs/${job.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(job),
      });
      return;
    };


  const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
          <Route path="/home" element={<Homepage />} />
          <Route path='/estate/:id' element={<Estate />} />
          <Route path='/estate/create' element={<CreateEstate addEstateSubmit={addEstate} />} />
          <Route path="/" element={<Login />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      )
  );

  return <RouterProvider router={router} />
}

export default App