/* eslint-disable no-console */
import { convertFromDirectory } from 'joi-to-typescript';

(async () => {
  console.log('Converting joi schemas into types...');

  const result = await convertFromDirectory({
    schemaDirectory: './src/core/types/schemas',
    typeOutputDirectory: './src/core/types/dtos',
    debug: true,
    sortPropertiesByName: false,
    ignoreFiles: ['index.ts'],
  });

  console.log(result ? 'Success!' : 'Failed');

  return result;
})();
