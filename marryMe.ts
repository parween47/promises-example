console.log("I love her! she promised to marry me.") 
new Promise((res,rej)=>{
    const ifSheMarryMe=false;
    if (ifSheMarryMe){
         setTimeout(()=>{
            res ("I will become her husband")
        },3000)
    } else {
        setTimeout(()=>{
            rej ("I wil become devdas wo bhi abdullah pur ka.");
        },3000)
    }
}).then((val)=>{
    console.log(val);
}).catch((val)=>{
    console.log(val)
    console.log("today is her marriage anniversary:(");
})
