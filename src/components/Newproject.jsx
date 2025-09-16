import { useRef } from "react";
import Input from "./Input";
import Button from "./Button";
import Modal from "./Modal";

export default function NewProject({ saveProject, cancelProject }) {
  const title = useRef();
  const description = useRef();
  const duedate = useRef();
  const dialog = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = duedate.current.value;

    // validation
    if (enteredTitle.trim() === '' ||
      enteredDescription.trim() === '' ||
      enteredDueDate.trim() === ''
    ) {
      dialog.current.open();
      return;
    }

    saveProject({
      title: enteredTitle,
      description: enteredDescription,
      duedate: enteredDueDate,
    })
  }

  const handleCloseModal = () => {
    dialog.current.close();
  }

  return (
    <>
      <Modal ref={dialog} closeModal={handleCloseModal}>
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-md text-stone-600 mb-4">Ooo... looks like you forgot to enter a value.</p>
        <p className="text-md text-stone-600 mb-4">Please make sure you provide a valid for every input field.</p>
      </Modal>
      <div className="w-[25rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <Button onClick={cancelProject}>Cancel</Button>
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
    </>

  )
}