import fs from 'fs';
import { parse } from 'yaml';
import type { Config } from './types';
import path from 'path';

export async function getConfig(): Promise<Config> {
  const configFilePath = path.join(import.meta.env.CONFIG_DIR, 'config.yml');
  return parse(await fs.promises.readFile(configFilePath, 'utf8')) as Config;
}
