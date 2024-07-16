import { z } from 'zod';

const   variantValidationSchema = z.object ({
    type: z.string(),
    value: z.string(),
});

const inventoryValidationSchema = z.object({
    
    quantity: z.number(),
    inStock: z.boolean()
});

export const createProductValidationSchema = z.object({ 
  
    name: z.string(),
    description: z.string(),
    price: z.number(),
    category: z.string(),
    tags: z.string(),
    variants: variantValidationSchema,
    inventory: inventoryValidationSchema,      
    
});

export const productValidation = { 
         createProductValidationSchema,
};

