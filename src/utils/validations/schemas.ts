import { z } from "zod"
 
const formSignInSchema = z.object({
    email: z.string()
        .min(2)
        .max(50)
        .email({message: "E-mail inválido"}),

    senha: z.string()
        .min(6, { message: "Mínimo 6 caracteres" })
        .max(50, { message: "Máximo 50 caracteres" }),
})

export { 
    formSignInSchema,
}