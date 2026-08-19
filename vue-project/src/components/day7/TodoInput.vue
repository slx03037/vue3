<!-- 输入组件 -->
 <template>
    <div class="todo-input">
        <input 
        type="text" 
        placeholder="请输入待办事项" 
        v-model="inputText"
        @keyup.enter="handleSubmit"
        />
        <button @click="handleSubmit">添加</button>
    </div>
 </template>


<script setup lang="ts">
import { ref } from 'vue';
const inputText=ref('')
const emit=defineEmits<{
    (event: 'add', value: string): void
}>()
function handleSubmit(){
    if(inputText.value){
        emit('add',inputText.value)
        inputText.value=''
    }
}
</script>

<style scoped>
.todo-input {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}
.todo-input input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.todo-input button {
  padding: 8px 16px;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>