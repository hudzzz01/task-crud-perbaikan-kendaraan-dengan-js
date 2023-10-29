import express from "express";
import multer from "multer";
import KendaraanController from "../controller/kendaraan.controller.js";


const storageKendaraan = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploadsKendaraan/fileKendaraan');
    },
    filename: (req, file, cb) => {
      const format = file.originalname.split(".")
      cb(null, `Kendaraan-${req.body.id_user}.${format[format.length-1]}`);
    },
});

  
const uploadKendaraan = multer({ storage: storageKendaraan });


const routerKendaraan = express.Router();

routerKendaraan.get("/:id",async(req,res)=>{
    KendaraanController.readKendaraanById(req,res);
})
routerKendaraan.get("/",async(req,res)=>{
    KendaraanController.readAllKendaraan(req,res);
})
routerKendaraan.post("/",uploadKendaraan.single('foto_kendaraan'),async(req,res)=>{
    KendaraanController.createKendaraan(req,res);
})
routerKendaraan.put("/:id",uploadKendaraan.single('foto_kendaraan'),async(req,res)=>{
    KendaraanController.updateKendaraan(req,res);
})
routerKendaraan.delete("/:id",async(req,res)=>{
    KendaraanController.deleteKendaraan(req,res)
})

export default routerKendaraan;