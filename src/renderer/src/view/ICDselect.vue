<template>
    <div class="todo-app">
        <div class="container">
            <div class="title" :style="defaultBackgroundColor" style="app-region: drag;">
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
                                @keyup.enter="addTask"></el-input>
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
                    <div style="font-size: 20px;font-weight: 700; padding-left: 30px; border-left: 4px solid #00a2ff;">
                        <span v-if="showSelect">全部待办</span>
                        <span v-else>历史记录</span>
                    </div>
                    <div v-if="(tasks.length === 0)&showSelect" class="empty-state">
                        <i class="fas fa-inbox"></i>
                        <p>暂无任务，添加一个吧~</p>
                    </div>

                    <div class="selectContainerClass" v-if="showSelect">


                        <div v-for="(task, index) in uncompletedTasks" :key="task.id">
                            <div class="todo-card">
                                <div class="task-row" style="flex: 1;">
                                    <el-checkbox v-model="task.completed" @change="saveTasks"></el-checkbox>
                                    <span :class="{ 'completed': task.completed }" style="flex: 1;"
                                        @click="setTask(task)">{{ task.text }}</span>
                                </div>
                                <div>
                                    <el-button type="primary" plain size="small"
                                        @click="changeTask(index, 'uncompletedTasks')" circle>


                                        <Edit v-if="!task.editAble" style="width: 15px;" />
                                        <Right v-else style="width: 15px;" />
                                    </el-button>
                                    <el-button type="danger" plain size="small"
                                        @click="removeTask(index, 'uncompletedTasks')" circle>


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
                        <!-- 去除的任务清单 -->
                        <div v-for="(task, index) in completedTasks" :key="task.id">
                            <div class="todo-card">
                                <div class="task-row" style="flex: 1;">
                                    <el-checkbox v-model="task.completed" @change="saveTasks"></el-checkbox>
                                    <span :class="{ 'completed': task.completed }" style="flex: 1;"
                                        @click="setTask(task)">{{ task.text }}</span>
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
                    <div class="selectContainerClass historyContainerClass" v-else>
                        <div v-for="(task, index) in historyTasks" :key="task.id">
                            <div class="todo-card">
                                <div class="task-row" style="flex: 1;">
                                    <!-- <el-checkbox v-model="task.completed" @change="saveTasks"></el-checkbox> -->
                                    <span :class="{ 'completed': task.completed }" style="flex: 1;">{{ task.text
                                        }}</span>
                                </div>
                                <div>

                                    <el-button type="danger" plain size="small"
                                        @click="removeTask(index, 'uncompletedTasks')" circle>


                                        <Delete style="width: 15px;" />
                                    </el-button>


                                </div>

                            </div>



                        </div>
                    </div>
                    <div v-if="tasks.length > 0" class="stats">
                        已完成 {{ completedCount }} / {{ tasks.length }}
                    </div>
                    <div style="display: flex; justify-content: flex-end; position: relative; right: 10px;">
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
import { defineComponent, ref, computed, onMounted, onUnmounted } from 'vue';
import { Delete, Edit, Document, Plus, Search, List, Setting, Right, Select, CloseBold, Back } from '@element-plus/icons-vue'


const showAddBlock = ref(false)
const showWaitList = ref(true)
const showSelect = ref(true)
const defaultBackgroundColor = ref({})

const changeSelectShow = () => {
    showSelect.value = !showSelect.value
}

const setDialogVisible = () => {
    window.electronAPI.getSetting()
}
const newTask = ref('');
const tasks = ref([]);
const historyTasks=ref([])

const changeTask = (index, source) => {
    if (source === 'uncompletedTasks') {
        let task = uncompletedTasks.value[index];
        task.editAble = !task.editAble;
    }
    else {
        let task = completedTasks.value[index];
        task.editAble = !task.editAble;
    }


}
//使用computed过滤完成的任务
const completedTasks = computed(() => {
    return tasks.value.filter(task => task.completed);
});
//使用computed过滤未完成的任务
const uncompletedTasks = computed(() => {
    return tasks.value.filter(task => !task.completed);
});

