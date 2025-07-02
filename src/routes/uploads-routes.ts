import { Router } from "express"
import { UploadsController } from "@/controllers/uploads_controller"
import { verifyUserAuthorization } from "@/middlwares/verify-user-authorization"
import multer from "multer"
import uploadConfig from "@/configs/upload"

const uploadsRoutes = Router()
const uploadsController = new UploadsController()

const upload = multer(uploadConfig.MULTER)

uploadsRoutes.use(verifyUserAuthorization(["employee", "admin"]))
uploadsRoutes.post("/", upload.single("file"), uploadsController.create)

export { uploadsRoutes }
