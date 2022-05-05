import { mount } from "@vue/test-utils";
import MyParent from "@/components/MyParent.vue";

describe("MyParent.vue", () => {
  it("", () => {
    const wrapper = mount(MyParent);
    expect(wrapper.text()).toContain("Parent");
  });
});
