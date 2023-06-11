import { useState } from 'preact/compat';
import type { Sequence } from '../types';

type Props = {
  sequences: Sequence[];
};

export const ReactPaginatedSequenceList = ({ sequences }: Props) => {
  const [page, setPage] = useState(0);
  const offset = 100 * page;

  return (
    <div>
      <button onClick={() => setPage(Math.max(page - 1, 0))}>Previous</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
      <ul>
        {sequences.slice(offset, offset + 100).map(d => (
          <li key={d.genbankAccession}>
            <a href={`/sequences/${d.genbankAccession}`}>{d.genbankAccession}</a>, {d.strain}, {d.date}
          </li>
        ))}
      </ul>
    </div>
  );
};
