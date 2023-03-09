//it generate model file from class file.
const path = require("path");
const fs = require("fs");
const fsPromises = require("fs/promises");
var readline = require("readline-sync");
var camelCase = require("../toCamelCase.js");
//golal variable;
var namespace = ""; //Store namespace last details
var classList = [];
var outputPath = "";

//Constants
var inc =
  'const mongoose = require("mongoose");\nconst Schema = mongoose.Schema;\n';
const ext = ".js"; // type of file will be created.
//Functions
//Reset golabal variable
function Reset() {
  namespace = "";
  classList = [];
  outputPath = "";
}

// create variable names
const varName = (name) => {
  var x = name.toLowerCase();
  switch (x) {
    case "string":
      return "String";
    case "int":
    case "double":
    case "decimal":
    case "float":
      return "Number";
    case "bool":
      return "Boolean";
    case "datetime?":
    case "datetime":
      return "DateTime";
    default:
      return "String,enum: Object.values(" + name + ")";
  }
};

const toJsonObject = (lines) => {
  var json = [];
  var keyFlag = false;

  //Reading Line Wise.
  lines.forEach((line) => {
    if (line.trim().length <= 0) {
      //removing empty  lines.
    } else if (line.trimStart().startsWith("using ")) {
      //removing import statements
    } else if (line.trimStart().startsWith("namespace ")) {
      // creating a model
      namespace = line.replace("namespace eStore.Shared.", "");
      line = namespace.replace(".", "/");
      outputPath = path.join(outputPath, line);
      // json.push(line + ":");
    } else if (line.trimStart().startsWith("public class ")) {
      line = line.replace("public class ", "").trim();
      line = camelCase(line);
      if (line.match(":")) {
        line = line.replace(":", "-extd-");
      }
      line = camelCase(line);

      classList.push(line);
      json.push('"' + line + '":');
    } else if (line.trimStart().startsWith("//")) {
      //removing commeted Lines
    } else if (line.match("{ get; set; }")) {
      //Field(s)
      line = line.replace("{ get; set; }", "");
      line = line.replace("public ", "").trim();

      var fields = line.split(" ");
      if (keyFlag) {
        var d =
          '"' +
          camelCase(fields[1]) +
          '"' +
          ':{"type":"' +
          camelCase(fields[0]) +
          '","required":"true"}';

        json.push(d);
      } else {
        var d =
          '"' +
          camelCase(fields[1]) +
          '"' +
          ':{"type":"' +
          camelCase(fields[0]) +
          '","required":"false"}';

        json.push(d);
      }
    } else if (line.match("[key]")) {
      keyFlag = true;
    } else {
      json.push(line);
    }
  });

  //console.log("Debug");
  //console.log(json);

  if (namespace == "") return "error";
  var x = json.toString();
  x = x.replace(/ /g, "");

  x = x.replace(/{,/g, "{");
  x = x.replace(/{,/g, "{");
  x = x.replace(/:,/g, ":");
  x = x.replace("},},}", "}}}");
  x = x.replace(/},},/g, "}},");
  return JSON.parse(x);
};

//Function to jsonify
const toJsonString = (keyData) => {
  var keys = Object.keys(keyData);

  var mLine = "{";
  for (let i = 0; i < keys.length; i++) {
    var p = keyData[keys[i]];
    if (p.type.match("virtual")) {
      //ignore
    } else if( p.type.match("iCollection")){}
    else {
      mLine =
        mLine + keys[i] + ":{type:" + varName(p.type) + ",required:false}";
      console.log(mLine);
      console.log("\n");
      if (i != keys.length - 1) mLine = mLine + ",";
    }
  }
  mLine = mLine + "}";
  return mLine;
};

function classToModel(inputFileName, outputFolder) {
  Reset();
  outputPath = outputFolder;
  var fileData = fs.readFileSync(inputFileName, "utf8");

  var lines = fileData.split(/\r?\n/);

  var modelData = toJsonObject(lines);

  var jData = [{ error: null }];
  if (namespace == "") {
    jData[0].error = "Error:File is not model, Manual Check is Required";
    return jData;
  }

  fs.mkdirSync(outputPath, { recursive: true });
  var keys = Object.keys(modelData);
  for (var i = 0; i < keys.length; i++) {
    var z = modelData[keys[i]];
    if (keys[i].match("-Extd")) {
      var m = keys[i].split("-Extd-");
      var x =
        inc +
        "let " +
        m[0] +
        "Schema = new Schema(" +
        toJsonString(z) +
        ',{collection:"' +
        m[0] +
        '"});';

      x =
        x +
        '\nmodule.exports = mongoose.model("' +
        m[0] +
        '",' +
        m[0] +
        "Schema);";
      x = x + "\n//Add base class data \n//" + m[0] + "\t extends " + m[1];

      var mFileName = path.join(outputPath, m[0] + ext);
      fs.writeFileSync(mFileName, x, "utf8");
      jData.push({
        classModel: true,
        model: m[0],
        baseModel: m[1],
        modelFile: m[0] + ext,
        baseFolder: outputPath,
        status: "OK",
        namespace: namespace,
      });
    } else {
      var x =
        inc +
        "let " +
        keys[i] +
        "Schema = new Schema(" +
        toJsonString(z) +
        ',{collection:"' +
        keys[i] +
        '"});';

      x =
        x +
        '\nmodule.exports = mongoose.model("' +
        keys[i] +
        '",' +
        keys[i] +
        "Schema);";
      var mFileName = path.join(outputPath, keys[i] + ext);
      fs.writeFileSync(mFileName, x, "utf8");
      jData.push({
        classModel: true,
        model: keys[i],
        modelFile: keys[i] + ext,
        baseFolder: outputPath,
        status: "OK",
        namespace: namespace,
      });
    }
  }
  //console.log(jData);
  return jData;
}

module.exports = classToModel;
