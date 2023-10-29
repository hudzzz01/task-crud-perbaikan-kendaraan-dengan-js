import prisma from "../prisma/client/client.js";
import CryptoJS from "crypto-js";
import { customAlphabet } from "nanoid";
const nanoid = customAlphabet('12345678',8);

class UserService{
    static async createUser(user){
        const ciperPassword = CryptoJS.HmacSHA256(user.password,"kamu kenapa sini cerita").toString();
        //console.log(ciperPassword)
        return await prisma.user.create({
            data : {
                id:nanoid(),
                nama_user:user.nama_user,
                alamat:user.alamat,
                role:user.role,
                no_rekening:user.no_rekening,
                nama_rekening:user.nama_rekening,
                email:user.email,
                password:ciperPassword
            }
        })
    }
    static async readAllUser(){
        return await prisma.user.findMany();
    }
    static async readById(id){
        const data = await prisma.user.findUnique({
            where:{
                id:id
            }
        })
        if(!data){
            throw new Error("Data tidak di temukan");
        }
        return data
    }
    
    static async readByEmail(email){
        const data = await prisma.user.findUnique({
            where:{
                email:email,
            }
        })
        if(!data){
            throw new Error("email tidak ditemukan");
        }
        return data
    }

    static async updateUser(id,user){
        return await prisma.user.update({
            where:{
                id:id
            },
            data:{
                    nama_user:user.nama_user,
                    alamat:user.alamat,
                    role:user.role,
                    no_rekening:user.no_rekening,
                    nama_rekening:user.nama_rekening,
                    email:user.email
            }
        })
    }
    static async deleteUser(id){
        return await prisma.user.delete({
            where:{
                id:id
            }
        })
    }
}

export default UserService;