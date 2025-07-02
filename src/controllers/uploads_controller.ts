import { prisma } from "@/database/prisma"
import { AppError } from "@/utils/AppError"
import { NextFunction, Request, Response } from "express"
import z from "zod"

class UploadsController {
  async create(request: Request, response: Response, next: NextFunction) {
    response.json({ file: request.file })
  }
}
export { UploadsController }
