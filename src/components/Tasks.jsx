import { useRef, useState } from "react";
import Button from "./Button";
import Input from "./Input";

export default function Tasks({ addTask, deleteTask, tasks }) {
  const [task, setTask] = useState('');
  const taskEle = useRef();

  const handleChange = (event) => {
    setTask(event.target.value);
  }

  const handleAddBtn = () => {
    setTask('');
    addTask(task);
  }

  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700">Tasks</h2>
      <div className="flex items-center justify-start gap-2">
        <Input type='text' onChange={handleChange} value={task} />
        <Button onClick={handleAddBtn}>Add Task</Button>
      </div>
      {tasks.length === 0 && (<p className="text-stone-500">This project does not have any taks yet!</p>)}
      {tasks.length > 0 && (<ul className="w-full p-4 mt-8 rounded-md bg-stone-100">
        {tasks.map((task) => (<li key={task.taskId} className="flex items-center justify-between my-4">
          <p className="text-md text-stone-600 mr-6">{task.text}</p>
          <Button onClick={() => deleteTask(task.taskId)}>Delete Task</Button>
        </li>
        ))}
      </ul>)}
    </section>
  )
}