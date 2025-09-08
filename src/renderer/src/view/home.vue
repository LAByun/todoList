<template>
    <div class="todo-app">
        <div class="container">
            <div class="title" :style="{ ...defaultBackgroundColor, appRegion: 'drag' }">
                <div style="display: flex; align-items: center; position: relative;left: 20px;">
                    <List style="width: 30px; margin-right: 10px;" class="mainColor" />
                    <span class="showWaitListClass" style="app-region:no-drag;" @click="showWaitListFn">待办内容</span>
                </div>
                <div style="display: flex;">

                    <div style="app-region:no-drag;">
                        <el-button @click="showAddBlockFn" class="mainButton mainColor">
                            <Plus style="width: 20px;" />
                        </el-button>
                    </div>

                    <div style="app-region:no-drag;">
                        <el-button type="primary" class="mainButton mainColor" @click="setDialogVisible">
                            <Setting style="width: 20px;" />
                        </el-button>
                    </div>
                    <div style="app-region:no-drag;">
                        <el-button type="primary" class="mainButton mainColor" @click="quitAll">

                            <log-out style="width: 20px;" />
                        </el-button>
                    </div>
                </div>
            </div>
            <transition name="fade">
                <div class="input-container" :style="defaultBackgroundColor" v-if="showAddBlock">
                    <div class="flex-input">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <div
                                style="font-size: 20px;font-weight: 700; padding-left: 30px; border-left: 4px solid #00a2ff;">
                                添加新待办
                            </div>
                            <div>
                                <el-button type="primary" class="mainButton mainColor" @click="addTask"
                                    :disabled="!newTask.trim()">
                                    <Select style="width: 20px;" />
                                </el-button>
                                <el-button type="primary" class="mainButton mainColor" @click="showAddBlockFn">
                                    <CloseBold style="width: 20px;" />
                                </el-button>
                            </div>
                        </div>

                        <div class="input-wrapper">
                            <div
                                style="font-size: 14px;font-weight: 500; margin: 5px; margin-top: 10px; margin-bottom: 10px;">
                                <span>请输入待办内容</span>
                            </div>
                            <el-input class="inputSet" type="textarea" v-model="newTask" placeholder="输入新任务..."
                                @keyup.enter="addTask" ref="taskInput"></el-input>
                        </div>
                        <!-- <el-button type="primary" @click="addTask" :disabled="!newTask.trim()">
                        <i class="fas fa-plus"></i>添加
                    </el-button> -->
                    </div>
                </div>
            </transition>
            <transition name="fade">
                <transition-group name="fade" tag="div" :style="defaultBackgroundColor" class="tasks-container"
                    v-if="showWaitList">
                    <div key="0"
                        style="font-size: 20px;font-weight: 700; padding-left: 30px; border-left: 4px solid #00a2ff;">
                        <span v-if="showSelect">全部待办</span>
                        <span v-else>历史记录</span>
                    </div>
                    <div key="1" v-if="(uncompletedTasks.length+completedTasks.length === 0) & showSelect" class="empty-state">
                        <i class="fas fa-inbox"></i>
                        <p>暂无任务，添加一个吧~</p>
                    </div>

                    <div key="2" class="selectContainerClass" v-if="showSelect">


                        <draggable :list="uncompletedTasks" item-key="id" tag="div" @end="onDragEnd"
                            ghost-class="ghost-card" chosen-class="chosen-card" animation="200">
                            <template #item="{ element: task }">
                                <div> <!-- 每个任务的容器 -->
                                    <div class="todo-card">
                                        <div class="task-row" style="flex: 1;">
                                                                   <el-checkbox v-model="task.completed" @change="saveTasks"></el-checkbox>
                                            <span :class="{ 'completed': task.completed }" style="flex: 1;"
                                                @click="setTask(task,task.id)">{{ task.text }}</span>
                                        </div>
                                        <div>
                                            <el-button type="primary" plain size="small"
                                                @click="changeTask(task.id, 'uncompletedTasks')" circle>
                                                <Edit v-if="!task.editAble" style="width: 15px;" />
                                                <Right v-else style="width: 15px;" />
                                            </el-button>
                                            <el-button type="danger" plain size="small"
                                                @click="removeTask(task.id, 'uncompletedTasks')" circle>
                                                <Delete style="width: 15px;" />
                                            </el-button>
                                        </div>
                                    </div>
                                    <div>
                                        <Transition name="fade">
                                            <div v-if="task.editAble" style="position: relative;left: 10px;">
                                                <el-input v-model="task.text" class="inputSet" type="textarea"
                                                    placeholder="输入新任务..."></el-input>
                                            </div>
                                        </Transition>
                                    </div>
                                </div>
                            </template>
                        </draggable>
                        <!-- 去除的任务清单 -->
                        <div v-for="(task, index) in completedTasks" :key="task.id">
                            <div class="todo-card">
                                <div class="task-row" style="flex: 1;">
                                    <el-checkbox v-model="task.completed" @change="saveTasks"></el-checkbox>
                                    <span :class="{ 'completed': task.completed }" style="flex: 1;"
                                        @click="setTask(task,index)">{{ task.text
                                        }}</span>
                                </div>
                                <div>
                                    <el-button type="primary" plain size="small"
                                        @click="changeTask(index, 'completedTasks')" circle>


                                        <Edit v-if="!task.editAble" style="width: 15px;" />
                                        <Right v-else style="width: 15px;" />
                                    </el-button>
                                    <el-button type="danger" plain size="small"
                                        @click="removeTask(index, 'completedTasks')" circle>


                                        <Delete style="width: 15px;" />
                                    </el-button>


                                </div>

                            </div>
                            <div>

                                <Transition name="fade">
                                    <div v-if="task.editAble" style="position: relative;left: 10px;">
                                        <el-input v-model="task.text" class="inputSet" type="textarea"
                                            placeholder="输入新任务..."></el-input>

                                    </div>

                                </Transition>
                            </div>


                        </div>

                    </div>
                    <!-- 历史记录 -->
                    <div key="3" class="selectContainerClass historyContainerClass" v-else>
                        <div v-for="(task, index) in historyTasks" :key="task.id">
                            <div class="todo-card">
                                <div class="task-row" style="flex: 1;">
                                    <!-- <el-checkbox v-model="task.completed" @change="saveTasks"></el-checkbox> -->
                                    <span :class="{ 'completed': task.completed }" style="flex: 1;">{{ task.text
                                    }}</span>
                                </div>
                                <div>

                                    <el-button type="danger" plain size="small"
                                        @click="removeTask(index, 'historyTasks')" circle>


                                        <Delete style="width: 15px;" />
                                    </el-button>


                                </div>

                            </div>



                        </div>
                    </div>
                    <div key="4" v-if="uncompletedTasks.length+completedTasks.length> 0" class="stats">
                        已完成 {{ completedTasks.length }} / {{ uncompletedTasks.length+completedTasks.length }}
                    </div>
                    <div key="5" style="display: flex; justify-content: flex-end; position: relative; right: 10px;">
                        <el-button size="small" class="mainButton mainColor" @click="changeSelectShow">
                            <Clock v-if="showSelect" style="width: 20px;" />
                            <Back v-else style="width: 20px;" />
                        </el-button>
                    </div>
                </transition-group>
            </transition>




        </div>


    </div>
