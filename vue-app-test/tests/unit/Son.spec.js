import Son from "@/components/Son"
import { mount } from "@vue/test-utils"
import { expect } from "chai"
import sinon from "sinon"

describe("Son.vue", () => {
    it("按钮点击函数是否被调用", () => {
        const spy = sinon.spy();
        const wapper = mount(Son);
        wapper.setProps({change: spy});
        wapper.findAll("button").at(1).trigger("click");
        expect(spy.called).to.be.true;
    });
    it("是否正常渲染文本", () => {
        const name = "timo";
        const age = 20;
        const wapper = mount(Son, {
            propsData: {name, age}
        });
        // wapper.setProps({name, age}); 不生效, 搞不懂
        expect(wapper.findAll("h4").at(0).text()).to.be.include(name);
        expect(wapper.findAll("h4").at(1).text()).to.be.include(age);
    })
})