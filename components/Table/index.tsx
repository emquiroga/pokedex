import Link from "next/link";
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
    <table className="table-auto">
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
            <tr key={index}>
              <td className="border px-4 py-2">{item.name}</td>
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
