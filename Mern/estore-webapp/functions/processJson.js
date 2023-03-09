function renameKey(obj, oldKey, newKey) {
  obj[newKey] = obj[oldKey];
  delete obj[oldKey];
}
function camelCase(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index)
    {
        return index == 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
}

function keyMap(obj){
    obj.forEach((key)=>renameKey(obj,key,camelCase(key)));
}
export function ProcessJsonDatabase(json) {
  const arr = JSON.parse(json);
  //arr.forEach((obj) => renameKey(obj, "_id", "id"));
  arr.forEach((obj) => keyMap(obj));
  const updatedJson = JSON.stringify(arr);
  console.log(updatedJson);
  return updatedJson;
}
