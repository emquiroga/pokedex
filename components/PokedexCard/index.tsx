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
        <div className={styles["types-container"]}>
          {types.map(({ type: { name } }) => {
            return (
              <span key={name} className={styles["type-wrapper"]}>
                <TypeIcon type={name} />
              </span>
            );
          })}
        </div>
      )}
      <p className={styles["card-id"]}>#{id}</p>
      <Link href={`/pokemon/${id}`} passHref={true}>
        <p className={styles["card-link"]}>See more</p>
      </Link>
    </div>
  );
};
