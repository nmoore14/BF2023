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
const _imports_0 = "" + __publicAssetsURL("images/speakers/DavisJeff_Pic.jpg");
const JeffDavis_vue_vue_type_style_index_0_scoped_4ed8f1bd_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex col justify-center items-center w-full h-full page" }, _attrs))} data-v-4ed8f1bd><main class="flex col justify-center items-center w-full h-full my-1 px-2" data-v-4ed8f1bd><div class="flex col nowrap justify-center items-center w-full speaker-details" data-v-4ed8f1bd><div class="flex col nowrap justify-center items-center w-full speaker-display" data-v-4ed8f1bd><h1 class="brand text-center" data-v-4ed8f1bd>Mr. Jeffrey W. Davis</h1><img${ssrRenderAttr("src", _imports_0)} alt="Image of Mr. Jeffrey W. Davis" data-v-4ed8f1bd><h2 class="title-info speaker-title" data-v-4ed8f1bd> Business Development and Commercial Training Director </h2><h2 class="sub-title-info speaker-company" data-v-4ed8f1bd> Interplastic Corporation/North American Composites </h2></div><div class="speaker-content" data-v-4ed8f1bd><p class="body-text" data-v-4ed8f1bd> Davis has held many executive positions throughout his 45-year career in the global composites business. </p><p class="body-text" data-v-4ed8f1bd> He is a native of the Columbus, Ohio area and holds a B.S. in Chemistry and Mathematics from Cumberland College, class of 1980. He earned his M.B.A. from The Ohio State University. Davis has held key executive management positions with Owens Corning, MA Hanna, CTG International and Interplastic Corporation/ North American Composites. He has served on the board of the American Composites Manufacturers Association located in Washington, D.C., and frequently spent many hours lobbying in the House of Representatives and Senate. </p><p class="body-text" data-v-4ed8f1bd> Davis has held key roles in many areas of business, including acquisitions, manufacturing, product development, global commercial experience, and chemical distribution. One of his projects included the use of fiberglass composites in uranium enrichment in coordination with the US Government and the Oak Ridge National Laboratory. </p><p class="body-text" data-v-4ed8f1bd> Davis and his wife Ramona, also a Cumberland College graduate, reside in Corbin, Kentucky. They are blessed with 10 grandchildren. </p></div></div></main></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/speakers/JeffDavis.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const JeffDavis = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-4ed8f1bd"]]);
export {
  JeffDavis as default
};
//# sourceMappingURL=JeffDavis-9ea5451e.js.map
