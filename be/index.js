import app from "./app.js";
import routerKendaraan from "./router/kendaraan.router.js";
import routerSTNK from "./router/stnk.router.js";
import routerPerbaikan from "./router/perbaikan.router.js";
import routerUser from "./router/user.router.js";
import express from "express"
import routerpembayaran from "./router/pembayaran.router.js";

const port = 5000;
app.use(express.static("uploadsSTNK"));
app.use(express.static("uploadspembayaran"));
app.use(express.static("uploadsPerbaikan"));
app.use(express.static("uploadsKendaraan"));
app.use("/user",routerUser);
app.use("/stnk",routerSTNK);
app.use("/kendaraan",routerKendaraan);
app.use("/perbaikan",routerPerbaikan);
app.use("/pembayaran",routerpembayaran);


app.listen(port)
console.log(`listen in ${port}`)

