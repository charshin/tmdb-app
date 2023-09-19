import type { ValidationResult, Schema } from 'joi';

/**
 * @param data raw data
 * @param schema to validate against
 * @returns validated & typed data
 */
export const validate = <DTO>(data: any, schema: Schema): DTO => {
  const { value, error }: ValidationResult<DTO> = schema.validate(data);

  if (error) {
    throw new Error(`Response data do not adhere to schema, ${error.message}`);
  }

  return value;
};
