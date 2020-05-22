<template>
    <div>
        <Son :name="name" :age="age" :change="change" @show="onShow"/>
        <div class="hidden" v-if="isShow">这是由子组件控制是否显示的区域</div>
    </div>
</template>

<script>
import Son from "./Son"

export default {
    components: {Son},
    data() {
        return {
            name: "tonny",
            age: 18,
            isShow: false
        }
    },
    methods: {
        change () {
            this.age = 16;
        },
        onShow () {
            this.isShow = true;
        }
    }
}
</script>