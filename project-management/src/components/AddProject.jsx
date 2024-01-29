import { useRef } from "react";

import Input from "./Input";
import Modal from "./Modal";

export default function AddProject({ onCancel, onSave }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const title = title.current.value;
    const description = description.current.value;
    const dueDate = dueDate.current.value;

    if (
      title.trim() === "" ||
      description.trim() === "" ||
      dueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onSave({ title: title, description: description, dueDate: dueDate });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="my-4 text-xl font-bold text-stone-700">Invalid Input</h2>
        <p className="mb-4 text-stone-600">
          Oops ... lokks like you forgot to enter a value.
        </p>
        <p className="mb-4 text-stone-600">
          please make sure you provide a valid valuiie for every input field.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCancel}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" label="Title" ref={title} />
          <Input label="Description" ref={description} textarea />
          <Input type="date" label="Due Date" ref={dueDate} />
        </div>
      </div>
    </>
  );
}
