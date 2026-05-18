import express from "express";
import type { Request , Response } from "express";
import os from "os"
export const app = express();


app.get("/" , (req : Request , res : Response) => {
    res.send("hello world");
})

app.get("/compute" , (req : Request , res : Response) => {
    const startTime = Date.now();
    let ans : number = 0;
    for(let i = 0; i < 100000000; i += 1){
        ans += Math.random();
    }
    const endTime = Date.now();

    res.json({
        computed : ans , 
        timeTaken : endTime - startTime
    })
})

app.get("/os" , (req : Request , res : Response) => {
    res.json({
        osVersion : os.hostname()
    })
})

