<template>
    <!--手动实现了双向绑定，（注意:value = v-bind:value 语法糖）-->
    <input type="text" :value="message" @input="inputChange"/>
    <p>{{ message }}</p>

    <!--v-model 实现双向绑定-->
    <input type="text" v-model="msg"/>
    <p>{{ msg }}</p>


    <!--v-model绑定textarea 绑定表单类型textarea(文本域)-->
    <textarea v-model="text"></textarea>
    <p>{{ text }}</p>

    <!--v-model绑定checkbox-->
    <input type="checkbox" v-model="checked"/>
    <p>{{ checked }}</p>

    <!--v-model绑定radio-->
    <input type="radio" v-model="gender" value="male"/>
    <input type="radio" v-model="gender" value="female"/>
    <p>{{ gender }}</p>

    <!--v-model绑定select-->
    <select v-model="selected">
        <option value="a">A</option>
        <option value="b">B</option>
        <option value="c">C</option>
    </select>
    <p>{{ selected }}</p>
</template>

<script setup lang="ts">
import {ref} from "vue";

const message = ref('hello world')
const inputChange = (event: Event) => {
    message.value = (event.target as HTMLInputElement).value
}

const msg = ref('')

const text = ref('')

const checked = ref(false)

const gender = ref('')

const selected = ref('')
</script>

<style scoped>

</style>