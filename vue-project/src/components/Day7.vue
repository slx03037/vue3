<template>
    <div class="app">
        <h1>vue3 TodoList</h1>

        <TodoInput @add="addTodo" />

        <div v-if="filteredTodos.length > 0" class="todo-toolbar">
            <label>
                <input type="checkbox" v-model="allCompleted" @change="toggleAll"/>
                 全选
            </label>
            <span>剩余{{activeCount}}项</span>
        </div>
        <ul class="todo-list">
            <TodoItem 
             v-for="todo in filteredTodos"
             :key="todo.id"
             :todo="todo"
             @toggle="toggleTodo"
             @remove="removeTodo"
             @update="updateTodo"
            ></TodoItem>
        </ul>

        <p v-if="filteredTodos.length === 0" class="empty">
            {{ filter === 'all' ? '暂无待办事项，添加一个吧！' : '该分类下暂无事项'}}
        </p>

        <div class="filters">
            <button
              v-for="f in filters"
              :ket="f.key"
              :class="{active:filter===f.key}"
              @click="filter=f.key"
            >
                {{f.label}}
            </button>
            <button class="clear-btn" @click="clearCompleted">清除已完成</button>
        </div>

        <div v-if="filter === 'all' && activeCount > 0">
            <button class="clear-btn" @click="clearCompleted">清除已完成</button>
        </div>
    </div>
</template>



<script setup lang="ts">
import { onMounted } from 'vue';
import TodoInput from '@/components/day7/TodoInput.vue';
import TodoItem from '@/components/day7/TodoItem.vue';
import { useTodos } from '@/composables/useTodos';
import type { FilterType } from '@/types/todo';

const {
  filteredTodos,
  activeCount,
  allCompleted,
  filter,
  addTodo,
  toggleTodo,
  removeTodo,
  updateTodo,
  clearCompleted,
  toggleAll
} = useTodos()


const filters: { key: FilterType; label: string }[] = [
  { key: 'all', label: '全部' },
  { key: 'active', label: '未完成' },
  { key: 'completed', label: '已完成' },
]

onMounted(() => {
  console.log('TodoList 应用已挂载')
})

</script>

<style scoped>
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: #f5f5f5;
  margin: 0;
  padding: 40px 20px;
}
.app {
  max-width: 500px;
  margin: 0 auto;
  background: white;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
h1 {
  text-align: center;
  color: #42b883;
}
.todo-list {
  list-style: none;
  padding: 0;
  margin: 0 0 16px;
}
.todo-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 2px solid #42b883;
  margin-bottom: 8px;
}
.empty {
  text-align: center;
  color: #999;
  padding: 20px 0;
}
.filters {
  display: flex;
  gap: 8px;
  justify-content: center;
  flex-wrap: wrap;
}
.filters button {
  padding: 4px 12px;
  border: 1px solid #ddd;
  background: white;
  border-radius: 4px;
  cursor: pointer;
}
.filters button.active {
  background: #42b883;
  color: white;
  border-color: #42b883;
}
.clear-btn {
  color: #ff6b6b;
}
</style>