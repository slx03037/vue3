// 自定义 Hook（抽离逻辑）
import { ref,computed, watch } from 'vue';
import { Todo,FilterType  } from '@/types/todo';

const STORAGE_KEY = 'vue3-todos';

export function useTodos() {
    //从 localStorage 读取初始数据
const loadtodos=():Todo[]=>{
    try{
        const data=localStorage.getItem(STORAGE_KEY);
        return data?JSON.parse(data):[];
    }catch(e){
        return [];
    }
}


const todos=ref<Todo[]>(loadtodos());
const filter=ref<FilterType >('all');

//计算属性:过滤后得列表
const filteredTodos=computed(()=>{
    switch(filter.value){
        case 'active':
             return todos.value.filter(t => !t.completed)
        case 'completed':
            return todos.value.filter(t => t.completed)
        default:
            return todos.value 
    }
})

//计算属性:未完成数量
const activeCount=computed(()=>{
    return todos.value.filter(t => !t.completed).length;
})

//添加代办
function addTodo(text:string){
    const trimmed=text.trim();
    if(!trimmed){
        return;
    }
    todos.value.push({
        id:Date.now(),
        text,
        completed:false,
        createdAt:Date.now()
    })
}

//切换完成状态
function toggleTodo(id:number){
    const todo=todos.value.find(t => t.id === id);
    if(todo){
        todo.completed=!todo.completed;
    }
}

//删除代办
function removeTodo(id:number){
    const index=todos.value.findIndex(t => t.id === id);
    if(index > -1){
        todos.value.splice(index,1);
    }
}

//编辑待办
function updateTodo(id:number,text:string){
    const todo=todos.value.find(t => t.id === id);
    if(todo){
        todo.text=text.trim();
    }
}

//清空已完成
function clearCompleted(){
    //todos.value=[...todos.value.filter(t => !t.completed)]
    todos.value=todos.value.filter(t => !t.completed)
}
//计算属性:是否全部完成
const allCompleted=computed(()=>{
    /**
     * 1.首先检查待办事项列表是否为空（todos.value.length > 0）
     * 2.如果不为空，则使用every方法检查所有待办事项的completed属性是否都为true
     * 3.只有当列表不为空且所有事项都已完成时，才返回true
     */
    return todos.value.length > 0 && todos.value.every(t => t.completed);
})

//全部切换
function toggleAll(){
    const target=!allCompleted.value;
    todos.value.forEach(t => {
        t.completed=target;
    })
}

// 持久化：watch 监听变化自动保存
watch(todos,(newVal)=>{
    localStorage.setItem(STORAGE_KEY,JSON.stringify(newVal));
    },{deep:true
})

return{
    todos,
    filter,
    filteredTodos,
    activeCount,
    allCompleted,
    addTodo,
    toggleTodo,
    removeTodo,
    updateTodo,
    clearCompleted,
    toggleAll
    }
}