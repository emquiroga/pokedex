import Image from "next/image";

import { InfoData } from "../../services/fetchInfoData";
import { TypeIcon } from "../TypeIcon";

import styles from "./index.module.css";

export const InfoCard = ({
  name,
  id,
  front_default,
  height,
  weight,
  abilities,
  stats,
  base_experience,
  types
}: InfoData) => {
  return (
    <div className={`bg-darkRed rounded-xl ${styles["info-card-container"]}`}>
      <div className={`w-full my-0 ${styles["header-title"]}`}>
        <p
          className={`text-darkRed pr-8 pl-2 py-2 bg-white capitalize font-semibold font-primary text-xlarge rounded-br-full ${styles["title__name"]}`}
        >
          {name}
        </p>
        <p
          className={`text-darkRed pl-4 pr-2 py-2 bg-white font-semibold font-primary text-large rounded-bl-full ${styles["title__number"]}`}
        >
          #{id}
        </p>
      </div>
      <div className={styles["desktop-topsection-container"]}>
        <div className={`bg-white rounded-xl my-2 px-2 ${styles["info-card__header-wrapper"]}`}>
          <Image alt={name} height={400} src={front_default} width={400} />
          <div
            className={`font-secondary font-medium p-6 mb-2 bg-gray text-blue rounded-xl ${styles["types-container"]}`}
          >
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
              <li className="bg-white mb-2 font-bold text-small font-secondary py-2 px-2 rounded-xl">
                {" "}
                <span className={`text-black ${styles["base-info__element"]}`}>
                  Base Experience:{" "}
                </span>
                <span className="text-lightRed">{base_experience}</span>
              </li>
              <li className="bg-white mb-2 font-bold text-small font-secondary py-2 px-2 rounded-xl">
                {" "}
                <span className={`text-black ${styles["base-info__element"]}`}> Height: </span>
                <span className="text-lightRed">{height.toString()}</span>
              </li>
              <li className="bg-white mb-2 font-bold text-small font-secondary py-2 px-2 rounded-xl">
                {" "}
                <span className={`text-black ${styles["base-info__element"]}`}> Weight: </span>
                <span className="text-lightRed">{weight.toString()}</span>
              </li>
            </ul>
          </div>
          <div
            className={`bg-white mb-2 font-bold text-small font-secondary py-2 px-2 rounded-md ${styles["abilities__wrapper"]}`}
          >
            <h3 className={styles["abilities__title"]}>Abilities:</h3>
            <ul className={styles["abilities__list"]}>
              {abilities.map(({ ability: { name } }) => (
                <li
                  key={name}
                  className={`bg-darkRed font-primary font-normal text-white my-2 p-2 rounded-md ${styles["abilities__item"]}`}
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles["info-card__stats-container"]}>
        <h3
          className={`w-3/4 p-2 mx-auto my-2 text-center text-medium font-secondary uppercase font-bold bg-white text-darkRed rounded-xl`}
        >
          Statistics
        </h3>
        {stats.map(({ stat: { name }, base_stat }) => {
          return (
            <div key={name} className={styles["stat__wrapper"]}>
              <h5 className={`font-semibold text-small text-white capitalize`}>{name}:</h5>
              <div className={`bg-lightBlue ${styles["statbar__bg"]}`}>
                <div
                  className={`bg-yellow ${styles["statbar__percent"]}`}
                  style={{ width: `${base_stat}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
