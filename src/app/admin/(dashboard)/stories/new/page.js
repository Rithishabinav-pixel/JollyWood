import NewStoryForm from "../NewStoryForm";
import style from "../../../admin.module.css";

export default function NewStoryPage() {
  return (
    <>
      <div className={style.pageHeader}>
        <h1>Add Visitor Story</h1>
      </div>
      <div className={style.card}>
        <NewStoryForm />
      </div>
    </>
  );
}
