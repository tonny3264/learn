import {mount} from "@vue/test-utils"
import {expect} from "chai"
import HelloWorld from "@/components/HelloWorld"

describe("HelloWord组件测试", () => {
    it("测试msg是否成功渲染", () => {
        const msg = "hello world";
        const wrapper = mount(HelloWorld, {
            propsData: {msg}
        });
        // wrapper.setProps({msg});
        const text = wrapper.find("h1").text();
        expect(text).to.be.include(msg);
    })
})