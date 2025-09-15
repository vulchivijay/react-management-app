import { useRef } from "react";
import Input from "./Input";
import Button from "./Button";

export default function NewProject({ saveProject }) {
  const title = useRef();
  const description = useRef();
  const duedate = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = duedate.current.value;

    // validation
    if (enteredTitle.trim() === '' ||
      enteredDescription.trim() === '' ||
      enteredDueDate.trim() === ''
    ) {

    }

    saveProject({
      title: enteredTitle,
      description: enteredDescription,
      duedate: enteredDueDate,
    })
  }

  const handleCancel = () => {
    return ('');
  }

  return (
    <div className="w-[25rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <Button onClick={handleCancel}>Cancel</Button>
        </li>
        <li>
          <Button onClick={handleSave}>Save</Button>
        </li>
      </menu>
      <div>
        <Input type="text" ref={title} label='Title' />
        <Input ref={description} label='Description' textarea={true} />
        <Input type="date" ref={duedate} label='Due Date' />
      </div>
    </div>
  )
}