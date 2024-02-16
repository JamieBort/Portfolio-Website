// ./frontend/src/api/BackendAPI.jsx

// URL to the back end.
const URL = `https://backend-jamiebort-github-io.onrender.com/`;

export const BackendAPI = {
  // method to obtain the pinned repos from the back end.
  getPinned: fetch(URL)
    .then((response) => {
      // console.log("response:", response); // Let's see the response in the console.
      if (response.ok) {
        // Yay! We have data back from the back end.
        return response.json();
      }
      // We have a problem.
      throw new Error("apiCall thrown error.");
    })
    // Uh oh
    .catch((error) => console.log("apiCall catch error:", error)),

  //   // Method to make other api calls. Not yet set up.
  // getOtherCalls: <to be set up>
};
