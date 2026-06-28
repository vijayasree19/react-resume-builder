import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import CertificateCard from "./CertificateCard";

export default function Certificates() {

  const [certificates, setCertificates] = useState([
    {
      name: "AWS Certified Cloud Practitioner",
      organization: "Amazon Web Services",
      year: "2024",
    },
  ]);

  function addCertificate() {
    setCertificates([
      ...certificates,
      {
        name: "Certificate Name",
        organization: "Issuing Organization",
        year: "Year",
      },
    ]);
  }

  function removeCertificate(index) {
    setCertificates(certificates.filter((_, i) => i !== index));
  }

  function updateCertificate(index, field, value) {
    const updated = [...certificates];
    updated[index][field] = value;
    setCertificates(updated);
  }

  return (
    <section className="mt-8">

      <div className="flex justify-between items-center mb-4">

        <h2 className="text-xl font-bold tracking-wide text-gray-900">
          CERTIFICATES
        </h2>

        <button
          onClick={addCertificate}
          className="hide-download w-6 h-6 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center"
        >
          <FaPlus size={10} />
        </button>

      </div>

      {certificates.map((certificate, index) => (
        <CertificateCard
          key={index}
          certificate={certificate}
          index={index}
          updateCertificate={updateCertificate}
          removeCertificate={removeCertificate}
        />
      ))}

    </section>
  );
}