// import BackendDataFetch from "./BackendDataFetch";
import Bio from "./components/Bio";
import Project from "./components/Project";
import ConnectWithMe from "./components/ConnectWithMe";
// import NextUIcard from "./components/cards/NextUIcard";
// import CoreUIcard from "./components/cards/CoreUIcard";
import MultiActionAreaCard from "./components/cards/MUIcard";

export default function App() {
  return (
    <>
      <h1>Jamie Bort Software Engineer</h1>
      <div>
        <MultiActionAreaCard />
        {/* <NextUIcard /> */}
        {/* <CoreUIcard /> */}
      </div>
      <Bio title="Bio" />
      <Project title="Projects" />
      <ConnectWithMe title="Connect With Me" />
      {/* <BackendDataFetch /> */}
    </>
  );
}
