import type { Sequence } from './types';
import { getConfig } from './config';

const getHost = () => getConfig().lapisHost;

export async function fetchNumberSequences(): Promise<number> {
  const response = await fetch(`${getHost()}/aggregated?country=Switzerland`);
  return (await response.json()).data[0].count;
}

export async function fetchSequenceList(): Promise<Sequence[]> {
  const response = await fetch(
    `${getHost()}/details?fields=genbankAccession,strain,date&country=Switzerland`
  );
  return (await response.json()).data;
}

export async function fetchSequenceDetails(genbankAccession: string) {
  const response = await fetch(`${getHost()}/details?genbankAccession=${genbankAccession}`);
  return (await response.json()).data[0];
}
