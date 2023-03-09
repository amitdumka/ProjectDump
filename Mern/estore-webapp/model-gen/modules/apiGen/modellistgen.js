//this will a json file with the list of file having model class in provied base folder and it sub folders
//requiring path and fs modules
const path = require("path");
const fs = require("fs");
const fsPromises = require("fs/promises");
var readline = require("readline-sync");
const camelCase = require("../toCamelCase.js");
//Just for testing
var testPath = "/Users/amitkumar/Projects/eStore-MAUI/eStore.Shared";
var testOut = "/Users/amitkumar/Projects/MODELS";

//golal variable
var modeType = "cs";
var fileMap = [];
//Folder list and File list.
var folderList = [];
var fileList = [];

//Functions
//Check it file or folder
const isFile = (fileName) => {
  return fs.lstatSync(fileName).isFile();
};
// // Create Model entry
// const modelName = (fileName) => {
//   if (isFile(fileName)) {
//     return {
//       fn: fileName,
//       name: path.basename(fileName),
//       classModel: true,
//     };
//   } else {
//     return {
//       folder: path.join(directoryPath, fileName),
//       classModel: false,
//       folderName: fileName,
//       status: "",
//       files: [],
//     };
//   }
// };
// Map sub directoryPath
const mapFolder = (folder) => {
  var curfolder = fs.readdirSync(folder);

  return curfolder.forEach((fn) => {
    if (isFile(path.join(folder, fn)) == false) {
      folderList.push(path.join(folder, fn));
      mapFolder(path.join(folder, fn));
    } else if (path.extname(fn) == "." + modeType) {
      // else if it is desired file.
      fileList.push({
        file: fn,
        name: path.basename(fn, "." + modeType),
        folder: folder,
        classModel: true,
      });
    }
  });
};

//Generate model list from path provied.
function generateModelList(mode, inFolder, outFolder) {
  var inputPath = "";
  var outputPath = "";
  if (mode == null || mode == "")
    modeType = readline.question("Enter process mode (json/class:cs) :");
  else modeType = mode;
  if (inFolder == null || inFolder == "")
    var inputPath = readline.question("Enter Input Folder(Full path): ");
  else inputPath = inFolder;
  if (outFolder == null || outFolder == "")
    var outputPath = readline.question("Enter output path(Full Path):");
  else outputPath = outFolder;
  console.log("Generating Model File list from " + inFolder);

  
  //Making directories if not exists.
  fs.mkdirSync(outputPath, { recursive: true });
  //Read Root folder
  
  mapFolder(inputPath);
  fs.mkdirSync(outputPath, { recursive: true });
  var jsondata = {
    fileList: fileList,
    folderList: folderList,
  };

  var outputFIle = path.join(outputPath, "modelPathList.json");
  fs.writeFileSync(outputFIle, JSON.stringify(jsondata));
  fs.writeFileSync(path.join(outputPath, "folderList.json"),JSON.stringify(folderList));
  fs.writeFileSync(path.join(outputPath, "classesList.json"),JSON.stringify(fileList));
  console.log("All classes/json files are mapped in foldererlist and classesList, which is saved at root for ref"); 
  return jsondata;
}

module.exports = generateModelList;
