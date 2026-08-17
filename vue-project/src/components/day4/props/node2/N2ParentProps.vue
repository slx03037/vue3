<template>
    <div>
        <h1>Parent Component</h1>
        <N2ChildProps v-bind="user" />
        <span>姓名:</span>
        <input type="text" v-model="user.name">
        <span>年龄:</span>
        <input type="number" v-model="user.age">
        <span>性别:</span>
        <input type="text" v-model="user.gender">
         <span>爱好:</span>
        <input type="text" v-model="user.hobby">
    </div>
    <!-- <button @click="updateUser">更新</button> -->
</template>

<script setup lang="ts">
    import { ref ,reactive} from 'vue';
import N2ChildProps from  './N2ChildProps.vue';
    interface User {
        name: string,
        age: number,
        gender: string,
        hobby: string
    }
    /**
     *  ref<User>({...}) 返回的是一个包装对象，其类型为 Ref<User>
     *  而 const user: User 声明期望 user 是一个普通的 User 类型对象
     *  这导致了类型不匹配的错误，因为 Ref<User> 类型不包含 User 接口中定义的 name、age、gender、hobby 这些直接属性
     */
    //  const user12 : User= ref<User>({
    //     name: '张三',
    //     age: 18,
    //     gender: '男',
    //     hobby: '篮球'
    // })
    /**
     * 方案1 将 user 的类型改为 Ref<User>
     */
    const user1= ref<User>({
        name: '张三',
        age: 18,
        gender: '男',
        hobby: '篮球'
    })
    
    /**
     * 方案二:使用 reactive 而不是 ref
     */
    const user:User = reactive<User>({
        name: '张三',
        age: 18,
        gender: '男',
        hobby: '篮球'
    })

    // function updateUser() {
    //     console.log(user.value);
    // }
</script>
