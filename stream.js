const fs=require("fs");
const rs=fs.createReadStream(`./files/lorem.txt`,{encoding: 'utf8'});
const ws =ws.createWriStream(`./files/new-lorem.txt`);
rs.on('data',(dataChuck)=>{
    ws.write(dataChuck);

})