import { deleteUser, removeUser } from "@/utils/actions";

function DeleteButton({ id }: { id: string }) {
  const removeUserWithId = removeUser.bind(null, id);

  return (
    // <form action={deleteUser}>
    <form action={removeUserWithId}>
      {/* <input type="hidden" name="id" value={id} /> */}{" "}
      {/* to use with deletUser, issue: you can see the user id in the dom */}
      <input type="hidden" name="remove" />
      <button
        type="submit"
        className="bg-red-500 text-white text-xs rounded p-2"
      >
        delete
      </button>
    </form>
  );
}
export default DeleteButton;
