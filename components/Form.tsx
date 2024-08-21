"use client";

import { useFormStatus, useFormState } from "react-dom";
import { createUser } from "@/utils/actions";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button className={btnStyle} type="submit" disabled={pending}>
      {pending ? "Submitting" : "Submit"}
    </button>
  );
};

function Form() {
  const [message, formAction] = useFormState(createUser, null);

  return (
    <form className={formStyle} action={formAction}>
      {message && <p>{message}</p>}
      <h2 className="text-2xl capitalize mb-4">create user</h2>
      <input
        className={inputStyle}
        type="text"
        name="firstName"
        defaultValue="Peter"
        required
      />
      <input
        className={inputStyle}
        type="text"
        name="lastName"
        defaultValue="Smith"
        required
      />
      <SubmitButton />
    </form>
  );
}

const formStyle = "bg-white max-w-lg flex flex-col gap-y-4  shadow rounded p-8";
const inputStyle = "border shadow rounded py-2 px-3 text-gray-700";
const btnStyle =
  "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize";
export default Form;
