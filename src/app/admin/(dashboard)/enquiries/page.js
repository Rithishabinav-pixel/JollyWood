import { prisma } from "@/lib/prisma";
import EnquiriesTabs from "./EnquiriesTabs";
import style from "../../admin.module.css";

export const dynamic = "force-dynamic";

export default async function AdminEnquiriesPage({ searchParams }) {
  const params = await searchParams;
  const initialTab = params?.tab === "career" ? "career" : params?.tab === "corporate" ? "corporate" : "contact";

  const [contactEnquiries, careerEnquiries, corporateEnquiries] = await Promise.all([
    prisma.contactEnquiry.findMany({ orderBy: { createdAt: "desc" } }),
    prisma.careerEnquiry.findMany({ orderBy: { createdAt: "desc" } }),
    prisma.corporateEnquiry.findMany({ orderBy: { createdAt: "desc" } }),
  ]);

  return (
    <>
      <div className={style.pageHeader}>
        <h1>Enquiries</h1>
      </div>

      <EnquiriesTabs
        contactEnquiries={contactEnquiries}
        careerEnquiries={careerEnquiries}
        corporateEnquiries={corporateEnquiries}
        initialTab={initialTab}
      />
    </>
  );
}
