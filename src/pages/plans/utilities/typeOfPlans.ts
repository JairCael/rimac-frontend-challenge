import { ForMeIcon, ForOthersIcon } from "../../../assets";
import type { TypePlan } from "../../../types";

export const typesOfPlan: TypePlan[] = [
  {
    id: 1,
    for: "Para mí",
    description:
      "Cotiza tu seguro de salud y agrega familiares si así lo deseas.",
    img: ForMeIcon,
  },
  {
    id: 2,
    for: "Para alguien más",
    description:
      "Realiza una cotización para uno de tus familiares o cualquier persona.",
    img: ForOthersIcon,
  },
];