</template>

<script setup>
import { Clock, History, LogOut } from 'lucide-vue-next';
import { defineComponent, ref, computed, onMounted, onUnmounted, onBeforeUnmount, watch, nextTick } from 'vue';
import { Delete, Edit, Document, Plus, Search, List, Setting, Right, Select, CloseBold, Back } from '@element-plus/icons-vue'
import axios from 'axios';
import { ElFormItem } from 'element-plus';
import draggable from 'vuedraggable'


const showAddBlock = ref(false)
const showWaitList = ref(true)
const showSelect = ref(true)
const defaultBackgroundColor = ref({})
const taskInput = ref(null)

const changeSelectShow = () => {
    showSelect.value = !showSelect.value
}

const setDialogVisible = () => {
    window.electronAPI.getSetting()
}
const newTask = ref('');
const tasks = ref([]);
const uncompletedTasks = ref([]);
const completedTasks = ref([]);
const historyTasks = ref([])

const changeTask = (index, source) => {
    if (source === 'uncompletedTasks') {
        for(let i=0;i<uncompletedTasks.value.length;i++){
            if(uncompletedTasks.value[i].id==index){
                let task = uncompletedTasks.value[i];
                task.editAble = !task.editAble;
            }
        }
    }
    else {
        let task = completedTasks.value[index];
        task.editAble = !task.editAble;
    }


}
//使用computed过滤完成的任务,曾经的完成实现形式
// const completedTasks = computed(() => {
//     return tasks.value.filter(task => task.completed);
// });
//使用computed过滤未完成的任务,曾经的未完成实现形式
// const uncompletedTasks = computed(() => {
//     return tasks.value.filter(task => !task.completed);
// });

