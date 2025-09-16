import Button from "./Button";
import Tasks from "./Tasks";

export default function ViewProject({ project, deleteProject, addTask, deleteTask, tasks }) {
  const formattedDate = new Date(project.duedate).toLocaleDateString();
  return (
    <div className="w-[25rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <Button onClick={deleteProject}>Delete</Button>
        </li>
        <li>
          <Button>Edit</Button>
        </li>
      </menu>
      <div>
        <h2 className="text-xl font-bold text-stone-700 my-4">{project?.title}</h2>
        <p className="text-md text-stone-600 mb-4">{project?.description}</p>
        <p className="text-md text-stone-600 mb-4">{formattedDate}</p>
      </div>
      <hr />
      <Tasks addTask={addTask} deleteTask={deleteTask} tasks={tasks} />
    </div>
  )
}