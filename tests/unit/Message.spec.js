import { mount } from "@vue/test-utils";
import MyMessage from "@/components/MyMessage.vue";

describe("MyMessage.vue", () => {
  it("renders props.msg when passed", () => {
    const wrapper = mount(MyMessage, {
      props: {
        msg: "Hello Friends",
      },
    });
    expect(wrapper.text()).toContain("Hello Friends");
  });
});
