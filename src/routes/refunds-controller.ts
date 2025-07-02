import { Router } from "express"
import { RefundsController } from "@/controllers/refunds-controller"
import { verifyUserAuthorization } from "@/middlwares/verify-user-authorization"

const refundsRoutes = Router()
const refundsController = new RefundsController()

refundsRoutes.post(
  "/",
  verifyUserAuthorization(["employee"]), //verifica se o usuário é (employee)
  refundsController.create
)

export { refundsRoutes }
