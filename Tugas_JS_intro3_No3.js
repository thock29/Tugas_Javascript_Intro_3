//Tugas_JS_intro3_No3 A
const cekJamKerja = (jam) =>{
       
    return new Promise((resolve, reject)=>{
       setTimeout(()=>{
         if(jam>=9&&jam<=18){
            resolve('jam kerja')
         }else if(jam>=19&&jam<=22){
            resolve('jam lembur')
         }else if(jam=23&&jam>=0&&jam<=8){
            resolve('Bukan jam kerja')
         }else{
            reject (new Error('data tidak valid'))
        }         
    },250) 
})
}
cekJamKerja('adca')
.then((res)=> console.log(`soal A \n${res}\n================================`))
.catch((err)=> console.log(`soal A1\n${err}\n=================================`));


//Tugas_JS_intro3_No3 B
const cekHargaMotor = (motor)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        if(typeof motor !=='string') {
            return reject(new Error('data harus string'))
        }
        const semua=[
        {name:'vario',harga:"Rp.25.050.000"},
        {name:'beat',harga:"Rp.18.050.000"},
        {name:'genio',harga:"Rp.19.040.000"},
        {name:'scoopy',harga:"Rp.21.265.000"},
        {name:'pcx',harga:'Rp.31.140.000'},
        {name:'adv',harga:'Rp.35.510.000'}];  
        const cekHarga = semua.find((par) =>{
           return par.name == motor.toLowerCase()
        })
        if(motor.toLowerCase()=='semua'){
            resolve(semua)
        }
        else if(cekHarga){
            resolve(`harga motor ${cekHarga.name} = ${cekHarga.harga}`)
        }else{
            reject(new Error('data tidak valid'))
        }
    },250) 
 })
 }
 cekHargaMotor('vario')
    .then((result)=>{
        console.log(`Soal B \n${result}`);
    })
    .catch((error)=>{
        console.log(`Soal B \n${error}`);
    });
   


 

