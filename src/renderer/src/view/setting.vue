<template>
  <div class="settings-container">
    <div class="header">
      <Setting style="width: 30px; color: blue; margin-right: 10px;" />

      <h1 class="title">DoList 设置</h1>
    </div>

    <div class="settings-grid">
      <!-- 常规设置 -->
      <el-card class="setting-card">
        <div class="card-header">
          <Sliders style="width: 30px; color: blue; margin-right: 10px;" />
          <h2 class="card-title">常规设置</h2>
        </div>

        <!-- 开机启动 -->
        <div class="setting-item">
          <div class="setting-description">
            <h3 class="setting-name">开机启动</h3>
            <p class="setting-hint">应用随系统自动启动</p>
          </div>
          <el-switch v-model="settings.autoStart" active-color="#3b82f6"></el-switch>
        </div>
        <!-- 导出数据 -->
        <div class="setting-item">
          <div class="setting-description">
            <h3 class="setting-name">导出数据</h3>
            <p class="setting-hint">将当前待办数据全部导出</p>
          </div>
          <el-button @click="exportJson" type="primary">导出</el-button>
        </div>
        <!-- 导入数据 -->
        <div class="setting-item">
          <div class="setting-description">
            <h3 class="setting-name">导入数据</h3>
            <p class="setting-hint">导入数据将覆盖当前所有数据</p>
          </div>
          <el-button @click="importJson" type="primary">导入</el-button>
        </div>
        <!-- 清除数据 -->
        <div class="setting-item">
          <div class="setting-description">
            <h3 class="setting-name">清除数据</h3>
            <p class="setting-hint">将清除当前所有数据</p>
          </div>
          <el-button @click="clearAllData" type="danger">清除</el-button>
        </div>

        <!-- 用户名 -->
        <div class="setting-item">
          <label class="setting-label">用户名</label>
          <el-input v-model="settings.username" placeholder="请输入用户名" clearable class="setting-input"></el-input>
        </div>

        <!-- 端口设置 -->
        <div class="setting-item">
          <label class="setting-label">端口号</label>
          <el-input v-model="settings.port" type="number" min="1" max="65535" placeholder="1-65535"
            :class="{ 'input-error': portError }" class="setting-input"></el-input>
          <p v-if="portError" class="error-message">请输入1-65535之间的端口号</p>
        </div>
      </el-card>

      <!-- 外观设置 -->
      <el-card class="setting-card">
        <div class="card-header">
          <Image style="width: 30px; color: blue; margin-right: 10px;" />
          <h2 class="card-title">外观设置</h2>
        </div>

        <!-- 主题选择 -->
        <div class="setting-item">
          <h3 class="setting-name">主题颜色</h3>
          <div class="theme-selector">
            <div v-for="theme in themes" :key="theme.id" class="theme-preview" :class="[
              theme.class,
              { 'theme-selected': settings.theme === theme.id }
            ]" @click="settings.theme = theme.id"></div>
          </div>
        </div>

        <!-- 透明度设置 -->
        <div class="setting-item">
          <label class="setting-label">窗口透明度</label>
          <div class="opacity-control">
            <i class="fas fa-eye-slash opacity-icon"></i>
            <el-slider v-model="settings.opacity" :min="30" :max="100" class="opacity-slider"
              @change="changeOpacity(settings.opacity)"></el-slider>
            <span class="opacity-value">{{ settings.opacity }}%</span>
          </div>
        </div>
      </el-card>
    </div>

    <!-- 操作按钮 -->
    <div class="action-buttons">
      <el-button class="btn reset-btn" :type="resetStatus ? 'success' : ''" @click="resetSettings">
        <RefreshRight style="width: 20px; color: blue; margin-right: 10px;" />
        {{ resetStatus ? '已重置' : '恢复默认' }}
      </el-button>
      <el-button class="btn save-btn" type="primary" @click="saveSettings" :type="saveStatus ? 'success' : 'primary'">
        <Save style="width: 30px; color: blue; margin-right: 10px;" />
        {{ saveStatus ? '保存成功' : '保存设置' }}
      </el-button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted,watch } from 'vue';
import { Delete, Edit, Document, Plus, Search, List, Setting, Right, Select, CloseBold, RefreshRight } from '@element-plus/icons-vue'
import { Image, Save, Sliders } from 'lucide-vue-next';
import { ElNotification } from 'element-plus'
import { initTheme, setTheme, getCurrentTheme, THEMES } from '../utils/theme'

// 默认设置
const defaultSettings = {
  autoStart: false,
  theme: 'light',
  opacity: 100,
  username: '',
  port: ''
};

// 当前设置
const settings = reactive({ ...defaultSettings });

