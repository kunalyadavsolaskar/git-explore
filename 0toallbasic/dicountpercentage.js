// const web=["youtube","facebook","amazon","netflix"]
// for(const n of web){
//     console.log(n);
// }
const symbols={
    yt:"youtube",
    fb:"facebook",
    a:"amazon",
    n:"netflix"
}
for(const n in symbols){
    console.log(`keys ${n} value is:${symbols[n]}`);
}