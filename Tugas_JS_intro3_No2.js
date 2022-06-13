const getMonth =(callback) => {
    setTimeout(()=>{
        let error = true;
        let month = ['Januari','Februari','Maret',
        'April','Mei','Juni','Juli','Agustus',
        'September','Oktober','November','Desember'];
        if(!error){
            callback(null, month)
        }else{
            callback(new Error('Sorry Data Not Found', []))
        }        
    },4000);
}

const tampilData = (error,result) =>{
    if(error){
        console.log(error);
    }else{
        const hasil = result.map((param =>'Bulan ' + param));
        console.log(hasil);
    }
}

getMonth(tampilData);




