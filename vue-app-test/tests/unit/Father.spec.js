// 监测事件断言, shallowMount(不用渲染子组件, 有子组件的时候使用)的应用
import Father from "@/components/Father"
import { shallowMount, mount } from "@vue/test-utils"
import { expect } from "chai"
import Son from "@/components/Son"

describe("Father.vue", () => {
    it("change测试", () => {
        const wrapper = shallowMount(Father);
        wrapper.vm.change();
        expect(wrapper.vm.age).to.be.equal(16);
    });
    it("检测隐藏模块功能是否正常", () => {
        const wrapper = shallowMount(Father);
        // console.log(wrapper.text()); // 检查是否渲染子组件
        expect(wrapper.find(".hidden").exists()).to.be.false;
        // wrapper.find(Son).vm.$emit("show");
        wrapper.vm.isShow = true;
        console.log(wrapper.vm.isShow );
        expect(wrapper.find(".hidden").exists()).to.be.true;
    })
})