import { z } from "zod";
import { ClientSchema } from "../schemas/ClientSchema";

export type Client = z.infer<typeof ClientSchema>