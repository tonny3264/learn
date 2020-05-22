<template>
    <div>
        <h4>姓名: {{ name }}</h4>
        <h4>年龄: {{ age }}</h4>
        <button @click="onShow">显示</button>
        <button @click="onChange">修改</button>
    </div>
</template>

<script>
export default {
    props: ["name", "age", "change"],
    methods: {
        onShow () {
            this.$emit("show");
        },
        onChange () {
            this.change && this.change();
        }
    }
}
</script>