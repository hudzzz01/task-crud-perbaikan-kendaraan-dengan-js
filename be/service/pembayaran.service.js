import prisma from "../prisma/client/client.js";
import { customAlphabet } from "nanoid";
const nanoid = customAlphabet('12345678',8);

class pembayaranService{
    static async createpembayaran(req){
        const user = await prisma.user.findUnique({
            where : {id:req.body.id_user}
        })
        const perbaikan = await prisma.perbaikan.findUnique({
            where : {id:req.body.id_perbaikan}
        })
        console.log(perbaikan,user)
        if(!perbaikan || !user){
            throw new Error('chuaks');
        }
        let new_no_invoice = req.body.no_invoice;
        if(!new_no_invoice || new_no_invoice == ""){
            new_no_invoice=nanoid();
        }
        console.log(req.body)
        console.log(req.file)
        return await prisma.pembayaran.create({
            data:{
                id:nanoid(),
                no_invoice : new_no_invoice,
                perbaikan : {connect:{id:perbaikan.id}},
                user : {connect:{id:user.id}},
                tanggal_dibuat : req.body.tanggal_dibuat,
                tanggal_jatuh_tempo : req.body.tanggal_jatuh_tempo,
                nominal : req.body.nominal,
                status_pembayaran : req.body.status_pembayaran,
                file_invoice : req.file.filename,
            }
        })
        
    }

    static async readAllpembayaran(){
        return await prisma.pembayaran.findMany();
    }
    static async readpembayaranbyId(id){
        const data = await prisma.pembayaran.findUnique({
            where:{
                id:id
            },
        });
        if(!data){
            throw new Error("Data tidak di temukan");
        }
        return data
    }
    static async updatepembayaran(id,req){
        const user = await prisma.user.findUnique({
            where : {id:req.body.id_user}
        })
        const perbaikan = await prisma.perbaikan.findUnique({
            where : {id:req.body.id_perbaikan}
        })
        console.log(perbaikan,user)
        if(!perbaikan || !user){
            throw new Error('chuaks');
        }
        let no_spk = req.body.no_spk;
        if(!no_spk||no_spk == ''){
            no_spk = nanoid();
        }
        console.log(req.file)
        console.log(req)
        return await prisma.pembayaran.update({
            where:{
                id:id,
            },
            data:{
                no_invoice : req.body.no_invoice,
                perbaikan : {connect:{id:perbaikan.id}},
                user : {connect:{id:user.id}},
                tanggal_dibuat : req.body.tanggal_dibuat,
                tanggal_jatuh_tempo : req.body.tanggal_jatuh_tempo,
                nominal : req.body.nominal,
                status_pembayaran : req.body.status_pembayaran,
                file_invoice : req.file.fieldname,
            }
        })
    }
    static async deletepembayaran(id){
        return await prisma.pembayaran.delete({
            where:{
                id:id,
            }
        });
    }
}

export default pembayaranService;