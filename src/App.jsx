import { useState } from "react";
import NewProject from "./components/Newproject";
import Sidebar from "./components/Sidebar";
import NoProjects from "./components/Noprojects";
import ViewProject from "./components/ViewProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    project: [],
    tasks: []
  });

  const handleAddTask = (task) => {
    setProjectsState(prevState => {
      const newTask = {
        text: task,
        projectId: prevState.selectedProjectId,
        taskId: Math.random(),
      };

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      }
    });
  }

  const handleDeleteTask = (id) => {
    console.log('TESTing', id)
    setProjectsState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => {
          return task.taskId !== id
        }),
      }
    });
  }

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

  const handleCancelProject = () => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      }
    });
  }

  const handleViewProjectDetails = (id) => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id,
      }
    });
  }

  const handleDeleteProject = () => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        project: prevState.project.filter((project) => {
          return project.id !== prevState.selectedProjectId;
        }),
      }
    });
  }

  const selectedProjectId = projectsState.project.find(project => project.id === projectsState.selectedProjectId);

  let content = <ViewProject project={selectedProjectId} deleteProject={handleDeleteProject} addTask={handleAddTask} deleteTask={handleDeleteTask} tasks={projectsState.tasks} />;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject saveProject={handleSaveProject} cancelProject={handleCancelProject} />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjects createProject={handleCreateProject} />
  }

  return (
    <main className='h-screen flex gap-8'>
      <Sidebar
        addproject={handleCreateProject}
        showProjects={projectsState}
        viewProjectDetails={handleViewProjectDetails}
      />
      {content}
    </main>
  );
}

export default App;