//缩略到小任务栏里
const quitAll = async () => {
    await window.electronAPI.closeWin()
}
const completedCount = computed(() => {
    return tasks.value.filter(task => task.completed).length;
});
//文字被点击
const setTask = (task,index) => {
    console.log("task:",index,"被点击了")
    console.log(task)
    if (task.completed) {
        console.log(index)
        task.completed=!task.completed
        const copyTask=JSON.parse(JSON.stringify(task))
        for(let i=0;i<completedTasks.value.length;i++){
            if(completedTasks.value[i].id==task.id){
                completedTasks.value.splice(i,1)
            }
        }
        uncompletedTasks.value.push(copyTask)
        console.log(uncompletedTasks.value)
        console.log(completedTasks.value)
    }
    else {
        console.log(index)
        task.completed=!task.completed
        const copyTask=JSON.parse(JSON.stringify(task))

        for(let i=0;i<uncompletedTasks.value.length;i++){
            if(uncompletedTasks.value[i].id==task.id){
                uncompletedTasks.value.splice(i,1)
            }
        }
        completedTasks.value.push(copyTask)
        console.log(uncompletedTasks.value)
        console.log(completedTasks.value)
    }

    saveTasks()
}
const showAddBlockFn = async () => {
    showAddBlock.value = !showAddBlock.value
    // 使用 nextTick 确保 DOM 更新完成
    await nextTick();
    // 在 DOM 更新后，检查条件并聚焦
    if (showAddBlock.value && taskInput.value) {
      taskInput.value.focus();
    }
}
const showWaitListFn = () => {
    showWaitList.value = !showWaitList.value
}
const addTask = () => {
    if (newTask.value.trim()) {
        uncompletedTasks.value.push({
            id: Date.now(),
            text: newTask.value.trim(),
            completed: false,
            editAble: false,
            indexG: tasks.value.length
        });
        newTask.value = '';
  
        saveTasks();
    }
};

const removeTask = (index, source) => {
    console.log("removeTask")
    console.log(index)
    console.log(source)
    if (source === 'uncompletedTasks') {
        // const task = uncompletedTasks.value[index]
        for(let i=0;i<uncompletedTasks.value.length;i++){
            if(uncompletedTasks.value[i].id==index){
                uncompletedTasks.value.splice(i, 1)
            }
        }
       

    }
    else if (source === 'completedTasks') {
        completedTasks.value.splice(index, 1)

    } else if (source === 'historyTasks') {
        historyTasks.value.splice(index, 1)
    }
    saveTasks();
};

