// import BackendDataFetch from "./BackendDataFetch";
import Bio from "./components/Bio";
import Project from "./components/Project";
import ConnectWithMe from "./components/ConnectWithMe";
// import NextUIcard from "./components/cards/NextUIcard";

export default function App() {
  return (
    <>
      <h1>Jamie Bort Software Engineer</h1>
      {/* <NextUIcard /> */}
      <Bio title="Bio" />
      <Project title="Projects" />
      <ConnectWithMe title="Connect With Me" />
      {/* <BackendDataFetch /> */}
    </>
  );
}
