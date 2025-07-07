import { app, shell, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import fs from 'fs'
import path from 'path'
import { dialog } from 'electron'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
import { setExcel } from './excelHandle'
import * as dataHandle from './dataHandle'
function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 490,
    height: 80,
     transparent: true,
    frame: false,
    show: false,
    // icon:path.join(__dirname, '../../resources/icon.png'),
    // fullscreen:true,
    fullscreen:false,
    autoHideMenuBar: true,
    resizable:false,
    alwaysOnTop:true,
    hasShadow:false,
    // backgroundColor: '#00000000',
 
    titleBarStyle: 'hidden',
    //这是全局不透明度
    // opacity:0.9,

  
    title: '',
    // // expose window controls in Windows/Linux
//     titleBarOverlay: {
// color: 'rgba(0,0,0,0)', // 透明背景
//   symbolColor: '#fff',     // 按钮颜色
//   height: 0               // 控制区高度
//     },
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      // devTools:false,
      webSecurity: false,//说是生产环境不可如此，会产生xss攻击
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
      mainWindow.webContents.openDevTools({ mode: 'detach' });
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }


  return mainWindow
}

function createSettingWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    // frame:false,
    // show: false,
    autoHideMenuBar: true,
       icon:path.join(__dirname, '../../resources/icon.png'),
    // transparent:true,
    // titleBarStyle: 'hidden',
    // // expose window controls in Windows/Linux
    // titleBarOverlay: {
    //   color: 'white',
    //   // symbolColor: 'rgba(219, 219, 219, 0.54)',
    //   height: 30
    // },
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      webSecurity: false,//说是生产环境不可如此，会产生xss攻击
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })
  
  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.webContents.openDevTools({ mode: 'detach' });
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'] + "#/setting")
  } else {
    mainWindow.loadURL(join(__dirname, '../renderer/index.html') + "#/setting")
  }


  return mainWindow
}


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  // IPC test
  ipcMain.on('ping', () => console.log('pong'))
  ipcMain.handle('exportJson', (event, myjson) => {
    console.log(myjson)
    saveJson(myjson)
    return "yes"
  })
  ipcMain.handle('exportExcel', (event, myjson, name) => {
    // console.log(myjson)
    setExcel(myjson, name)
    return "yes"
  })

  ipcMain.handle('closeWin', async () => {
    app.quit()

    // console.log(res)

  })
  ipcMain.handle('getImgPath', async () => {
    const mypath = await dataHandle.getImgPath()
    console.log(mypath)
    return mypath
  })
  ipcMain.handle('saveImg', async (event, imgPath) => {
    const res = await dataHandle.saveImg(imgPath)
    // console.log(res)
    return res
  })
  ipcMain.handle('changeImg', async (event, imgPath, oldPath) => {
    const res = await dataHandle.changeImg(imgPath, oldPath)
    // console.log(res)
    return res
  })
  ipcMain.handle('updatelampJTableJson', async (event, jsonData) => {
    const res = await dataHandle.updatelampJTableJson(jsonData)
    // console.log(res)
    return res
  })
  //创建窗口
  const myWindow = createWindow()
  //过于极端的方案
  // myWindow.setIgnoreMouseEvents(true)
  
  // 动态调整高度
  ipcMain.handle('resizeWindow', (event, height) => {
    console.log(height)
    myWindow.setContentSize(490, height)
  })
  let settingWindow: BrowserWindow;
  ipcMain.handle('getSetting', (event) => {
    console.log('getSetting')
    settingWindow = createSettingWindow()
    return "settingWindow"
  })
  ipcMain.handle('setLoginAuto', (event, auto) => {
    console.log('setLoginAuto')
    app.setLoginItemSettings({
      openAtLogin: auto, // 启用开机自启
      openAsHidden: true, // macOS：隐藏窗口启动
      args: ['--openAsHidden'] // Windows：通过参数控制隐藏启动
    })
    return "autoLogin"
  })
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
async function saveJson(params: object[]) {
  const { filePath } = await dialog.showSaveDialog({
    title: 'Save JSON File',
    defaultPath: 'table1.json',
    filters: [{ name: 'JSON Files', extensions: ['json'] }]
  });
  if (filePath) {
    const jsonData = JSON.stringify(params, null, 2);
    fs.writeFile(filePath, jsonData, 'utf-8', (err) => {
      if (err) {
        console.error('Error writing JSON file:', err);
      } else {
        console.log('JSON file saved successfully');
      }
    });
  }
}
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