const saveTasks = () => {
    // console.log("保存数据中...")
    // console.log(uncompletedTasks.value)
    localStorage.setItem('vue3-todo-tasks', JSON.stringify(uncompletedTasks.value));
    //合并completedTasks与history的json内容
    const allHistory = historyTasks.value.concat(completedTasks.value)
    // ES6语法
    //   const allHistory=[...historyTasks.value,...completedTasks.value]

    window.electronAPI.updateHistoryJson(JSON.stringify(allHistory))
    // localStorage.setItem('vue3-todo-tasks-history', JSON.stringify(allHistory));
};
const onDragEnd = () => {
    saveTasks()
}
const loadTasks = async () => {
    const savedTasks = localStorage.getItem('vue3-todo-tasks');

    // 使用promise必须使用async，等待同步获取数据
    const myHistory = await axios.get("history.json")

    // console.log("mytest:",myHistory.data)

    // console.log("myHistory",myHistory)

    if (savedTasks) {
        const tasksTest = JSON.parse(savedTasks);
        tasks.value = Object.values(tasksTest)
        const myUncompletedTasks = tasks.value.filter(task => !task.completed);
        const copyDeepMyUncompetedTasks = JSON.parse(JSON.stringify(myUncompletedTasks));
        uncompletedTasks.value = copyDeepMyUncompetedTasks;
        const myCompletedTasks = tasks.value.filter(task => task.completed);
        const copyDeepMyCompletedTasks = JSON.parse(JSON.stringify(myCompletedTasks));
        completedTasks.value = copyDeepMyCompletedTasks;
    }
    if (myHistory) {

        historyTasks.value = myHistory.data
        console.log("history", historyTasks.value)

    }
};
const updateHeight = () => {
    const height = document.body.clientHeight;
    window.electronAPI.resizeWindow(height)
};
const changeTransparetColor = (transparetColor) => {
    defaultBackgroundColor.value = {
        backgroundColor: `hsl(0, 3%, 94%,${transparetColor})`
    }
    localStorage.setItem('vue3-todo-transparentColor', transparetColor);
}
const handleKeydown = (event) => {
    if (event.key === 'Escape' && showAddBlock.value === true) {
        showAddBlock.value = false
    } else if (event.key === 'Escape' && showAddBlock.value === false) {
        quitAll()
    }
}
onMounted(async () => {
    //挂载键盘ESC监听
    window.addEventListener('keydown', handleKeydown);

    // let transparetColor=0.9;
    // defaultBackgroundColor.value={
    //       backgroundColor: `hsl(0, 3%, 94%,${transparetColor})`
    // }
    //获取透明样式
    if (localStorage.getItem('vue3-todo-transparentColor')) {
        changeTransparetColor(localStorage.getItem('vue3-todo-transparentColor'))
    } else {
        changeTransparetColor("1")
    }
    console.log("透明度")
    console.log(localStorage.getItem('vue3-todo-transparentColor'))

    // changeTransparetColor(localStorage.getItem('vue3-todo-transparentColor')? localStorage.getItem('vue3-todo-transparentColor'):transparetColor)
    //监听透明样式变更
    window.electronAPI.sendTransparentColor((color) => {
        console.log("监听透明度变更")
        console.log(color)
        changeTransparetColor(color)
    })


    //加载任务到列表
    await loadTasks();
    //监听容器大小变更
    const resizeObserver = new ResizeObserver(entries => {
        const entry = entries[0];
        if (entry) {
            const contentHeight = entry.contentRect.height;
            window.electronAPI.resizeWindow(contentHeight + 20)
        }
    });

    // 监听目标容器（如 #app）
    resizeObserver.observe(document.getElementsByClassName('todo-app')[0]);
});
onUnmounted(() => {
    resizeObserver.disconnect()
    saveTasks()
})
onBeforeUnmount(() => {
    window.removeEventListener('keydown', handleKeydown)
    saveTasks()
})
//写一个函数，获取当前窗口高度
const getWindowHeight = () => {
    return window.innerHeight;
}






</script>

<style scoped>
/* 自定义内容 */
.selectContainerClass {
    max-height: 500px;
    overflow-y: auto;

}

.container::-webkit-scrollbar {
    width: 10px;

}


.selectContainerClass::-webkit-scrollbar {

    width: 5px;
    height: 1px;
}

.selectContainerClass::-webkit-scrollbar-track {
    background-color: transparent;
}

.selectContainerClass::-webkit-scrollbar-thumb {
    position: fixed;
    border-radius: 5px;
    /* 滚动条样式 */
    -webkit-box-shadow: solid 0 0 1px rgb(0, 119, 255);
    background-color: rgba(172, 187, 211, 0.397);
    /* 滚动条颜色 */
}

