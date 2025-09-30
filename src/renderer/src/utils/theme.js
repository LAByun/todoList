// 主题配置
export const THEMES = {
  light: 'light',
  dark: 'dark', 
  blue: 'blue',
  green: 'green',
  purple: 'purple',
  pink: 'pink'
}

// 获取当前主题
export function getCurrentTheme() {
  return localStorage.getItem('todolist-theme') || 'light'
}

// 设置主题
export function setTheme(themeName) {
  if (!THEMES[themeName]) {
    console.warn(`主题 ${themeName} 不存在，使用默认主题`)
    themeName = 'light'
  }
  
  // 设置HTML的data-theme属性
  document.documentElement.setAttribute('data-theme', themeName)
  
  // 保存到localStorage
  localStorage.setItem('todolist-theme', themeName)
  
  return themeName
}

// 初始化主题
export function initTheme() {
  const savedTheme = getCurrentTheme()
  return setTheme(savedTheme)
}

// 切换主题
export function toggleTheme(currentTheme) {
  const themes = Object.keys(THEMES)
  const currentIndex = themes.indexOf(currentTheme)
  const nextIndex = (currentIndex + 1) % themes.length
  return setTheme(themes[nextIndex])
}