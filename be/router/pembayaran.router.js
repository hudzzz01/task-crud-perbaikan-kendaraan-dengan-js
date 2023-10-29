import express from "express";
import multer from "multer";
import pembayaranController from "../controller/pembayaran.controller.js";
import auth from "../auth/auth.js";

const storagepembayaran = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploadspembayaran/filepembayaran');
    },
    filename: (req, file, cb) => {
        console.log(req.body)
      const format = file.originalname.split(".")
      cb(null, `IN-${req.body.no_invoice}.${format[format.length-1]}`);
    },
});

  
const uploadpembayaran = multer({ storage: storagepembayaran });


const routerpembayaran = express.Router();


routerpembayaran.get("/:id",async(req,res)=>{
    pembayaranController.readpembayaranById(req,res);
})
routerpembayaran.get("/",auth,async(req,res)=>{
    pembayaranController.readAllpembayaran(req,res);
})
routerpembayaran.post("/",uploadpembayaran.single('file_invoice'),async(req,res)=>{
    pembayaranController.createpembayaran(req,res);
})
routerpembayaran.put("/:id",uploadpembayaran.single('file_invoice'),async(req,res)=>{
    pembayaranController.updatepembayaran(req,res);
})
routerpembayaran.delete("/:id",async(req,res)=>{
    pembayaranController.deletepembayaran(req,res)
})

export default routerpembayaran;