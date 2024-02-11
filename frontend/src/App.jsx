// import BackendDataFetch from "./BackendDataFetch";
import Bio from "./components/Bio";
import Project from "./components/Project";
import ConnectWithMe from "./components/ConnectWithMe";
// import NextUIcard from "./components/cards/NextUIcard";
// import CoreUIcard from "./components/cards/CoreUIcard";

export default function App() {
  return (
    <>
      <h1>Jamie Bort Software Engineer</h1>
      {/* <NextUIcard /> */}
      {/* <CoreUIcard /> */}
      <Bio title="Bio" />
      <Project title="Projects" />
      <ConnectWithMe title="Connect With Me" />
      {/* <BackendDataFetch /> */}
    </>
  );
}
