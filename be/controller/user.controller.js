import Token from "../auth/jwt.js";
import UserService from "../service/user.service.js";
import ViewResponse from "../view/view.response.js";
import CryptoJS from "crypto-js";

class UserController{
    static async login(req,res){
        try {
            const user = await UserService.readByEmail(req.body.email);
            const ciperPassword = CryptoJS.HmacSHA256(req.body.password,"kamu kenapa sini cerita").toString();
            
            if(user.password != ciperPassword){
                throw Error("password salah");
            }

            const token = await Token.createToken({
                id : user.id,
                nama_user : user.nama_user,
                role : user.role
            });
            ViewResponse.success(res,"berhasil login",token,200);
        } catch (error) {
            ViewResponse.fail(res,"gagal login",error,404);
        }
    }
    static async createUser(req,res){
        try {
            const user = req.body;
            const createUser = await UserService.createUser(user);
            ViewResponse.success(res,"berhasil membuat user baru",createUser,200)
        } catch (error) {
            ViewResponse.fail(res,"gagal membuat user baru",error,404);
        }
        
    }
    static async readAllUser(req,res){
        try {
            const users = await UserService.readAllUser();
            ViewResponse.success(res,"berhasil mengambil data user",users,200);
        } catch (error) {
            ViewResponse.fail(res,"Gagal mengambil data user",error,404);
        }
    }

    static async readUserById(req,res){
        try {
            const user = await UserService.readById(req.params.id);
            ViewResponse.success(res,"berhasil mengambil data user",user,200);
        } catch (error) {
            ViewResponse.fail(res,"Gagal mengambil data user",error,404);
        }
    }

    static async updateUser(req,res){
        try {
            const newUser = await UserService.updateUser(req.params.id,req.body);
            ViewResponse.success(res,"berhasil mengubah data user",newUser,200);
        } catch (error) {
            ViewResponse.fail(res,"Gagal mengubah data user",error,404);
        }
    }
    static async deleteUser(req,res){
        try {
            const deleteUser = await UserService.deleteUser(req.params);
            ViewResponse.success(res,"berhasil menghapus data user",deleteUser,200);
        } catch (error) {
            ViewResponse.fail(res,"gagal memnghapus data user", error,404);
        }
    }
}

export default UserController;