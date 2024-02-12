// ./frontend/src/App.jsx

import BioSection from "./components/BioSection";
import ProjectSection from "./components/ProjectSection";
import ConnectWithMeSection from "./components/ConnectWithMeSection";

export default function App() {
  return (
    <>
      <h1>Jamie Bort Software Engineer</h1>
      <BioSection title="BioSection" />
      <ProjectSection title="Projects" />
      <ConnectWithMeSection title="Connect With Me" />
    </>
  );
}
