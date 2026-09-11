import NewStoryForm from "../NewStoryForm";
import style from "../../../admin.module.css";

export const dynamic = "force-dynamic";

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
