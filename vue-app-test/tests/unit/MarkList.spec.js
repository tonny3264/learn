import MarkList from "@/components/MarkList"
import { mount } from "@vue/test-utils"
import { expect } from "chai"

describe("MarkList.vue", () => {
    it("测试默认输入框数据为空, current为空, items为空", () => {
        const wrapper = mount(MarkList);
        const vm = wrapper.vm;
        expect(vm.current).to.be.equal("");
        expect(wrapper.find("input").element.value).to.be.equal("");
        expect(vm.items).to.be.lengthOf(0);
    });
    
    it("测试双向绑定", () => {
        const val = "test"
        const wrapper = mount(MarkList);
        wrapper.find("input").setValue(val);
        expect(wrapper.vm.current).to.be.equal(val);
    });

    it("测试点击渲染", () => {
        const val = "test"
        const wrapper = mount(MarkList);
        wrapper.find("input").setValue(val);
        const btn = wrapper.find("button");
        btn.trigger("click");
        console.log(wrapper.vm.items.length);
        // expect(wrapper.vm.items.length).to.be.equal(wrapper.findAll("li").length);
        expect(wrapper.vm.current).to.be.equal("");
    })
})