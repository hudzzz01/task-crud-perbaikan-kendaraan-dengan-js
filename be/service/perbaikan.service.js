import prisma from "../prisma/client/client.js";
import { customAlphabet } from "nanoid";
const nanoid = customAlphabet('12345678',8);

class PerbaikanService{
    static async createPerbaikan(req){
        const user = await prisma.user.findUnique({
            where : {id:req.body.id_user_pemberi_perintah}
        })
        const kendaraan = await prisma.kendaraan.findUnique({
            where : {id:req.body.id_kendaraan}
        })
        console.log(kendaraan,user)
        if(!kendaraan || !user){
            throw new Error('chuaks');
        }
        let no_spk = req.body.no_spk;
        if(!no_spk||no_spk == ''){
            no_spk = nanoid();
        }
        console.log(req.file)
        return await prisma.Perbaikan.create({
            data:{
                id:nanoid(),
                kendaraan : {connect:{id:kendaraan.id}},
                user : {connect:{id:user.id}},
                no_spk : no_spk,
                perbaikan : req.body.perbaikan,
                total : req.body.total,
                file_SPK : req.file.filename,
            }
        })
        
    }

    static async readAllPerbaikan(){
        return await prisma.Perbaikan.findMany();
    }
    static async readPerbaikanbyId(id){
        const data = await prisma.Perbaikan.findUnique({
            where:{
                id:id
            },
        });
        if(!data){
            throw new Error("Data tidak di temukan");
        }
        return data
    }
    static async updatePerbaikan(id,req){
        const user = await prisma.user.findUnique({
            where : {id:req.body.id_user_pemberi_perintah}
        })
        const kendaraan = await prisma.kendaraan.findUnique({
            where : {id:req.body.id_kendaraan}
        })
        console.log(kendaraan,user)
        if(!kendaraan || !user){
            throw new Error('chuaks');
        }
        let no_spk = req.body.no_spk;
        if(!no_spk||no_spk == ''){
            no_spk = nanoid();
        }
        console.log(req.file)
        console.log(req)
        return await prisma.Perbaikan.update({
            where:{
                id:id,
            },
            data:{
                kendaraan : {connect:{id:kendaraan.id}},
                user : {connect:{id:user.id}},
                no_spk : no_spk,
                perbaikan : req.body.perbaikan,
                total : req.body.total,
                file_SPK : req.file.fieldname,       
            }
        })
    }
    static async deletePerbaikan(id){
        return await prisma.Perbaikan.delete({
            where:{
                id:id,
            }
        });
    }
}

export default PerbaikanService;