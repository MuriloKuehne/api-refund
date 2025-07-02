import { Request, Response } from "express"
import z from "zod"
import { Category } from "@prisma/client"

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

    response.json({ message: "ok" })
  }
}
export { RefundsController }