// 主题选项
const themes = [
  { id: 'light', name: '浅色', class: 'theme-light' },
  { id: 'dark', name: '深色', class: 'theme-dark' },
  { id: 'blue', name: '蓝色', class: 'theme-blue' },
  { id: 'green', name: '绿色', class: 'theme-green' },
  { id: 'purple', name: '紫色', class: 'theme-purple' },
  { id: 'pink', name: '粉色', class: 'theme-pink' }
];
// 监听主题变化
watch(() => settings.theme, (newTheme) => {
  setTheme(newTheme)
  // 实时保存主题设置
  localStorage.setItem('todolist-settings', JSON.stringify(settings));
})
// 状态标志
const saving = ref(false);
const saveStatus = ref(false);
const resetStatus = ref(false);
const changeOpacity = (opacity) => {
  console.log(opacity / 100)

  window.electronAPI.setTransparentColor(opacity / 100)
  localStorage.setItem('todolist-settings', JSON.stringify(settings));
  localStorage.setItem('vue3-todo-transparentColor', JSON.stringify(opacity / 100));
}

// 端口验证
const portError = computed(() => {
  if (!settings.port) return false;
  const portNum = parseInt(settings.port);
  return isNaN(portNum) || portNum < 1 || portNum > 65535;
});


// 从本地存储加载设置
const loadSettings = () => {
  const saved = localStorage.getItem('todolist-settings');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      Object.assign(settings, parsed);
      // 初始化主题
      const currentTheme = getCurrentTheme()
      settings.theme = currentTheme
      setTheme(currentTheme)
    } catch (e) {
      console.error('Failed to parse settings', e);
    }
  }
};

async function exportJson() {
  try {
    let allTasks = {}
    try {
      const rawAllTasks = localStorage.getItem('vue3-todo-tasks')
      allTasks = JSON.parse(rawAllTasks)
    } catch {
      allTasks = {
        uncompletedTasks: [],
        historyTasks: []
      }
      print("错误: 读取本地存储的任务数据失败，已初始化为空列表")
    }
    // 调用预加载脚本暴露的 exportJson 方法
    const result = await window.electronAPI.exportJson(allTasks)

    if (result.success) {
      console.log('文件保存成功！路径：', result.path);
      const str=`文件已保存至：${result.path}`
      ElNotification({
          title: '导出成功',
          message: str,
          type: 'success',
        })
    } else {
      console.log('保存失败：', result.message);
      if (result.message !== '用户取消了保存操作') {
        ElNotification({
          title: '导出失败',
          message: result.message,
          type: 'error',
        })
      }
    }
  } catch (error) {
    console.error('调用保存 API 时发生错误:', error);
  }
}
async function importJson() {
  try {
    // 调用预加载脚本暴露的 importJson 方法
    const result = await window.electronAPI.importJson()

    if (result.success) {
      console.log('文件读取成功！路径：', result.path);
      try {
        const parsed = JSON.parse(result.data);
        localStorage.setItem('vue3-todo-tasks', JSON.stringify(parsed));
        ElNotification({
          title: '导入成功',
          message: '数据已覆盖当前待办列表',
          type: 'success',
        })
          // 发送事件通知其他组件数据已更新
          window.electronAPI.sendDataUpdated()
      } catch (e) {
        console.error('Failed to parse imported data', e)
        ElNotification({
          title: '导入失败',
          message: '文件格式错误，无法解析数据',
          type: 'error',
        })
      }
    } else {
      if (result.message !== '用户取消了打开操作') {
        ElNotification({
          title: '导入失败',
          message: result.message,
          type: 'error',
        })
      }
    }
  } catch (error) {
    console.error('调用读取 API 时发生错误:', error);
  }
}
async function clearAllData() {
  try {
    localStorage.removeItem('vue3-todo-tasks');
    ElNotification({
      title: '清除成功',
      message: '所有待办数据已清除',
      type: 'success',
    })
    // 发送事件通知其他组件数据已更新
    window.electronAPI.sendDataUpdated()
  } catch (error) {
    console.error('清除数据时发生错误:', error);
    ElNotification({
      title: '清除失败',
      message: '发生未知错误，数据未被清除',
      type: 'error',
    })
  }
  
}
// 保存设置到本地存储
const saveSettings = () => {
  saving.value = true;
  window.electronAPI.setLoginAuto(settings.autoStart)

  // 模拟保存操作
  setTimeout(() => {
    localStorage.setItem('todolist-settings', JSON.stringify(settings));
    saving.value = false;
    saveStatus.value = true;
    // 显示主题切换成功通知
    const themeName = themes.find(t => t.id === settings.theme)?.name || '主题'
    ElNotification({
      title: '设置已保存',
      message: `${themeName}已应用成功`,
      type: 'success',
    })
    // 2秒后恢复按钮状态
    setTimeout(() => {
      saveStatus.value = false;
    }, 2000);
  }, 500);
};

// 恢复默认设置
const resetSettings = () => {
  Object.assign(settings, defaultSettings);
  resetStatus.value = true;

  // 2秒后恢复按钮状态
  setTimeout(() => {
    resetStatus.value = false;
  }, 2000);
};

// 初始化加载设置
onMounted(()=>{
  loadSettings()
  initTheme()
});
</script>
<style scoped>
.settings-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Inter', sans-serif;
  background-color: var(--bg-color);
  color: var(--text-color);
  transition: all 0.3s ease;
  min-height: 100vh;
}

