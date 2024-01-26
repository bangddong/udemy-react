export default function Sidebar({ projectList, onCreateClick }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        YOUR PROJECTS
      </h2>
      <button
        onClick={onCreateClick}
        className="px-4 py-2 text-xs rounded-md md:text-base bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
      >
        + Add Project
      </button>
      {projectList.map((project) => {
        <button
          key={project.dueDate}
          className="w-full px-2 py-1 my-1 text-left rounded-sm hover:text-stone-200 hover:bg-stone-800"
        >
          {project.title}
        </button>;
      })}
    </aside>
  );
}
