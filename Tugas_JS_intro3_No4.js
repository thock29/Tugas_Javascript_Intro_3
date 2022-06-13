//Tugas_JS_intro3_No4
const axios = require("axios")

const cariData = ()=>{
    return new Promise(async(resolve, reject)=> {
        try{
            const request = await axios.get(
            "https://jsonplaceholder.typicode.com/users/");
            
            if(Boolean(request?.data)==true){
                resolve(request.data);
            }else{
                reject(new Error('data not found'));
            }
        }catch(error){
            if(error?.response?.status==404){
                console.log('err2','data pada url tersebut tidak ditemukan')
            }else if(error?.response?.status==400){
                console.log('err2','bad request, url yang anda masukkan salah,silakan cek kembali')
            }else if(error?.response?.status==504){
                console.log('err2','gateway timeout, periksa koneksi ke server')
            }else{
                console.log(error);
            }
        }   
    });
}
cariData()
  .then((response)=>{
    if(response.length){
    const terimaData = response;
        for(let i=0;i<terimaData.length;i++){
        console.log(terimaData[i].name);
        }
    }else{
        console.log(response.name);
    }  
})
    .catch((error)=> console.log('err1', error))
