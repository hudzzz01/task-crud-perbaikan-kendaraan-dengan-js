import pembayaranService from "../service/pembayaran.service.js";
import ViewResponse from "../view/view.response.js";


class pembayaranController{
    static async createpembayaran(req,res){
        try {
            const newpembayaran = await pembayaranService.createpembayaran(req)
            ViewResponse.success(res,"berhasil menambahkan data pembayaran",newpembayaran,200);
        } catch (error) {
            console.log(error)
            ViewResponse.fail(res,"gagal menambahkan pembayaran baru",error,404);
        }
    }
    static async readAllpembayaran(req,res){
        try {
            console.log(req)
            const allpembayaran = await pembayaranService.readAllpembayaran();
            ViewResponse.success(res,"berhasil mendapatkan data seluruh pembayaran",allpembayaran,200);
        } catch (error) {
            ViewResponse.fail(res,"gagal mendapatkan data pembayaran",error,404);
        }
    }
    static async updatepembayaran(req,res){
        try {
            const newpembayaran = await pembayaranService.updatepembayaran(req.params.id,req)
            ViewResponse.success(res,"berhasil mengubah data pembayaran",newpembayaran,200);
        } catch (error) {
            ViewResponse.fail(res,"gagal mengubah data pembayaran baru",error,404);
        }
    }
    static async deletepembayaran(req,res){
        try {
            const newpembayaran = await pembayaranService.deletepembayaran(req.params.id);
            ViewResponse.success(res,"berhasil menghapus data pembayaran",newpembayaran,200);
        } catch (error) {
            ViewResponse.fail(res,"gagal menghapus data pembayaran",error,404);
        }
    }
    static async readpembayaranById(req,res){
        try {
            const pembayaran = await pembayaranService.readpembayaranbyId(req.params.id);
            ViewResponse.success(res,"berhasil mengambil data pembayaran",pembayaran,200);
        } catch (error) {
            ViewResponse.fail(res,"gagal mengambil data pembayaran",error,404);
        }
    }
}

export default pembayaranController;