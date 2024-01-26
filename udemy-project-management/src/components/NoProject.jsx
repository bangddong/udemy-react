import logo from "../assets/no-projects.png";

export default function NoProject({ onCreateClick }) {
  return (
    <div className="w-2/3 mt-24 text-center">
      <img
        className="object-contain w-16 h-16 mx-auto"
        src={logo}
        alt="No project image"
      />
      <h2 className="my-4 text-xl font-bold text-stone-700">
        No Project Selected
      </h2>
      <p className="mb-4 text-stone-400">
        Select a project or get started with a new one
      </p>
      <button
        onClick={onCreateClick}
        className="px-6 py-2 rounded-md bg-stone-800 text-stone-400 hover:bg-stone-950"
      >
        Create new project
      </button>
    </div>
  );
}
