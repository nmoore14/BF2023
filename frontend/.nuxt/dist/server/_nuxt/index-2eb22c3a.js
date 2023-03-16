import { _ as _export_sfc, b as __nuxt_component_0 } from "../server.mjs";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "@unhead/vue";
import "@unhead/dom";
import "@unhead/ssr";
import "vue-router";
import "h3";
import "ufo";
import "defu";
const index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex col justify-center items-center w-full h-screen page-login-registration" }, _attrs))}><main class="w-full flex col justify-center items-center my-1 px-2"><div class="flex row wrap justify-center items-center w-full login-register"><div class="flex col nowrap justify-center items-center login"><h1 class="title">Log in</h1><p class="body-info">Coming Soon!</p><input type="email" placeholder="Email" disabled><input type="password" placeholder="Password" disabled><br><button disabled>log in</button></div><div class="flex col nowrap justify-center items-center register"><i class="fas fa-user-plus fa-5x"></i><h2 class="title">Need to Register</h2><p class="body-text"> Click below to join the 2023 Business Spring Forum </p>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "btn btn-primary-ghost-2 register-button",
    to: "https://forms.office.com/Pages/ResponsePage.aspx?id=CPzRDz30G0y9DxepEopgpG3nmk7_2ydOpOrJoTtHpbZURTNaQUQ5VUpaN0oySFpUT1RFN0dLTUJLTi4u",
    target: "_blank"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Register `);
      } else {
        return [
          createTextVNode(" Register ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></main></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/loginRegister/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  index as default
};
//# sourceMappingURL=index-2eb22c3a.js.map
