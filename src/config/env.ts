import {z} from "zod"

export const env=z.object({
    VITE_API_URL:z.string().min(1, "API URL is required"),
}).parse(import.meta.env)