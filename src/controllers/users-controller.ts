import { Request, Response } from "express"
import z from "zod"
import { UserRole } from "@prisma/client"

class UsersController {
  async create(request: Request, response: Response) {
    const bodySchema = z.object({
      name: z.string().trim().min(2, "Nome é obrigatório"),
      email: z.string().trim().email().toLowerCase(),
      password: z.string().min(6, "A senha deve conter pelo menos 6 dígitos"),
      role: z
        .enum([UserRole.employee, UserRole.manager])
        .default(UserRole.employee),
    })

    const { name, email, password, role } = bodySchema.parse(request.body)

    const user = await prisma.user

    response.json({ name, email, password, role })
  }
}

export { UsersController }
