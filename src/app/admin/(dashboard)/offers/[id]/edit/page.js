import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import OfferForm from "../../OfferForm";
import { updateOffer } from "../../actions";
import style from "../../../../admin.module.css";

export default async function EditOfferPage({ params }) {
  const { id } = await params;
  const offer = await prisma.offer.findUnique({ where: { id } });

  if (!offer) {
    notFound();
  }

  return (
    <>
      <div className={style.pageHeader}>
        <h1>Edit Offer</h1>
      </div>
      <div className={style.card}>
        <OfferForm action={updateOffer.bind(null, id)} offer={offer} />
      </div>
    </>
  );
}
