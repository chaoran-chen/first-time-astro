import type { Sequence } from './types';

const host = 'https://lapis.cov-spectrum.org/open/v1/sample';

export async function fetchNumberSequences(): Promise<number> {
  const response = await fetch(`${host}/aggregated?country=Switzerland`);
  return (await response.json()).data[0].count;
}

export async function fetchSequenceList(): Promise<Sequence[]> {
  const response = await fetch(
    `${host}/details?fields=genbankAccession,strain,date&country=Switzerland`
  );
  return (await response.json()).data;
}

export async function fetchSequenceDetails(genbankAccession: string) {
  const response = await fetch(`${host}/details?genbankAccession=${genbankAccession}`);
  return (await response.json()).data[0];
}
