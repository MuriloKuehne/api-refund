import multer from "multer"
import path from "node:path"
import crypto from "node:crypto"
import { request } from "node:http"

const TMP_FOLDER = path.resolve(__dirname, "..", "..", "tmp")

const UPLOADS_FOLDER = path.resolve(TMP_FOLDER, "uploads")

const MAX_FILE_SIZE = 1024 * 1024 * 3 //3mb

const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/jpg",
  "image/pdf",
]

const MULTER = {
  Storage: multer.diskStorage({
    destination: TMP_FOLDER,
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString("hex")
      const filename = `${fileHash}-${file.originalname}`

      return callback(null, filename)
    },
  }),
}

export {
  TMP_FOLDER,
  UPLOADS_FOLDER,
  MULTER,
  ACCEPTED_IMAGE_TYPES,
  MAX_FILE_SIZE,
}
