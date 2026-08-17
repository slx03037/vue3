<template>
  <div>
    <h1>Define Parent Props</h1>
    <DefineChildProps
      :name="name"
      :age="age"
      :email="email"    
    />
  </div>
</template>

<script>
import DefineChildProps from './DefineChildProps.vue';

export default {
  name: 'DefineParentProps',
  components: {
    DefineChildProps,
  },
  data() {
    return {
      name: 'John',
      age: 30,
      email: 'john@example.com',
    };
  },
};
</script>