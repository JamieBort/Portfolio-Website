// ./frontend/src/App.jsx

import Bio from "./components/Bio";
import Project from "./components/Project";
import ConnectWithMe from "./components/ConnectWithMe";
// import BackendDataFetch from "./components/BackendDataFetch";

export default function App() {
  return (
    <>
      <h1>Jamie Bort Software Engineer</h1>
      {/* <BackendDataFetch /> */}
      <Bio title="Bio" />
      <Project title="Projects" />
      <ConnectWithMe title="Connect With Me" />
    </>
  );
}
