const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const fs = require("fs");
const app = express();

const multer = require("multer");
const upload = multer({ dest: "files/" });

app.use(cors());
app.use(express.json());
const router = express.Router();
const qrSchema = new mongoose.Schema({
  fieldname: String,
  originalname: String,
  encoding: String,
  mimetype: String,
  destination: String,
  filename: String,
  path: String,
  size: Number,
  creationDate: Number,
  expirationDate: Number,
  downloadCount: Number,
});
const Qr = mongoose.model("Qr", qrSchema);

router.post("/send", upload.single("file"), async (req, res) => {
  console.log(req.file);
  const qr = await Qr.create({
    ...req.file,
    creationDate: new Date().getTime(),
    expirationDate: new Date().getTime() + 10 * 60 * 1000,
    downloadCount: 0,
  });
  new Promise(async () => {
    setTimeout(async () => {
      console.log("deleting files pogu");
      fs.rmSync(qr.path);
      await qr.delete();
    }, 10 * 60 * 1000);
  });
  return res.json({ message: "file received", qr: qr });
});

router.get("/check/:fileId", async (req, res) => {
  const fileId = req.params.fileId;
  const file = await Qr.findOne({ filename: fileId });
  if (!file) return res.json({ file: false });
  return res.json({ file });
});

router.get("/download/:fileId", async (req, res) => {
  const fileId = req.params.fileId;
  const file = await Qr.findOne({ filename: fileId });
  const absPath = path.join(__dirname, file.path);
  console.log(absPath, file.originalname);
  return res.download(absPath, file.originalname);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

app.use("/api", router);
const startServer = async () => {
  await mongoose
    .connect(
      "mongodb+srv://gabriel:gabriel@cluster0.vut72.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    )
    .then(() => console.log("connected to db"));
  app.listen(4000, () => console.log("server up and running"));
};

startServer();
