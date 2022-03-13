import Image from "next/image";

import { InfoData } from "../../services/fetchInfoData";
import { TypeIcon } from "../TypeIcon";

import styles from "./index.module.css";

export const InfoCard = ({
  name,
  front_default,
  height,
  weight,
  abilities,
  stats,
  base_experience,
  types,
}: InfoData) => {
  return (
    <div className={styles["info-card-container"]}>
      <div className={styles["info-card__header-wrapper"]}>
        <h3 className={styles["header__title"]}>{name}</h3>
        <Image alt="Mockeaditto" height={400} src={front_default} width={400} />
        <div className={styles["types-container"]}>
          {types.map(({ type: { name } }) => {
            return (
              <div key={name} className={styles["type__wrapper"]}>
                <TypeIcon type={name} />
                <p className={styles["type__name"]}>{name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles["info-card__body-container"]}>
        <div className={styles["base-info__wrapper"]}>
          <ul>
            <li>
              {" "}
              <span className={styles["base-info__element"]}> Base Experience: </span>
              {base_experience}
            </li>
            <li>
              {" "}
              <span className={styles["base-info__element"]}> Height: </span>
              {height}
            </li>
            <li>
              {" "}
              <span className={styles["base-info__element"]}> Weight: </span>
              {weight}
            </li>
          </ul>
        </div>
        <div className={styles["abilities__wrapper"]}>
          <h3 className={styles["abilities__title"]}>Abilities:</h3>
          <ul className={styles["abilities__list"]}>
            {abilities.map(({ ability: { name } }) => (
              <li key={name} className={styles["abilities__item"]}>
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles["info-card__stats-container"]}>
        <h3 className={styles["stats__title"]}>Stats:</h3>
        {stats.map(({ stat: { name }, base_stat }) => {
          return (
            <div key={name} className={styles["stat__wrapper"]}>
              <h5 className={styles["stat__name"]}>{name}:</h5>
              <div className={styles["statbar__bg"]}>
                <div className={styles["statbar__percent"]} style={{ width: `${base_stat}%` }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
