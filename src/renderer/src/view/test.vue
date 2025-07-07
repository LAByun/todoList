<template>
<div>
    <!--写一个el表格测试-->

    <el-table
    :data="tableData"
    style="width: 100%"
    ref="tableRef"
  >
    <el-table-column
      prop="date"
      label="日期"
      width="180"
    >
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180"
    >
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
    >
    </el-table-column>
        <el-table-column
      prop="address"
      label="a地址"
    >
    </el-table-column>

    <el-table-column label="操作">
    <template #default="tt"> <!-- 关键：解构获取 row -->
      <el-button @click="handleEdit(tt)">编辑</el-button>
    </template>
    </el-table-column>
  </el-table>
  <div ref="testRef" @click="testti" style="">
    <span>dd</span>
    <el-button>新增</el-button>
       <span>dd</span>
    <el-button>新增</el-button>   <span style="align-self: center;">dd</span>
    <el-button>新增</el-button>   <span>dd</span>
    <el-button>新增</el-button>   <span>dd</span>
    <el-button>新增</el-button>   <span>dd</span>
    <el-button>新增</el-button>    <span>dd</span>
    <el-button>新增</el-button>
       <span>dd</span>
    <el-button>新增</el-button>   <span>dd</span>
    <el-button>新增</el-button>   <span>dd</span>
    <el-button>新增</el-button>   <span>dd</span>
    <el-button>新增</el-button>   <span>dd</span>
    <el-button>新增</el-button>    <span>dd</span>

  </div>
  <div style="white-space: pre-wrap;">
{{ myData }}
  </div>
  <el-input v-model="list['c'+list1['a']].b.c" style="width: 50%;"></el-input>

</div>
</template>
<script setup lang="ts">

import { ref,onMounted,nextTick } from 'vue';
const testRef = ref(null)
const tableRef=ref([])
const dd="hello"
const list={
  "ca":{
    "b":{
      "c":"123"

    }
  }
}
const list1={
  "a":"a"
}
const list2={
  "b":"a"
}
const list3={
  "c":"b"
}
const myData=ref(`dada
dd"dd"
yewe
${dd+dd+`dad`}
${list.ca.b.c}可以通过“.”调用
${list["ca"]["b"]["c"]}可以通过“[]”调用
${list[`c${list1[`${list2[`${list3["c"]}`]}`]}`]["b"]["c"]}三重嵌套调用测试
${list["c"+list1[list2[list3["c"]]]]["b"]["c"]}去除$依旧可行
${list["c"+`${(()=>{
  if((9>5)){
    console.log(9)
    const t=()=>{
      return "d"
    }
    t()
    const message=`adda${t()}`
    return "a"
  }else{
    return "b"
  }
  
})()}`]["b"]["c"]}直接进行函数调用
${list2.b}
${list3.c}
`)


const tableData = ref([
    {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    },
    {
      date: '2016-05-04',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1517 弄'
    },
])
function handleEdit(row){
    console.log(row)
}

function testti(){
    nextTick(()=>{

    console.log(tableRef.value.columns)
    })
        nextTick(()=>{

    console.log(tableRef.value.columns)
    })
}
onMounted(() => {
  console.log(testRef.value)
   console.log(tableRef.value)
  console.log(tableRef.value.data)
    console.log(tableRef.value.columns)

})
</script>
<style>
</style>