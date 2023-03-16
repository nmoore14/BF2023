import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
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
const _imports_0 = "" + __publicAssetsURL("images/speakers/JohnstonBarbara_Pic.jpg");
const BarbaraJohnston_vue_vue_type_style_index_0_scoped_b48cfaf5_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex col justify-center items-center w-full h-full page" }, _attrs))} data-v-b48cfaf5><main class="flex col justify-center items-center w-full h-full my-1 px-2" data-v-b48cfaf5><div class="flex col nowrap justify-center items-center w-full speaker-details" data-v-b48cfaf5><div class="flex col nowrap justify-center items-center w-full speaker-display" data-v-b48cfaf5><h1 class="brand text-center" data-v-b48cfaf5>Ms. Barbara Johnston</h1><img${ssrRenderAttr("src", _imports_0)} alt="Image of Ms. Barbara Johnston" data-v-b48cfaf5><h2 class="title-info speaker-title" data-v-b48cfaf5>Creative Director</h2><h2 class="sub-title-info speaker-company" data-v-b48cfaf5>IDEA Johnston</h2></div><div class="speaker-content" data-v-b48cfaf5><p class="body-text" data-v-b48cfaf5> Johnston has enjoyed a 35-year career in marketing. She has worked on the creative and business aspects of brand development, consumer packaging, and product launches. </p><p class="body-text" data-v-b48cfaf5> Her clients have included M&amp;M/Mars, Campbell&#39;s Soup, and HBO. Johnston has managed creative teams and developed quotes and timelines. She is also experienced at writing proposal responses. </p><p class="body-text" data-v-b48cfaf5> Johnston is now invested in her ongoing projects for long-term clients—everything from pet salon products to legal symposium materials—while fixing up an old farmhouse with her husband, riding motorcycles, and taking in abandoned pets. </p><p class="body-text" data-v-b48cfaf5> Most of all, she appreciates the opportunity to explore the truly beautiful state of Kentucky, where she now resides. </p></div></div></main></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/speakers/BarbaraJohnston.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BarbaraJohnston = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b48cfaf5"]]);
export {
  BarbaraJohnston as default
};
//# sourceMappingURL=BarbaraJohnston-43f67d04.js.map
