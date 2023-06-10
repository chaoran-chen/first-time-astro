export type Config = {
  schema: {
    instanceName: string;
    metadata: {
      name: string;
      type: string;
    }[];
    primaryKey: string;
  };
};

export type Sequence = {
  genbankAccession: string;
  strain: string;
  date: string;
};
