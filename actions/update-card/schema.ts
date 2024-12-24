import { z } from "zod";

export const UpdateCard = z.object({
    boardId: z.string(),
    description: z.optional(
        z.string({
            required_error: "Требуется описание",
            invalid_type_error: "Требуется описание",
        }).min(3, {
            message: "Описание слишком короткое",
        }),
    ),
    title: z.optional( 
        z.string({
            required_error: "Требуется название",
            invalid_type_error: "Название"
        }).min(3, {
            message: "Название слишком короткое",
        })
    ),
    id: z.string(),
});