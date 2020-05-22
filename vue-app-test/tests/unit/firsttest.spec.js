import {add, abs} from "@/utils/test.js"
import {expect} from "chai"

describe("add函数", ()=>{
    it("测试结果", ()=>{
        expect(add(1,2,3)).to.be.equal(6);
    });
});

describe("abs函数", () => {
    it("测试参数类型", () => {
        expect(abs(" ")).to.be.NaN;
    });
    it("测试负数", () => {
        expect(abs(-1)).to.be.equal(1);
    });
    it("测试0", () => {
        expect(abs(0)).to.be.equal(0);
    })
})