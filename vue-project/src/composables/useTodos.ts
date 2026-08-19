// 自定义 Hook（抽离逻辑）
import { ref,computed, watch } from 'vue';
import { Todo } from '@/types/todo';

const STORAGE_KEY = 'vue3-todos';

