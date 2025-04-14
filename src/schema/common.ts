import { EnumLike, Primitive, z } from 'zod';

const validation = {
  // String
  str: () => z.string().nonempty('Required'),
  strOpt: () => z.string().optional(),

  // Number
  num: () =>
    z
      .union([z.number(), z.string().regex(/^\d+$/)])
      .transform((val) => (typeof val === 'string' ? parseFloat(val) : val))
      .refine((val) => !isNaN(val), { message: 'Invalid number' }),
  numOpt: () =>
    z
      .union([z.number(), z.string().regex(/^\d+$/)])
      .optional()
      .transform((val) => (typeof val === 'string' ? parseFloat(val) : val))
      .refine((val) => val === undefined || !isNaN(val), {
        message: 'Invalid number',
      }),

  // Object
  obj: () =>
    z
      .object({ id: z.number(), name: z.string() })
      .nullable()
      .refine((value) => value !== null, {
        message: 'Required',
      }),

  // Boolean
  bool: () => z.boolean(),

  // File
  file: () => z.nullable(z.any()),

  // Enum
  enum: (e: EnumLike) => z.nativeEnum(e),
  literal: (value: Primitive) => z.literal(value),
};

export { validation as v };
