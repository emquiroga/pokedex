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
                <p>{name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles["info-card__body-container"]}>
        <div className={styles["base-info__wrapper"]}>
          <ul>
            <li>Base Experience: {base_experience}</li>
            <li>Height: {height}</li>
            <li>Weight: {weight}</li>
          </ul>
        </div>
        <div className={styles["abilities__wrapper"]}>
          <h3 className={styles["abilities__title"]}>Abilities</h3>
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
        <h3>Stats</h3>
        {stats.map(({ stat: { name }, base_stat }) => {
          return (
            <div key={name} className={styles["stat__wrapper"]}>
              <h5>{name}</h5>
              <div className={styles["statbar-bg"]}>
                <div className={styles["statbar-percent"]} style={{ width: `${base_stat}%` }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
