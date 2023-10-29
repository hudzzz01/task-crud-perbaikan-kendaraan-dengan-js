import prisma from "../prisma/client/client.js";
import { customAlphabet } from "nanoid";
const nanoid = customAlphabet('12345678',8);

class KendaraanService{
    static async createKendaraan(kendaraan){
        const user = await prisma.user.findUnique({
            where : {id:kendaraan.body.id_user}
        })
        const stnk = await prisma.STNK.findUnique({
            where : {id:kendaraan.body.id_stnk}
        })
        console.log(user,stnk)
        if(!user || !stnk){
            throw new Error('chuaks');
        }
        return await prisma.kendaraan.create({
            data: {
                id : nanoid(),
                user: { connect: { id: user.id } }, // Menghubungkan kendaraan dengan pengguna
                stnk: { connect: { id: stnk.id } }, // Menghubungkan kendaraan dengan STNK
                foto_kendaraan: kendaraan.file.filename
              }
        })
    }
    static async readAllKendaraan(){
        return await prisma.kendaraan.findMany();
    }
    static async readById(id){
        const data = await prisma.kendaraan.findUnique({
            where:{
                id:id
            }
        })
        if(!data){
            throw new Error("Data tidak di temukan");
        }
        return data
    }
    static async updateKendaraan(id,kendaraan){
        const user = await prisma.user.findUnique({
            where : {id:kendaraan.body.id_user}
        })
        const stnk = await prisma.STNK.findUnique({
            where : {id:kendaraan.body.id_stnk}
        })
        console.log(user,stnk)
        if(!user || !stnk){
            throw new Error('chuaks');
        }
        return await prisma.kendaraan.update({
            where:{
                id:id
            },
            data:{
                user: { connect: { id: user.id } }, // Menghubungkan kendaraan dengan pengguna
                stnk: { connect: { id: stnk.id } }, // Menghubungkan kendaraan dengan STNK
                foto_kendaraan: kendaraan.file.filename
            }
        })
    }
    static async deleteKendaraan(id){
        return await prisma.kendaraan.delete({
            where:{
                id:id
            }
        })
    }
}

export default KendaraanService;