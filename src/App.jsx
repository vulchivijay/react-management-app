import { useState } from "react";
import NewProject from "./components/Newproject";
import Sidebar from "./components/Sidebar";
import NoProjects from "./components/Noprojects";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    project: [],
  });

  const handleCreateProject = () => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    });
  }

  const handleSaveProject = (projectData) => {
    setProjectsState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        project: [...prevState.project, newProject],
      }
    });
  }

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject saveProject={handleSaveProject} />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjects createProject={handleCreateProject} />
  }

  return (
    <main className='h-screen flex gap-8'>
      <Sidebar addproject={handleCreateProject} showProjects={projectsState} />
      {content}
    </main>
  );
}

export default App;