.selectContainerClass::-webkit-scrollbar-thumb:hover {
    background-color: #87addf;
}


.mainColor {
    color: #00a2ff;

}

.mainButton {
    background-color: transparent;
    border: none;



}

.mainButton:hover {
    background-color: rgb(230, 230, 230);
}

:deep(.inputSet .el-textarea__inner) {
    background-color: var(--defaultBackgroundColor);
    /* 文本颜色 */
    width: 95%;

}

.showWaitListClass {
    padding: 10px;
    border-radius: 10px;
}

.showWaitListClass:hover {
    background-color: rgb(230, 230, 230);
}

/* :deep(.inputSet) */

/* ai内容 */
:root {
    --color-indigo: #6366f1;
    --color-indigo-light: #818cf8;
    --color-gray-light: #94a3b8;
    --color-gray-lighter: #e2e8f0;
    --color-gray-bg: #f8fafc;
    --color-text: #1e293b;
    --color-white: #ffffff;
    --shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
}

.todo-app {

    display: flex;
    flex-direction: column;
    align-items: center;

    /* background-color: var(--color-gray-bg); */
    color: var(--color-text);
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.5;
}

.container {
    width: 449px;
    display: flex;
    flex-direction: column;
    align-items: center;


}


.title {
    width: 90%;
    font-weight: 700;
    text-align: center;

    color: var(--color-indigo);
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: hsl(0, 3%, 94%);
    border-radius: 10px;

    padding: 10px;

}

.title i {
    margin-right: 8px;
}

.input-container {
    background-color: hsl(0, 3%, 94%);
    border-radius: 10px;
    box-shadow: var(--shadow-sm);
    padding: 10px;
    margin-top: 24px;

    width: 90%;
}

.flex-input {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.input-wrapper {
    display: flex;
    flex-direction: column;
    padding-left: 30px;
    margin-bottom: 20px;

}

.tasks-container {
    margin-top: 24px;
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    background-color: hsl(0, 3%, 94%);
    border-radius: 10px;
    box-shadow: var(--shadow-sm);
    padding: 10px;


}

.todo-card {
    transition: all 0.3s ease;
    box-shadow: var(--shadow-sm);
    background-color: var(--color-white);
    border-radius: 0.5rem;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.todo-card:hover {
    background-color: rgb(255, 255, 255);
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
}

.task-row {
    display: flex;
    align-items: center;
}

.task-row .el-checkbox {
    margin-right: 12px;
}

.completed {
    text-decoration: line-through;
    color: var(--color-gray-light);
}

.empty-state {
    text-align: center;
    padding: 32px 0;
    color: var(--color-gray-light);
    width: 100%;
    background-color: var(--color-white);
    border-radius: 0.5rem;
    box-shadow: var(--shadow-sm);
    margin-top: 12px;
}

.empty-state i {
    font-size: 2.25rem;
    margin-bottom: 8px;
    color: var(--color-indigo-light);
}

.stats {

    color: var(--color-gray-light);
    text-align: center;
    width: 100%;

    background-color: var(--color-white);
    border-radius: 0.5rem;
    box-shadow: var(--shadow-sm);
}

.footer {
    margin-top: 48px;
    font-size: 0.875rem;
    color: var(--color-gray-light);
    text-align: center;
}

.footer a {
    color: var(--color-indigo);
    text-decoration: none;
    transition: all 0.3s ease;
}

.footer a:hover {
    color: var(--color-indigo-light);
    text-decoration: underline;
}

.footer p:first-child {
    margin-bottom: 4px;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateX(20px);
}

@media (max-width: 480px) {
    .todo-app {
        padding: 32px 12px;
    }

    .title {
        font-size: 1.5rem;
    }

    .input-container {
        padding: 16px;
    }

    .todo-card {
        padding: 12px;
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
    }

    .task-row {
        width: 100%;
    }

    .el-button {
        align-self: flex-end;
    }
}
</style>