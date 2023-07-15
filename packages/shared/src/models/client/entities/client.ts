import { z } from 'zod';
import {ZObjectBase} from "../../object";

const defaultPaymentValidator = z.string().transform((value, context) => {
    const transformedValue = Number(value);
    if (Number.isNaN(transformedValue)) {
        context.addIssue({
            code: z.ZodIssueCode.invalid_type,
            expected: 'number',
            message: 'Value must be a number.',
            received: 'string',
        })
    }

    if(transformedValue <= 0) {
        context.addIssue({
            code: z.ZodIssueCode.too_small,
            minimum: 1,
            type: 'number',
            message: 'Value must be a number.',
            received: 'string',
            inclusive: true,
        })
    }

    return transformedValue;
});

export const ZClient = ZObjectBase.extend({
    userId: z.string(),
    name: z.string().min(1).max(50),
    defaultPayment: defaultPaymentValidator,
    isActive: z.boolean()
})

export const ZClientView = ZClient.extend({
    debt: z.number()
})

export type IClient = z.infer<typeof ZClient>;
export type IClientView = z.infer<typeof ZClientView>;
