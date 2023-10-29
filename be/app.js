import express from "express"
import cors from "cors"

const app = express();
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173',
}));

app.get('/', function (req, res) {
  //res.send('Hello World');
  res.send({"key":"it's work"})
})

export default app;

