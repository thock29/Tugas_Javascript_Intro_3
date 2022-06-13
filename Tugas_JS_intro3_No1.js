const date = new Date();
const myDays = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
let thisDay = date.getDay();
thisDay = myDays[thisDay];
    //console.log(thisDay);

const cekHariKerja = (day) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        try{ 
            if(typeof day !== "string"){
                throw new Error('data harus string');
            }else{
                const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']   
                let cek = dataDay.find((item)=>{
                return item === day.toLowerCase()
                });  
                if (cek){ //variable cek bernilai true
                resolve (cek);
                }else{
                reject(new Error('Hari ini bukan hari kerja'))
                }
            }
        }catch(error){
            console.log('err',error);
        }           
    },3000) 
})
}
const hasil = cekHariKerja(thisDay)     
hasil
    .then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        console.log('err1',error);
    });