.header {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  background-color: var(--header-bg);
  padding: 15px;
  border-radius: 8px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  color: var(--text-color);
}

.setting-card {
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  margin-bottom: 20px;
  background-color: var(--card-bg);
  border: 1px solid var(--border-color);
}

.setting-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.card-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.card-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-color);
}

.setting-item {
  margin-bottom: 20px;
  padding: 15px;
  border-bottom: 1px solid var(--border-color);
}

.setting-item:last-child {
  border-bottom: none;
}

.setting-description {
  margin-bottom: 10px;
}

.setting-name {
  font-weight: 500;
  color: var(--text-color);
  margin-bottom: 3px;
}

.setting-hint {
  font-size: 13px;
  color: var(--el-color-info);
}

.setting-label {
  display: block;
  font-weight: 500;
  color: var(--text-color);
  margin-bottom: 8px;
}

.setting-input {
  width: 100%;
}

.error-message {
  font-size: 13px;
  color: var(--el-color-danger);
  margin-top: 5px;
}

.theme-selector {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 10px;
}

.theme-preview {
  width: 60px;
  height: 60px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 2px solid transparent;
}

.theme-preview:hover {
  transform: scale(1.05);
}

.theme-selected {
  border-color: var(--el-color-primary);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--el-color-primary) 30%, transparent);
}

.theme-light { background-color: #ffffff; border: 1px solid var(--border-color); }
.theme-dark { background-color: #1a1a1a; }
.theme-blue { background-color: #dbeafe; }
.theme-green { background-color: #dcfce7; }
.theme-purple { background-color: #f3e8ff; }
.theme-pink { background-color: #fce7f3; }

.opacity-control {
  display: flex;
  align-items: center;
  gap: 10px;
}

.opacity-slider {
  flex: 1;
}

.opacity-value {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-color);
  min-width: 45px;
  text-align: right;
}

.action-buttons {
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
  gap: 15px;
}

.btn {
  transition: all 0.2s ease;
  border-radius: 8px;
  padding: 10px 20px;
  font-weight: 500;
}

.btn:hover {
  transform: translateY(-2px);
}

.save-btn {
  background-color: var(--el-color-primary);
  color: #fff;
  border: none;
}

.save-btn:hover {
  background-color: color-mix(in srgb, var(--el-color-primary) 80%, black);
}
</style>
<!-- <style scoped>
.settings-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Inter', sans-serif;
  background-color: #f8fafc;
  transition: background-color 0.3s ease;
}

.header {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}

.icon {
  font-size: 24px;
  color: #3b82f6;
  margin-right: 15px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.settings-grid {
  display: flex;
  flex-direction: column;

  gap: 20px;
}

@media (min-width: 768px) {
  .settings-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.setting-card {
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  margin-bottom: 20px;
}

.setting-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.card-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.card-icon {
  font-size: 18px;
  color: #3b82f6;
  margin-right: 10px;
}

.card-title {
  font-size: 18px;
  font-weight: 600;
  color: #333;
}

.setting-item {
  margin-bottom: 20px;
}

.setting-description {
  margin-bottom: 10px;
}

.setting-name {
  font-weight: 500;
  color: #333;
  margin-bottom: 3px;
}

.setting-hint {
  font-size: 13px;
  color: #777;
}

.setting-label {
  display: block;
  font-weight: 500;
  color: #333;
  margin-bottom: 8px;
}

.setting-input {
  width: 100%;
}

.error-message {
  font-size: 13px;
  color: #f56c6c;
  margin-top: 5px;
}

.input-error>>>.el-input__wrapper {
  border-color: #f56c6c;
}

.theme-selector {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.theme-preview {
  width: 60px;
  height: 60px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 2px solid transparent;
}

.theme-preview:hover {
  transform: scale(1.05);
}

.theme-selected {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
}

.theme-light {
  background-color: #fff;
  border: 1px solid #ddd;
}

.theme-dark {
  background-color: #1a1a1a;
}

.theme-blue {
  background-color: #dbeafe;
}

.theme-green {
  background-color: #dcfce7;
}

.theme-purple {
  background-color: #f3e8ff;
}

.theme-pink {
  background-color: #fce7f3;
}

.opacity-control {
  display: flex;
  align-items: center;
}

.opacity-icon {
  color: #999;
  margin-right: 10px;
}

.opacity-slider {
  flex: 1;
}

.opacity-value {
  font-size: 14px;
  font-weight: 500;
  color: #333;
  min-width: 45px;
  text-align: right;
  margin-left: 10px;
}

.action-buttons {
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
  gap: 15px;
}

.btn {
  transition: all 0.2s ease;
  border-radius: 8px;
  padding: 10px 20px;
  font-weight: 500;
}

.btn:hover {
  transform: translateY(-2px);
}

.reset-btn {
  background-color: #f0f2f5;
  color: #606266;
  border: none;
}

.reset-btn:hover {
  background-color: #e4e7ed;
}

.save-btn {
  background-color: #3b82f6;
  color: #fff;
  border: none;
}

.save-btn:hover {
  background-color: #2563eb;
}

.btn-icon {
  margin-right: 8px;
}
</style> -->