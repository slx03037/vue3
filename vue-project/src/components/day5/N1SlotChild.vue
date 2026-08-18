<!-- 插槽用于父组件向子组件传递模板内容，实现组件内容的灵活分发。 -->
 <template>
    <div class="card">
        <h3>子组件</h3>
        <div class="card-header">卡片标题</div>
        <div class="card-body">
            <slot>默认内容(父组件没传时显示)</slot>
        </div>
    </div>
 </template>