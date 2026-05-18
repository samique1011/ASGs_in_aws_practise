import cluster from "cluster"
import { app } from "./index.js"
import os from "os";

const NUMBER_OF_CORES = os.cpus().length;


if(cluster.isPrimary){
    for(let i = 0; i < NUMBER_OF_CORES; i += 1){
        cluster.fork();
    }
}
else{
    app.listen(3000 , () => {
        console.log("App is listening");
    })
}