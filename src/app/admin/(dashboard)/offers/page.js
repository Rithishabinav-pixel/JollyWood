import Link from "next/link";
import { prisma } from "@/lib/prisma";
import DeleteButton from "../../DeleteButton";
import { deleteOffer } from "./actions";
import style from "../../admin.module.css";

export const dynamic = "force-dynamic";

export default async function AdminOffersPage() {
  const offers = await prisma.offer.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <>
      <div className={style.pageHeader}>
        <h1>Special Offers</h1>
        <Link href="/admin/offers/new" className={style.btn}>
          Add Offer
        </Link>
      </div>

      <div className={style.card}>
        {offers.length === 0 ? (
          <p className={style.empty}>No offers yet. Click "Add Offer" to create one.</p>
        ) : (
          <table className={style.table}>
            <thead>
              <tr>
                <th>Image</th>
                <th>Link</th>
                <th>Expiry Date</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {offers.map((offer) => {
                const isExpired = offer.expiryDate && new Date(offer.expiryDate) < new Date();

                return (
                <tr key={offer.id}>
                  <td>
                    <img className={style.thumb} src={offer.image} alt="Offer" />
                  </td>
                  <td>{offer.link}</td>
                  <td>{offer.expiryDate ? new Date(offer.expiryDate).toISOString().slice(0, 10) : "—"}</td>
                  <td>{isExpired ? "Inactive" : "Active"}</td>
                  <td>
                    <div className={style.rowActions}>
                      <Link href={`/admin/offers/${offer.id}/edit`} className={`${style.btn} ${style.btnSecondary} ${style.smallBtn}`}>
                        Edit
                      </Link>
                      <DeleteButton action={deleteOffer.bind(null, offer.id)} confirmText="Delete this offer?">
                        Delete
                      </DeleteButton>
                    </div>
                  </td>
                </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
