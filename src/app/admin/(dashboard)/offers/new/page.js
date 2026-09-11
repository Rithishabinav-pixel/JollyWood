import OfferForm from "../OfferForm";
import { createOffer } from "../actions";
import style from "../../../admin.module.css";

export const dynamic = "force-dynamic";

export default function NewOfferPage() {
  return (
    <>
      <div className={style.pageHeader}>
        <h1>Add Offer</h1>
      </div>
      <div className={style.card}>
        <OfferForm action={createOffer} />
      </div>
    </>
  );
}
