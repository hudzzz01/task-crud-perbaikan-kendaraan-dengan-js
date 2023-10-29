import StnkService from "../service/stnk.service.js";
import ViewResponse from "../view/view.response.js";


class StnkController{
    static async createStnk(req,res){
        try {
            const newSTNK = await StnkService.createSTNK(req)
            ViewResponse.success(res,"berhasil menambahkan data STNK",newSTNK,200);
        } catch (error) {
            ViewResponse.fail(res,"gagal menambahkan STNK baru",error,404);
        }
    }
    static async readAllStnk(req,res){
        try {
            const allSTNK = await StnkService.readAllSTNK();
            ViewResponse.success(res,"berhasil mendapatkan data seluruh STNK",allSTNK,200);
        } catch (error) {
            ViewResponse.fail(res,"gagal mendapatkan data STNK",error,404);
        }
    }
    static async updateStnk(req,res){
        try {
            const newSTNK = await StnkService.updateSTNK(req.params.id,req)
            ViewResponse.success(res,"berhasil mengubah data STNK",newSTNK,200);
        } catch (error) {
            ViewResponse.fail(res,"gagal mengubah data STNK baru",error,404);
        }
    }
    static async deleteStnk(req,res){
        try {
            const newSTNK = await StnkService.deleteSTNK(req.params.id);
            ViewResponse.success(res,"berhasil menghapus data STNK",newSTNK,200);
        } catch (error) {
            ViewResponse.fail(res,"gagal menghapus data STNK",error,404);
        }
    }
    static async readSTNKById(req,res){
        try {
            const STNK = await StnkService.readSTNKbyId(req.params.id);
            ViewResponse.success(res,"berhasil mengambil data STNK",STNK,200);
        } catch (error) {
            ViewResponse.fail(res,"gagal mengambil data STNK",error,404);
        }
    }
}

export default StnkController;