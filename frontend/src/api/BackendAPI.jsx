// ./frontend/src/api/BackendAPI.jsx

const URL = `https://backend-jamiebort-github-io.onrender.com/`;
export const BackendAPI = {
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
  // getOtherCalls: <to be set up>
};
