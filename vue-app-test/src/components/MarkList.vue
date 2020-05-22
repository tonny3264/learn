<template>
    <div>
        <input type="text" v-model="current">
        <button @click="onClick">添加</button>
        <ul>
            <li class="data"
                v-for="(item, index) in items"
                :key="index"
            >{{ item }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            current: "",
            items: []
        }
    },
    methods: {
        onClick(){
            this.items.push(this.current);
            this.current = "";
        }
    }
}
</script>