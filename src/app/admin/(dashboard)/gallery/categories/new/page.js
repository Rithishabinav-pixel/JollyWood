import CategoryForm from "../CategoryForm";
import style from "../../../../admin.module.css";

export const dynamic = "force-dynamic";

export default function NewGalleryCategoryPage() {
  return (
    <>
      <div className={style.pageHeader}>
        <h1>Add Gallery Category</h1>
      </div>
      <div className={style.card}>
        <CategoryForm />
      </div>
    </>
  );
}
