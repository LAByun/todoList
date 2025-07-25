import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import { send } from 'vite'

// Custom APIs for renderer
const api = {}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
    contextBridge.exposeInMainWorld('electronAPI',{
      exportJson:(myjson)=>{
        return ipcRenderer.invoke('exportJson',myjson)
      },
      exportExcel:(myjson,name)=>{
        return ipcRenderer.invoke('exportExcel',myjson,name)
      },
      getImgPath:()=>{
        return ipcRenderer.invoke('getImgPath')
      },
      saveImg:(imgPath)=>{
        return ipcRenderer.invoke('saveImg',imgPath)
      },
      changeImg:(imgPath,oldPath)=>{
        return ipcRenderer.invoke('changeImg',imgPath,oldPath)
      },
      updateHistoryJson:(jsonData)=>{
        return ipcRenderer.invoke('updateHistoryJson',jsonData)
      },
      closeWin:()=>{
        return ipcRenderer.invoke('closeWin')
      },
      resizeWindow:(height)=>{
        return ipcRenderer.invoke('resizeWindow',height)
      },
      getSetting:()=>{
        return ipcRenderer.invoke('getSetting')
      },
      setLoginAuto:(auto:boolean)=>{
        return ipcRenderer.invoke('setLoginAuto',auto)
      },
      setTransparentColor:(color:string)=>{
        return ipcRenderer.invoke('setTransparentColor',color)
      },
      sendTransparentColor:(callback)=>{
        return ipcRenderer.on('sendTransparentColor',(event,color)=>{
          callback(color)
        })
      }
    })
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
