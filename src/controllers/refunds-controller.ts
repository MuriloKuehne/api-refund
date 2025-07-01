import { Request, Response } from "express"
import z from "zod"
import { Category } from "@prisma/client"

class RefundsController {
  async create(request: Request, response: Response) {
    const bodySchema = z.object({
      name: z.string(),
      amount: z.number(),
      category: z.enum([
        Category.accomodation,
        Category.food,
        Category.others,
        Category.services,
        Category.transport,
      ]),
      filename: z.string(),
    })

    response.json({ message: "ok" })
  }
}
export { RefundsController }
