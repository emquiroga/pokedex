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
    <table className="table-auto bg-lightRed">
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
            <tr key={index} className="odd:bg-darkRed">
              <td className="border px-4 py-2 capitalize font-small font-semibold text-primary text-black">
                {item.name}
              </td>
              <td className="border px-4 py-2 capitalize font-small text-primary transition-all text-black hover:underline">
                <Link href={`/pokemon/${getPokeNumber(item.url)}`}>See more</Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