//缩略到小任务栏里
const quitAll = async () => {
    await window.electronAPI.closeWin()
}
const completedCount = computed(() => {
    return tasks.value.filter(task => task.completed).length;
});
//文字被点击
const setTask = (task) => {
    task.completed = !task.completed
    saveTasks()

}
const showAddBlockFn = () => {
    showAddBlock.value = !showAddBlock.value
}
const showWaitListFn = () => {
    showWaitList.value = !showWaitList.value
}
const addTask = () => {
    if (newTask.value.trim()) {
        tasks.value.push({
            id: Date.now(),
            text: newTask.value.trim(),
            completed: false,
            editAble: false,
            indexG: tasks.value.length
        });
        newTask.value = '';
        console.log(tasks.value)
        saveTasks();
    }
};

const removeTask = (index, source) => {
    console.log(source)
    if (source === 'uncompletedTasks') {
        // uncompletedTasks.value.splice(index, 1);
        const task = uncompletedTasks.value[index]
        console.log(task)
        if (task.indexG) {
            tasks.value.splice(task.indexG, 1)
        } else {
            for (let i = 0; i < tasks.value.length; i++) {
                console.log(task)
                if (tasks.value[i]['id'] === task['id']) {
                    tasks.value.splice(i, 1)
                    // console.log
                }
            }
        }


    }
    else {
        const task = completedTasks.value[index]
        console.log(task)
        if (task.indexG) {
            tasks.value.splice(task.indexG, 1)
        } else {
            for (let i = 0; i < tasks.value.length; i++) {
                if (tasks.value[i]['id'] === task['id']) {
                    tasks.value.splice(i, 1)
                    // console.log
                }
            }
        }
    }
    saveTasks();
};

const saveTasks = () => {
    localStorage.setItem('vue3-todo-tasks', JSON.stringify(uncompletedTasks.value));
    //合并completedTasks与history的json内容
    const allHistory=historyTasks.value.concat(completedTasks.value)
    // ES6语法
    //   const allHistory=[...historyTasks.value,...completedTasks.value]

    
    console.log(allHistory)
    console.log(historyTasks.value)



    localStorage.setItem('vue3-todo-tasks-history', JSON.stringify(allHistory));
};

const loadTasks = () => {
    const savedTasks = localStorage.getItem('vue3-todo-tasks');
    const myHistory=localStorage.getItem('vue3-todo-tasks-history')
    if (savedTasks) {
        console.log(myHistory)
        const tasksTest = JSON.parse(savedTasks);
        tasks.value=Object.values(tasksTest)
        console.log(tasks.value)

        
    }
    if(myHistory){
        const historyTest=JSON.parse(myHistory)
        historyTasks.value=Object.values(historyTest)
        console.log(historyTasks.value)
    }
};
const updateHeight = () => {
    const height = document.body.clientHeight;
    console.log(height)

    window.electronAPI.resizeWindow(height)
};
const changeTransparetColor = (transparetColor) => {
    defaultBackgroundColor.value = {
        backgroundColor: `hsl(0, 3%, 94%,${transparetColor})`
    }
    localStorage.setItem('vue3-todo-transparentColor', JSON.stringify(transparetColor));
}

onMounted(() => {
    // let transparetColor=0.9;
    // defaultBackgroundColor.value={
    //       backgroundColor: `hsl(0, 3%, 94%,${transparetColor})`
    // }
    //获取透明样式
    if (localStorage.getItem('vue3-todo-transparentColor')) {
        changeTransparetColor(localStorage.getItem('vue3-todo-transparentColor'))
    } else {
        changeTransparetColor(1)
    }
    console.log(localStorage.getItem('vue3-todo-transparentColor'))

    // changeTransparetColor(localStorage.getItem('vue3-todo-transparentColor')? localStorage.getItem('vue3-todo-transparentColor'):transparetColor)
    //监听透明样式变更
    window.electronAPI.sendTransparentColor((color) => {
        console.log(color)

        changeTransparetColor(color)
    })


    //加载任务到列表
    loadTasks();
    //监听容器大小变更
    const resizeObserver = new ResizeObserver(entries => {
        const entry = entries[0];
        if (entry) {
            const contentHeight = entry.contentRect.height;
            // window.ipcRenderer.send('resize-window', contentHeight);
            console.log(contentHeight)
            window.electronAPI.resizeWindow(contentHeight + 20)
        }
    });

    // 监听目标容器（如 #app）
    resizeObserver.observe(document.getElementsByClassName('todo-app')[0]);
    // window.addEventListener('resize', updateHeight);
});

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
    width: 448px;
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
    background-color: rgb(230, 230, 230);
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