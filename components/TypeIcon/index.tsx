import Image from "next/image";

import { iconSelector } from "../../helpers/iconSelector";

interface TypeIconProps {
  type: string;
  width?: number;
  height?: number;
}

export const TypeIcon = ({ type, width = 50, height = 50 }: TypeIconProps) => {
  if (type)
    return (
      <Image
        alt={type as string}
        height={height}
        src={iconSelector(type as string)}
        width={width}
      />
    );

  return null;
};
