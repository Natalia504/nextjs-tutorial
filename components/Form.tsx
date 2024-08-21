import { createUser } from "@/utils/actions";

function Form() {
  return (
    <form className={formStyle} action={createUser}>
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
      <button className={btnStyle} type="submit">
        Submit
      </button>
    </form>
  );
}

const formStyle = "bg-white max-w-lg flex flex-col gap-y-4  shadow rounded p-8";
const inputStyle = "border shadow rounded py-2 px-3 text-gray-700";
const btnStyle =
  "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize";
export default Form;
