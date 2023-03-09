// its will generate enum from models.

function enumGenerator(fileList){

fileList.forEach((file)=>{
    var fileCon=fs.readFileSync(file.fileName,"utf8");
    //convert into line
})

}
module.exports =enumGenerator;