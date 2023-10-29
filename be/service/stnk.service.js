import prisma from "../prisma/client/client.js";
import { customAlphabet } from "nanoid";
const nanoid = customAlphabet('12345678',8);

class StnkService{
    static async createSTNK(req){
        return await prisma.STNK.create({
            data:{
                id:nanoid(),
                no_stnk : req.body.no_stnk,
                nopol : req.body.nopol,
                masa_STNK : req.body.masa_STNK,
                nomor_mesin : req.body.nomor_mesin,
                nomor_rangka : req.body.nomor_rangka,
                status : req.body.status,
                foto_stnk : req.file.filename
            }
        })
        
    }

    static async readAllSTNK(){
        return await prisma.STNK.findMany();
    }
    static async readSTNKbyId(id){
        const data = await prisma.STNK.findUnique({
            where:{
                id:id
            }
        });
        if(!data){
            throw new Error("Data tidak di temukan");
        }
        return data
    }
    static async updateSTNK(id,req){
        console.log(req)
        return await prisma.STNK.update({
            where:{
                id:id,
            },
            data:{
                no_stnk : req.body.no_stnk,
                nopol : req.body.nopol,
                masa_STNK : req.body.masa_STNK,
                nomor_mesin : req.body.nomor_mesin,
                nomor_rangka : req.body.nomor_rangka,
                status : req.body.status,
                foto_stnk : req.file.filename
            }
        })
    }
    static async deleteSTNK(id){
        return await prisma.STNK.delete({
            where:{
                id:id,
            }
        });
    }
}

export default StnkService;