"use client"

import { addPost } from "@/app/_lib/action"
import { useFormState } from "react-dom";

const AdminPostForm = () => {
  const [state, formAction] = useFormState(addPost, undefined);
  
  return (
    <form action={formAction}>
      <h1>Add New Post</h1>
      <input type="hidden" name="userId"  value={1}/>
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="slug" placeholder="slug" />
      <input type="text" name="img" placeholder="img" />
      <textarea type="text" name="desc" placeholder="desc" rows={10} />
      <button>Add</button>
      {state?.error}
    </form>
  );
};

export default AdminPostForm;
