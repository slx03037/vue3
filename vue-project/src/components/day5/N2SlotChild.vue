<!-- 多个插槽时通过 name 区分，父组件用 v-slot: 或 # 指定插槽名。 -->
<template>
   <div>    
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot></slot> <!-- 默认插槽，name 为 default -->
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
   </div>
</template>