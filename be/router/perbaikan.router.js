import express from "express";
import multer from "multer";
import PerbaikanController from "../controller/perbaikan.controller.js";

const storagePerbaikan = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploadsPerbaikan/filePerbaikan');
    },
    filename: (req, file, cb) => {
        console.log(req.body)
      const format = file.originalname.split(".")
      cb(null, `SPK-${req.body.no_spk}.${format[format.length-1]}`);
    },
});

  
const uploadPerbaikan = multer({ storage: storagePerbaikan });


const routerPerbaikan = express.Router();

routerPerbaikan.get("/:id",async(req,res)=>{
    PerbaikanController.readPerbaikanById(req,res);
})
routerPerbaikan.get("/",async(req,res)=>{
    PerbaikanController.readAllPerbaikan(req,res);
})
routerPerbaikan.post("/",uploadPerbaikan.single('file_SPK'),async(req,res)=>{
    PerbaikanController.createPerbaikan(req,res);
})
routerPerbaikan.put("/:id",uploadPerbaikan.single('file_SPK'),async(req,res)=>{
    PerbaikanController.updatePerbaikan(req,res);
})
routerPerbaikan.delete("/:id",async(req,res)=>{
    PerbaikanController.deletePerbaikan(req,res)
})

export default routerPerbaikan;