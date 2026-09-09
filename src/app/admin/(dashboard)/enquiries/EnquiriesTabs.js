"use client";

import { useState } from "react";
import DeleteButton from "../../DeleteButton";
import { deleteContactEnquiry, deleteCareerEnquiry } from "./actions";
import style from "../../admin.module.css";

function formatDate(date) {
  return new Date(date).toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export default function EnquiriesTabs({ contactEnquiries, careerEnquiries, initialTab = "contact" }) {
  const [activeTab, setActiveTab] = useState(initialTab);

  return (
    <div className={style.card}>
      <div className={style.tabs} role="tablist" aria-label="Enquiry type">
        <button
          type="button"
          role="tab"
          id="tab-contact"
          aria-selected={activeTab === "contact"}
          aria-controls="tabpanel-contact"
          className={`${style.tabBtn} ${activeTab === "contact" ? style.tabBtnActive : ""}`}
          onClick={() => setActiveTab("contact")}
        >
          Contact Enquiries ({contactEnquiries.length})
        </button>
        <button
          type="button"
          role="tab"
          id="tab-career"
          aria-selected={activeTab === "career"}
          aria-controls="tabpanel-career"
          className={`${style.tabBtn} ${activeTab === "career" ? style.tabBtnActive : ""}`}
          onClick={() => setActiveTab("career")}
        >
          Career Enquiries ({careerEnquiries.length})
        </button>
      </div>

      <div
        className={style.tabPanel}
        role="tabpanel"
        id="tabpanel-contact"
        aria-labelledby="tab-contact"
        hidden={activeTab !== "contact"}
      >
        {contactEnquiries.length === 0 ? (
          <p className={style.empty}>No contact enquiries yet.</p>
        ) : (
          <table className={style.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Message</th>
                <th>Submitted</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {contactEnquiries.map((enquiry) => (
                <tr key={enquiry.id}>
                  <td>{enquiry.firstName} {enquiry.lastName}</td>
                  <td>{enquiry.email}</td>
                  <td>{enquiry.mobileNumber}</td>
                  <td>
                    {enquiry.message ? (
                      <>
                        {enquiry.message.slice(0, 60)}
                        {enquiry.message.length > 60 ? "…" : ""}
                      </>
                    ) : (
                      "—"
                    )}
                  </td>
                  <td>{formatDate(enquiry.createdAt)}</td>
                  <td>
                    <DeleteButton action={deleteContactEnquiry.bind(null, enquiry.id)} confirmText="Delete this enquiry?">
                      Delete
                    </DeleteButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div
        className={style.tabPanel}
        role="tabpanel"
        id="tabpanel-career"
        aria-labelledby="tab-career"
        hidden={activeTab !== "career"}
      >
        {careerEnquiries.length === 0 ? (
          <p className={style.empty}>No career enquiries yet.</p>
        ) : (
          <table className={style.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Designation</th>
                <th>Experience</th>
                <th>Resume</th>
                <th>Submitted</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {careerEnquiries.map((enquiry) => (
                <tr key={enquiry.id}>
                  <td>{enquiry.firstName} {enquiry.lastName}</td>
                  <td>{enquiry.email}</td>
                  <td>{enquiry.mobileNumber}</td>
                  <td>{enquiry.currentDesignation || "—"}</td>
                  <td>{enquiry.relevantExperience || "—"}</td>
                  <td>
                    {enquiry.resume ? (
                      <a href={enquiry.resume} target="_blank" rel="noopener noreferrer">
                        View resume
                      </a>
                    ) : (
                      "—"
                    )}
                  </td>
                  <td>{formatDate(enquiry.createdAt)}</td>
                  <td>
                    <DeleteButton action={deleteCareerEnquiry.bind(null, enquiry.id)} confirmText="Delete this enquiry?">
                      Delete
                    </DeleteButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
