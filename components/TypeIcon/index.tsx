import Image from "next/image";

import { iconSelector } from "../../helpers/iconSelector";

export const TypeIcon = ({ type }: { type: string }) => {
  return <Image alt={type as string} height={50} src={iconSelector(type as string)} width={50} />;
};
