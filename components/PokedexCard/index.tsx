import Image from "next/image";
import Link from "next/link";

import { TypeIcon } from "../TypeIcon";

import styles from "./index.module.css";
import { CardTypes } from "./types";

export const PokedexCard = ({ name, image, id, types }: CardTypes) => {
  return (
    <div className={`rounded-lg ${styles["card-wrapper"]}`}>
      <h1
        className={`font-primary font-bold text-blue bg-rotomBlue px-2 rounded-xl text-xlarge ${styles["card-title"]}`}
      >
        {name}
      </h1>
      <Link href={`/pokemon/${id}`} passHref={true}>
        <span className={styles["card-img"]}>
          <Image alt={name} height="200" src={image} width="200" />
        </span>
      </Link>
      {types && (
        <div className={`bg-rotomGray rounded-md pt-1 ${styles["types-container"]}`}>
          {types.map(({ type: { name } }) => {
            return (
              <span key={name} className={styles["type-wrapper"]}>
                <TypeIcon type={name} />
              </span>
            );
          })}
        </div>
      )}
      <Link href={`/pokemon/${id}`} passHref={true}>
        <p
          className={`font-secondary text-medium bg-rotomGray p-2 rounded-md text-white font-bold ${styles["card-id"]}`}
        >
          #{id}
        </p>
      </Link>
      <Link href={`/pokemon/${id}`} passHref={true}>
        <p
          className={`font-secondary text-small bg-white p-2 text-rotomRed rounded-xl ${styles["card-link"]}`}
        >
          See more
        </p>
      </Link>
    </div>
  );
};
