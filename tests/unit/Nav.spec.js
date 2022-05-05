import { mount } from "@vue/test-utils";
import MyNav from "@/components/MyNav.vue";

describe("MyNav.vue", () => {
  it("renders a profile link", () => {
    const wrapper = mount(MyNav, {
      data() {
        return {
          isLoggedIn: true,
        };
      },
    });
    const profileLink = wrapper.get("#profile");
    expect(profileLink.text()).toEqual("My Profile");
  });
  it("should not render a profile link", () => {
    const wrapper = mount(MyNav, {
      data() {
        return {
          isLoggedIn: false,
        };
      },
    });
    const profileLink = wrapper.find("#profile");
    expect(profileLink.exists()).toBe(false);
  });
});
