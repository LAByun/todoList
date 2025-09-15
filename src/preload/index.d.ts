import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: unknown
    electronAPI: {
      exportJson: (myjson: object[]) => Promise<string>
      exportExcel: (myjson: object[],name:string) => Promise<string>
      getImgPath:()=>Promise<string>
      saveImg: (imgPath:string)=>Promise<string>
      changeImg: (imgPath:string,oldPath:string)=>Promise<string>
      updateAllTasksJson:(jsonData:string)=>Promise<string>
      closeWin:()=>Promise<string>
      resizeWindow:(height:number)=>Promise<string>
      getSetting:()=>Promise<string>
      setLoginAuto:(auto:boolean)=>Promise<string>
      setTransparentColor:(color:string)=>Promise<string>
      sendTransparentColor:(callback:(color:string)=>void)=>void
    }
  }
}
