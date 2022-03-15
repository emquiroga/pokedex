import Link from "next/link";

import styles from "./index.module.css";
interface TableProps {
  titles: string[];
  data: [
    {
      name: string;
      url: string;
    },
  ];
}

const getPokeNumber = (url: string) => {
  return url.split("/")[6];
};

export const Table = ({ titles, data }: TableProps) => {
  return (
    <table className={`table-auto ${styles["table"]}`}>
      <thead>
        <tr>
          {titles.map((title, index) => (
            <th key={index} className="border px-4 py-2">
              {title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          return (
            <tr key={index} className={styles["single-row"]}>
              <td className={`border px-4 py-2 ${styles["pokemon-name"]}`}>{item.name}</td>
              <td className="border px-4 py-2">
                <Link href={`/pokemon/${getPokeNumber(item.url)}`}>See more</Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
