import { useRef, useState } from "react";
import Input from "./Input";

export default function AddProject({ onCancelClick, onSaveClick }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function onSave() {
    const inputData = {
      title: title.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value,
    };
    onSaveClick(inputData);
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button
            onClick={onCancelClick}
            className="text-stone-800 hover:text-stone-950"
          >
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={onSave}
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input label="Title" ref={title} />
        <Input label="Description" ref={description} textarea />
        <Input label="Due Date" ref={dueDate} />
      </div>
    </div>
  );
}
