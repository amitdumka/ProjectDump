//generate router from class model
const path = require("path");
const fs = require("fs");
const fsPromises = require("fs/promises");
var readline = require("readline-sync");
const { exit } = require("process");
const camelCase=require("../toCamelCase.js");
const appJSLine='var MODEL_NAME=require("./routers/MODEL_NAME.js")\napp.use("/MODEL_NAME", MODEL_NAME); ';
var appJS="";

function generateRouter(modelListData) {
  console.log(
    "Now it will generate router from modelListFile\n Impt. Note: It will autogenerate but still required to fine tune it"
  );
  console.log(
    "Kindly check the generate code and do futhert testing and changes. "
  );

  //   var modelListRaw = fs.readFileSync(modelListFile);
  //   var modelListData = JSON.parse(modelListRaw);

  var modelList = modelListData.models;
  const routerTemp = fs.readFileSync("./routerTemp.js", "utf-8");
  const controllerTemp = fs.readFileSync("./controllerTemp.js", "utf-8");

  fs.mkdirSync(path.join(modelListData.baseOutputFolder , "controllers"), {
    recursive: true,
  });
  fs.mkdirSync(path.join(modelListData.baseOutputFolder , "routers"), {
    recursive: true,
  });
console.log("Start API CREATION>>>>>>>>>>");
  modelList.forEach((model) => {
    if (model.classModel == true) {
      if (model.model.startsWith("Base") == false && model.model.endsWith("MV")==false) {
        if (model.model.match("-extd-")) {
          var CB = model.model.split("-extd-");
          model.model = CB[0];
          model.baseClass = CB[1];
        }
       // console.log("OK="+model.model);
        var mPath = model.baseFolder.replace(modelListData.modelfolder, "");
        var routerD = routerTemp.replace(/MODEL_PATH/g, "../models" + mPath);
        routerD = routerD.replace(/MODEL_NAME/g, model.model);
        var sPath = path.join(
          modelListData.baseOutputFolder,
          "routers/" + model.model + ".js"
        );
        model.router = sPath;
        fs.writeFileSync(sPath, routerD);
        var controllerD = controllerTemp.replace(/_MODEL_NAME/g, model.model);
        controllerD = controllerD.replace(
          /MODEL_ABSOLUTE_PATH/g,
          "../models/" + mPath
        );
        sPath = path.join(
          modelListData.baseOutputFolder,
          "controllers/" + model.model + "-controller.js"
        );
        model.controller = sPath;
        fs.writeFileSync(sPath, controllerD);
        model.status = "Model,router,controller";

        // Adding to App.js line
        //appJSLine='\nvar MODEL_NAME=require("./routers/MODEL_NAME.js")\napp.use("/MODEL_NAME", MODEL_NAME); ';
         appJS=appJS+appJSLine.replace(/MODEL_NAME/g,model.model);

      }else {
          model.classModel=false;
          console.log(model);
      }
    }
  });

  var jsondata = {
    models: modelList,
    fileList: modelListData.fileList,
    folderList: modelListData.folderList,
    basePathFolder: modelListData.basePathFolder,
    baseOutputFolder: modelListData.baseOutputFolder,
    modelfolder: modelListData.modelfolder,
    modelListFile: "modelList.json",
    app_js:"app.js"
  };
  console.log(jsondata.baseOutputFolder);
  fs.writeFileSync(path.join(jsondata.baseOutputFolder, "app.js"),appJS);
  fs.writeFileSync(
    path.join(jsondata.basePathFolder, jsondata.modelListFile),
    JSON.stringify(jsondata)
  );
  console.log(
    "Router and controllers with data model is genrated. Pending is generating enums"
  );
}
module.exports = generateRouter;
