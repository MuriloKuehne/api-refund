import { Router } from "express"
import { RefundsController } from "@/controllers/refunds-controller"
import { verifyUserAuthorization } from "@/middlwares/verify-user-authorization"

const refundsRoutes = Router()
const refundsController = new RefundsController()

refundsRoutes.post(
  "/",
  verifyUserAuthorization(["employee", "admin"]), //verifica se o usuário é (employee)
  refundsController.create
)
refundsRoutes.get(
  "/",
  verifyUserAuthorization(["manager", "admin"]), //verifica se o usuário é (manager)
  refundsController.index
)

export { refundsRoutes }
