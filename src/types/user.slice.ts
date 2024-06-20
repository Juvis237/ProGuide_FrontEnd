import { z } from 'zod'

export const userSchema = z
    .object({
        address: z.string().optional(),
        bio: z.string().optional(),
        city
            :
            z.string().optional(),
        city_id
            :
            z.number().optional(),
        company
            :
            z.string().optional(),
        email
            :
            z.string().email(),
        email_verified_at
            :
            z.date().optional(),
        first_name
            :
            z.string().optional(),
        id
            :
            z.number(),
        last_name
            :
            z.string().optional(),
        phone
            :
            z.string().optional(),
        profile
            :
            z.string().optional(),
        region
            :
            z.string().optional(),
        region_id
            :
            z.number().optional(),
        role
            :
            z.string().optional(),
        website
            :
            z.string().optional(),
    })
