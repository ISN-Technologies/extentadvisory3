import { Feature } from "@/types/feature";
import Image from "next/image";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <Image
        src="/images/services/corporate.png"
        alt="corporate advisory"
        width="40"
        height="40"
      />
    ),
    title: "Corporate Advisory",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 1,
    icon: (
      <Image
        src="/images/services/intellectual.png"
        alt="intellectual property"
        width="40"
        height="40"
      />
    ),
    title: "Intellectual Property",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 1,
    icon: (
      <Image
        src="/images/services/tax.png"
        alt="tax compliance"
        width="40"
        height="40"
      />
    ),
    title: "Tax Compliance",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 1,
    icon: (
      <Image
        src="/images/services/ecommerce.png"
        alt="ecommerce"
        width="40"
        height="40"
      />
    ),
    title: "E-Commerce",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 1,
    icon: (
      <Image
        src="/images/services/energy.png"
        alt="energy"
        width="40"
        height="40"
      />
    ),
    title: "Energy & Mining",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  {
    id: 1,
    icon: (
      <Image
        src="/images/services/capital.png"
        alt="capital"
        width="40"
        height="40"
      />
    ),
    title: "Capital Markets & Securities",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
];
export default featuresData;
