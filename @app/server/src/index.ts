import express, {Express} from "express";

const app: Express = express();
const port = process.env.PORT || 8008;
app.listen(port, ()=>{
  console.log(`🎧 server listening on port ${port}`)
});
