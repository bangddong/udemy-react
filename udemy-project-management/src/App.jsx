import { useState } from "react";

import Sidebar from "./components/Sidebar";
import AddProject from "./components/AddProject";
import NoProject from "./components/NoProject";

function App() {
  const [projectList, setProjectList] = useState([]);
  const [noProject, setNoProject] = useState(true);

  function handleCreate() {
    setNoProject(false);
  }

  function handleCancel() {
    setNoProject(true);
  }

  function handleSave(inputData) {
    setProjectList([
      ...projectList,
      {
        title: inputData.title,
        description: inputData.description,
        dueDate: inputData.dueDate,
      },
    ]);
  }

  function handleProjectBtnClick() {}

  return (
    <main className="flex h-screen gap-8 my-8">
      <Sidebar projectList={projectList} onCreateClick={handleCreate} />
      {noProject && <NoProject onCreateClick={handleCreate} />}
      {!noProject && (
        <AddProject onCancelClick={handleCancel} onSaveClick={handleSave} />
      )}
    </main>
  );
}

export default App;
