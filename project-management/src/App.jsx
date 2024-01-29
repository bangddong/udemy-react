import { useState } from "react";

import Sidebar from "./components/Sidebar";
import AddProject from "./components/AddProject";
import NoProject from "./components/NoProject";
import Project from "./components/Project";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(text) {
    setProjectState((prevState) => {
      const newTask = {
        id: Math.random().toString(),
        projectId: prevState.selectedProjectId,
        text,
      };

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  function handleAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleSave(inputData) {
    setProjectState((prevState) => {
      const newProject = {
        ...inputData,
        id: Math.random().toString(), // 완벽한 랜덤은 아니지만, 일단은 이렇게
      };

      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
        selectedProjectId: undefined,
      };
    });
  }

  function handleCancel() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleDeleteProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
        selectedProjectId: undefined,
      };
    });
  }

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );

  let content = (
    <Project
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectState.tasks}
    />
  );

  if (projectState.selectedProjectId === null) {
    content = <AddProject onCancel={handleCancel} onSave={handleSave} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProject onAddProject={handleAddProject} />;
  } else {
    content = <Project />;
  }

  return (
    <main className="flex h-screen gap-8 my-8">
      <Sidebar
        projects={projectState.projects}
        onAddProject={handleAddProject}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
