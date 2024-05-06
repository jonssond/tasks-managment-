import noProjectImage from "../assets/no-projects.png";

export default function NoProjectSelected() {
  return (
    <div className="m-24 text-center w-2/3">
      <img src={noProjectImage} alt="An empty task list" />
      <h2>No Task Selected</h2>
      <p>Select a task or get started with a new one</p>
      <p>
        <button>Create New Task</button>
      </p>
    </div>
  );
}
