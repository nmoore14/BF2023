import { mergeProps, useSSRContext } from 'file:///Users/nickmoore_rush/Desktop/projects/school/bf2023/frontend/node_modules/.pnpm/vue@3.2.47/node_modules/vue/index.mjs';
import { ssrRenderAttrs } from 'file:///Users/nickmoore_rush/Desktop/projects/school/bf2023/frontend/node_modules/.pnpm/vue@3.2.47/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex col justify-center items-center w-full h-full page" }, _attrs))}><main class="w-full flex col justify-center items-center my-1 px-2"><h1 class="title">FAQ</h1></main></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/faq/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-3ee53534.mjs.map
