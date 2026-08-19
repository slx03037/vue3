<!-- 单项组件（作用域插槽思路） -->
 <template>
    <li class="todo-item" :class="{completed: todo.completed}">
      <input
      type="checkbox"
      :checked="todo.completed"
      @change="emit('toggle', todo.id)"
      />
      <span v-if="!isEditing" class="todo-text" @dblclick="startEdit">
        {{ todo.text }}
      </span>

      <input
      v-else
      ref="inputRef"
      v-model="editText"
      class="edit-input"
      @keyup.enter="finishEdit"
      @keyup.esc="cancelEdit"
      @blur="finishEdit"
      />
      <button class="delete-btn" @click="emit('remove', todo.id)">删除</button>
    </li>
 </template>



<script setup lang="ts">
import { ref, nextTick  } from 'vue';
import type { Todo } from '@/types/todo';

const props = defineProps<{
  todo: Todo
}>()

const emit = defineEmits<{
    (e: 'toggle', id: number): void
    (e: 'remove', id: number): void
    (e: 'update', id: number, text: string): void
}>()

const isEditing=ref(false);
const editText=ref('');
const inputRef=ref<HTMLInputElement | null>(null);

async function startEdit() {
    isEditing.value = true;
    editText.value = props.todo.text;
    await nextTick();// 等待 DOM 更新后聚焦
    inputRef.value?.focus();
}
function finishEdit() {
    if(editText.value.trim()) {
        emit('update', props.todo.id, editText.value)
    }
    isEditing.value = false;
}

function cancelEdit() {
    isEditing.value = false;
}




</script>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 0;
  border-bottom: 1px solid #eee;
}
.todo-item.completed .todo-text {
  text-decoration: line-through;
  color: #999;
}
.todo-text {
  flex: 1;
  cursor: pointer;
}
.edit-input {
  flex: 1;
  padding: 4px 8px;
  border: 1px solid #42b883;
  border-radius: 4px;
}
.delete-btn {
  padding: 4px 8px;
  background: #ff6b6b;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
}
</style>