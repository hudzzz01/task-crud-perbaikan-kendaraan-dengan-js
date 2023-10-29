import PerbaikanService from "../service/perbaikan.service.js";
import ViewResponse from "../view/view.response.js";


class PerbaikanController{
    static async createPerbaikan(req,res){
        try {
            const newPerbaikan = await PerbaikanService.createPerbaikan(req)
            ViewResponse.success(res,"berhasil menambahkan data Perbaikan",newPerbaikan,200);
        } catch (error) {
            ViewResponse.fail(res,"gagal menambahkan Perbaikan baru",error,404);
        }
    }
    static async readAllPerbaikan(req,res){
        try {
            const allPerbaikan = await PerbaikanService.readAllPerbaikan();
            ViewResponse.success(res,"berhasil mendapatkan data seluruh Perbaikan",allPerbaikan,200);
        } catch (error) {
            ViewResponse.fail(res,"gagal mendapatkan data Perbaikan",error,404);
        }
    }
    static async updatePerbaikan(req,res){
        try {
            const newPerbaikan = await PerbaikanService.updatePerbaikan(req.params.id,req)
            ViewResponse.success(res,"berhasil mengubah data Perbaikan",newPerbaikan,200);
        } catch (error) {
            ViewResponse.fail(res,"gagal mengubah data Perbaikan baru",error,404);
        }
    }
    static async deletePerbaikan(req,res){
        try {
            const newPerbaikan = await PerbaikanService.deletePerbaikan(req.params.id);
            ViewResponse.success(res,"berhasil menghapus data Perbaikan",newPerbaikan,200);
        } catch (error) {
            ViewResponse.fail(res,"gagal menghapus data Perbaikan",error,404);
        }
    }
    static async readPerbaikanById(req,res){
        try {
            const Perbaikan = await PerbaikanService.readPerbaikanbyId(req.params.id);
            ViewResponse.success(res,"berhasil mengambil data Perbaikan",Perbaikan,200);
        } catch (error) {
            ViewResponse.fail(res,"gagal mengambil data Perbaikan",error,404);
        }
    }
}

export default PerbaikanController;