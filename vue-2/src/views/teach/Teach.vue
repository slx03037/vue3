<template>
  <div>
    <h1>Teach</h1>
    <p>Teach page</p>
  </div>
  <ul>
    <li v-for="teacher in teachArr" :key="teacher.name">
      {{ teacher.name }} - {{ teacher.age }} - {{ teacher.subject }}
      <button @click="goDetail(teacher)">明细</button>
    </li>
  </ul>
</template>    

<script setup lang="ts">

import { useRouter } from "vue-router";
const router =useRouter();

interface Teacher{
  name: string;
  age: number;
  subject: string;
}

const teachArr: Teacher[] = [
  { name: 'John', age: 30, subject: 'Math' },
  { name: 'Jane', age: 25, subject: 'English' },
  { name: 'Bob', age: 35, subject: 'Science' },
];

const goDetail = (teacher: Teacher) => {
  console.log(teacher);

  router.push(
    {   name: 'teachDetail'
        , query: { 
            name: teacher.name,
            age: teacher.age,
            subject: teacher.subject,
        } 
    });
};

</script>


