import Button from "./Button";
import Input from "./Input";

export default function Tasks() {



  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <div className="d-flex items-center justify-start">
        <Input type='text' />
        <Button>Add Task</Button>
      </div>
      <p className="text-stone-100">This project does not have any taks yet!</p>
      <ul>
        <li></li>
      </ul>
    </section>
  )
}