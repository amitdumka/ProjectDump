var readline = require("readline-sync");
var generateModelList = require("./modellistgen.js");
var classToModel = require("./modelgen.js");
var routerGen = require("./routersgen.js");

//requiring path and fs modules
const path = require("path");
const fs = require("fs");
const fsPromises = require("fs/promises");
const camelCase=require("../toCamelCase.js");

// Test Parameters
var mode = "cs";
var basePathFolder = "/Users/amitkumar/Projects/eStore-MAUI/eStore.Shared";
var baseOutputFolder = "/Users/amitkumar/Projects/MODELGEN/eStoreNODEJS";
var modelfolder = "/Users/amitkumar/Projects/MODELGEN/eStoreNODEJS/models";

fs.mkdirSync(baseOutputFolder, { recursive: true });
fs.mkdirSync(baseOutputFolder+"/routers", { recursive: true });
fs.mkdirSync(baseOutputFolder+"/controllers", { recursive: true });
fs.mkdirSync(modelfolder, { recursive: true });

console.log("Class to API with mongoose model ");

var modelFileList = generateModelList(mode, basePathFolder, baseOutputFolder);
var ModelList = [];
if (modelfolder == "")
  modelfolder = readline.question("Enter Model Output folder:");

modelFileList.fileList.forEach((key) => {
  if (key.classModel == true) {
    var fileName = path.join(key.folder, key.file);

    var models = classToModel(fileName, modelfolder);
    
    if (models[0].error != null) {
      key.status = models[0].error;
      key.classModel = false;
    } else {
      for (let index = 1; index < models.length; index++) {
        ModelList.push(models[index]);
        console.log(models[index]);
      }
    }
  }
});
var jsondata = {
  models: ModelList,
  fileList: modelFileList.fileList,
  folderList: modelFileList.folderList,
  basePathFolder: basePathFolder,
  baseOutputFolder: baseOutputFolder,
  modelfolder: modelfolder,
  modelListFile: "modelList.json",
  modelList:"models.json"
};
fs.writeFileSync(
  path.join(baseOutputFolder, "models.json"),
  JSON.stringify(modelList)
);
fs.writeFileSync(
  path.join(baseOutputFolder, "modelList.json"),
  JSON.stringify(jsondata)
);

console.log(
  "Model generation is successful. But there will be some  manaul work for inherted class."
);
console.log(
  "ApI generation is pending, You can use the base generate file to process further"
);
console.log(path.join(baseOutputFolder, "modelList.json"));

//Generating Routers and Controllers

routerGen(jsondata);
