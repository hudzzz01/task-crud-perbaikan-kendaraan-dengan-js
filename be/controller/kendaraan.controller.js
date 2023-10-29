import KendaraanService from "../service/kendaraan.service.js";
import ViewResponse from "../view/view.response.js";


class KendaraanController{
    static async createKendaraan(req,res){
        try {
            const newKendaraan = await KendaraanService.createKendaraan(req)
            ViewResponse.success(res,"berhasil menambahkan data Kendaraan",newKendaraan,200);
        } catch (error) {
            ViewResponse.fail(res,"gagal menambahkan Kendaraan baru",error,404);
        }
    }
    static async readAllKendaraan(req,res){
        try {
            const allKendaraan = await KendaraanService.readAllKendaraan();
            ViewResponse.success(res,"berhasil mendapatkan data seluruh Kendaraan",allKendaraan,200);
        } catch (error) {
            ViewResponse.fail(res,"gagal mendapatkan data Kendaraan",error,404);
        }
    }
    static async updateKendaraan(req,res){
        try {
            const newKendaraan = await KendaraanService.updateKendaraan(req.params.id,req)
            ViewResponse.success(res,"berhasil mengubah data Kendaraan",newKendaraan,200);
        } catch (error) {
            ViewResponse.fail(res,"gagal mengubah data Kendaraan baru",error,404);
        }
    }
    static async deleteKendaraan(req,res){
        try {
            const newKendaraan = await KendaraanService.deleteKendaraan(req.params.id);
            ViewResponse.success(res,"berhasil menghapus data Kendaraan",newKendaraan,200);
        } catch (error) {
            ViewResponse.fail(res,"gagal menghapus data Kendaraan",error,404);
        }
    }
    static async readKendaraanById(req,res){
        try {
            const Kendaraan = await KendaraanService.readById(req.params.id);
            ViewResponse.success(res,"berhasil mengambil data Kendaraan",Kendaraan,200);
        } catch (error) {
            ViewResponse.fail(res,"gagal mengambil data Kendaraan",error,404);
        }
    }
}

export default KendaraanController;