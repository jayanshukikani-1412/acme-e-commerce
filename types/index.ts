import { z } from "zod";
import { insertProductSchema } from "@/lib/validator";

export type TProduct = z.infer<typeof insertProductSchema> & {
  id: string;
  rating: number;
  createdAt: Date;
};
