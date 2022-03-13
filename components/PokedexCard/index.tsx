import Image from "next/image";
import Link from "next/link";

import { TypeIcon } from "../TypeIcon";

import styles from "./index.module.css";
import { CardTypes } from "./types";

export const PokedexCard = ({ name, image, id, types }: CardTypes) => {
  return (
    <div className={styles["card-wrapper"]}>
      <h1 className={styles["card-title"]}>{name}</h1>
      <Image alt={name} height="200" src={image} width="200" />
      {types && (
        <div className={styles["types-wrapper"]}>
          {types.map(({ type: { name } }) => {
            return <TypeIcon key={name} type={name} />;
          })}
        </div>
      )}
      <p className={styles["card-id"]}>{id}</p>
      <Link href={`/pokemon/${id}`}>See more</Link>
    </div>
  );
};
