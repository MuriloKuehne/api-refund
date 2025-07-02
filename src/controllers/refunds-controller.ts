import { Request, Response } from "express"
import z from "zod"
import { Category } from "@prisma/client"
import { prisma } from "@/database/prisma"
import { AppError } from "@/utils/AppError"

class RefundsController {
  async create(request: Request, response: Response) {
    const bodySchema = z.object({
      name: z.string().trim().min(1, "Please inform the request's name"),
      category: z.enum([
        Category.accomodation,
        Category.food,
        Category.others,
        Category.services,
        Category.transport,
      ]),
      amount: z.number().positive("The amount needs to be greater than 0"),
      filename: z.string().min(20),
    })

    const { amount, category, filename, name } = bodySchema.parse(request.body)

    if (!request.user?.id) {
      throw new AppError("Unauthorized", 401)
    }

    const refund = await prisma.refunds.create({
      data: { name, category, amount, filename, userId: request.user.id },
    })

    response.status(201).json(refund)
  }
}
export { RefundsController }
