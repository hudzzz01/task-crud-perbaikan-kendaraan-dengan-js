import express from "express";
import multer from "multer";
import StnkController from "../controller/stnk.controller.js";

const storageSTNK = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploadsSTNK/fileSTNK');
    },
    filename: (req, file, cb) => {
      const format = file.originalname.split(".")
      cb(null, `STNK-${req.body.nopol}.${format[format.length-1]}`);
    },
});

  
const uploadSTNK = multer({ storage: storageSTNK });


const routerSTNK = express.Router();

routerSTNK.get("/:id",async(req,res)=>{
    StnkController.readSTNKById(req,res);
})
routerSTNK.get("/",async(req,res)=>{
    StnkController.readAllStnk(req,res);
})
routerSTNK.post("/",uploadSTNK.single('foto_STNK'),async(req,res)=>{
    StnkController.createStnk(req,res);
})
routerSTNK.put("/:id",uploadSTNK.single('foto_STNK'),async(req,res)=>{
    StnkController.updateStnk(req,res);
})
routerSTNK.delete("/:id",async(req,res)=>{
    StnkController.deleteStnk(req,res)
})

export default routerSTNK;