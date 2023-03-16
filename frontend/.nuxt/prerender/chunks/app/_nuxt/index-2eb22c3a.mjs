import { _ as _export_sfc, b as __nuxt_component_0$1 } from '../server.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'file:///Users/nickmoore_rush/Desktop/projects/school/bf2023/frontend/node_modules/.pnpm/vue@3.2.47/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///Users/nickmoore_rush/Desktop/projects/school/bf2023/frontend/node_modules/.pnpm/vue@3.2.47/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/nickmoore_rush/Desktop/projects/school/bf2023/frontend/node_modules/.pnpm/ofetch@1.0.1/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/nickmoore_rush/Desktop/projects/school/bf2023/frontend/node_modules/.pnpm/hookable@5.4.2/node_modules/hookable/dist/index.mjs';
import 'file:///Users/nickmoore_rush/Desktop/projects/school/bf2023/frontend/node_modules/.pnpm/unctx@2.1.2/node_modules/unctx/dist/index.mjs';
import 'file:///Users/nickmoore_rush/Desktop/projects/school/bf2023/frontend/node_modules/.pnpm/@unhead+vue@1.0.22_vue@3.2.47/node_modules/@unhead/vue/dist/index.mjs';
import 'file:///Users/nickmoore_rush/Desktop/projects/school/bf2023/frontend/node_modules/.pnpm/@unhead+dom@1.0.22/node_modules/@unhead/dom/dist/index.mjs';
import 'file:///Users/nickmoore_rush/Desktop/projects/school/bf2023/frontend/node_modules/.pnpm/@unhead+ssr@1.0.22/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Users/nickmoore_rush/Desktop/projects/school/bf2023/frontend/node_modules/.pnpm/vue-router@4.1.6_vue@3.2.47/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/nickmoore_rush/Desktop/projects/school/bf2023/frontend/node_modules/.pnpm/h3@1.5.0/node_modules/h3/dist/index.mjs';
import 'file:///Users/nickmoore_rush/Desktop/projects/school/bf2023/frontend/node_modules/.pnpm/ufo@1.1.0/node_modules/ufo/dist/index.mjs';
import 'file:///Users/nickmoore_rush/Desktop/projects/school/bf2023/frontend/node_modules/.pnpm/defu@6.1.2/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/nickmoore_rush/Desktop/projects/school/bf2023/frontend/node_modules/.pnpm/node-fetch-native@1.0.2/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/nickmoore_rush/Desktop/projects/school/bf2023/frontend/node_modules/.pnpm/destr@1.2.2/node_modules/destr/dist/index.mjs';
import 'file:///Users/nickmoore_rush/Desktop/projects/school/bf2023/frontend/node_modules/.pnpm/unenv@1.2.1/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/nickmoore_rush/Desktop/projects/school/bf2023/frontend/node_modules/.pnpm/scule@1.0.0/node_modules/scule/dist/index.mjs';
import 'file:///Users/nickmoore_rush/Desktop/projects/school/bf2023/frontend/node_modules/.pnpm/ohash@1.0.0/node_modules/ohash/dist/index.mjs';
import 'file:///Users/nickmoore_rush/Desktop/projects/school/bf2023/frontend/node_modules/.pnpm/unstorage@1.1.5/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/nickmoore_rush/Desktop/projects/school/bf2023/frontend/node_modules/.pnpm/unstorage@1.1.5/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/nickmoore_rush/Desktop/projects/school/bf2023/frontend/node_modules/.pnpm/radix3@1.0.0/node_modules/radix3/dist/index.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
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

export { index as default };
//# sourceMappingURL=index-2eb22c3a.mjs.map
