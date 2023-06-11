import { useEffect, useState } from 'preact/compat';
import type { Sequence } from '../types';
import { fetchSequenceList } from '../api';

export const PreactSelfFetchingPaginatedSequenceList = () => {
  const [page, setPage] = useState(0);
  const [sequences, setSequences] = useState<Sequence[] | undefined>();
  const offset = 100 * page;

  useEffect(() => {
    fetchSequenceList().then(d => setSequences(d));
  }, []);

  if (!sequences) {
    return <>Loading..</>;
  }

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
