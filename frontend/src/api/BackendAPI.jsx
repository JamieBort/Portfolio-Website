// ./frontend/src/api/BackendAPI.jsx

// URL to the hosted back end.
const URL = `https://backend-jamiebort-github-io.onrender.com/`;

// URL to the local back end.
// const URL = `http://localhost:3001/`;

export const BackendAPI = {
  // Method to obtain the pinned repos from the back end.
  getPinned: fetch(URL)
    .then((response) => {
      // console.log("response:", response);
      if (response.ok) {
        // console.log("response.json():", response.json());
        return response.json();
      }
      // We have a problem.
      throw new Error("apiCall thrown error.");
    })
    // Catching this error.
    .catch((error) => console.log("apiCall catch error:", error)),

  // Method to make other api calls. Not yet set up.
  // getOtherCalls: <to be set up>
};
