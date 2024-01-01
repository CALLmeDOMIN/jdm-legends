import { type ProductType } from "../../db/schema";

export type CategoryType = Pick<ProductType, "type">['type']