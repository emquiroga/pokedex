import Link from "next/link";

interface TableProps {
  titles: string[];
  data:
    | [
        {
          name: string;
          url: string;
        }
      ]
    | [];
}

const getPokeNumber = (url: string) => {
  return url.split("/")[6];
};

export const Table = ({ titles, data }: TableProps) => {
  return (
    <table className="table-auto bg-gray">
      <thead>
        <tr>
          {titles.map((title, index) => (
            <th
              key={index}
              className="border px-4 py-2 font-primary font-bold text-medium text-black"
            >
              {title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          return (
            <tr key={index} className="odd:bg-lightBlue">
              <td className="border px-4 py-2 capitalize text-small italic text-secondary font-small font-semibold text-primary text-black">
                # {getPokeNumber(item.url)}
              </td>
              <td className="border px-12 py-2 capitalize text-small text-primary font-bold transition-all text-black hover:underline">
                <Link href={`/pokemon/${getPokeNumber(item.url)}`}>{item.name}</Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
