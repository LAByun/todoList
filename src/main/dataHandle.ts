import fs from 'fs'
import { dialog } from 'electron'
import { join } from 'path'
import { app, BrowserWindow } from 'electron';
// import { get } from 'http';
// import { json } from 'stream/consumers';
const basePath=()=>{
    if(app.isPackaged){
        return join(__dirname,"../renderer/")
    }else{
        return "src/renderer/public/"
    }
}
export async function getImgPath() {
    const myPath= await dialog.showOpenDialog({
        properties: ['openFile'],
        filters: [{ name: 'Images', extensions: ['png', 'jpg', 'jpeg', 'gif'] }]
      }).then(result => {
        if (!result.canceled) {
          console.log('Selected file:', result.filePaths[0]);
           return result.filePaths[0];
        }
      }).catch(err => {
        console.error('Error:', err);
      });
      if(myPath){
        return myPath
      }else{
        return "no"
      }

   
}
export function getImgBase64(imgPath:string){
    try{
        const imgBuffer = fs.readFileSync(imgPath);
        const base64String = imgBuffer.toString('base64');
        return base64String;
    }catch(err){
        console.error('Error:', err);
        return '';
    }
}
export function copyImg(imgPath:string){
    try{
        const imgBuffer = fs.readFileSync(imgPath);
        const base64String = imgBuffer.toString('base64');
        return base64String;
    }catch(err){
        console.error('Error:', err);
        return '';
    }
}
export async function saveImg(imgPath:string){
    try{
        const imgBase64=getImgBase64(imgPath)
        const imgBuffer = Buffer.from(imgBase64, 'base64');
        
       
        const JsonData=JSON.parse(getIniJson());//JSON.parse是把String改为Json对象，JSON.stringfy是把数据改为String类型

        // console.log(JsonData)

        const savePath=JsonData['imgName']+JsonData['nextImgNum']+".png"
        fs.writeFileSync(basePath()+"img/"+savePath, imgBuffer);
         JsonData['imgNum']=JsonData['imgNum']+1;
         JsonData['nextImgNum']=JsonData['nextImgNum']+1;
                 
        const JsonString=JSON.stringify(JsonData)
        writeIniJson(JsonString);
         console.log(savePath)
        return savePath;

    }catch(err){
        console.error('Error:', err);
        return 'Error:'+ err;
    }
}
export function changeImg(imgPath:string,oldPath:string){
    try{
        const imgBase64=getImgBase64(imgPath)
        const imgBuffer = Buffer.from(imgBase64, 'base64');
        // console.log(JsonData)
        const savePath=oldPath
        fs.writeFileSync(basePath()+"img/"+savePath, imgBuffer);
        console.log(savePath)
        return savePath;
    }catch(err){
        console.error('Error:', err);

        return saveImg(imgPath);
    }
}
export function getIniJson(){
    try{
        const imgBuffer = fs.readFileSync(basePath()+'img/iniImg.json');
        const jsonString = imgBuffer.toString('utf-8');
        return jsonString;
    }catch(err){
        console.error('Error:', err);
        return '';
    }
}

export function writeIniJson(jsonData:string){
    try{
        fs.writeFileSync(basePath()+'img/iniImg.json', jsonData);
    }catch(err){
        console.error('Error:', err);
        return '';
    }
}

export function updateAllTasksJson(jsonData:string){
    try{
        fs.writeFileSync(basePath()+'AllTasks.json', jsonData);
        return "updateOk";
    }catch(err){
        console.error('Error:', err);
        return 'Error:'+err;
    }
}
