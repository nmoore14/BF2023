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
const _imports_0 = "" + __publicAssetsURL("images/speakers/ReedCharles.jpg");
const CharlesReed_vue_vue_type_style_index_0_scoped_fb5c3a38_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex col justify-center items-center w-full h-full page" }, _attrs))} data-v-fb5c3a38><main class="flex col justify-center items-center w-full h-full my-1 px-2" data-v-fb5c3a38><div class="flex col nowrap justify-center items-center w-full speaker-details" data-v-fb5c3a38><div class="flex col nowrap justify-center items-center w-full speaker-display" data-v-fb5c3a38><h1 class="brand text-center" data-v-fb5c3a38>Mr. Charles Reed</h1><img${ssrRenderAttr("src", _imports_0)} alt="Image of Mr. Charles Reed" data-v-fb5c3a38><h2 class="title-info speaker-title" data-v-fb5c3a38>President</h2><h2 class="sub-title-info speaker-company" data-v-fb5c3a38>Reed Enterprises, Inc.</h2></div><div class="speaker-content" data-v-fb5c3a38><p class="body-text" data-v-fb5c3a38> Charles Reed, a 1975 graduate of Cumberland College, was an exceptional student leader and athlete. He came to Williamsburg from Jenkins, KY, where he set school records in the long jump, triple jump and 180 hurdles, which he still holds today. </p><p class="body-text" data-v-fb5c3a38> While a student at Cumberland, Reed was awarded the T.J. Roberts Campus Leadership Award, among other awards he received. He was the co-founder and first president of the Black Student Union at Cumberland. The Charles Reed Track and Academic Scholarship was established by Cumberland in his honor. Reed earned a bachelor’s degree in psychology from Cumberland in 1975, received the outstanding Alumni Award in 1979, and inducted into the UC Hall of Fame in 2012. </p><p class="body-text" data-v-fb5c3a38> Upon graduation from Cumberland, Reed began a five-year career with Bethlehem Steel Corporation in Western, Pennsylvania, involving various management positions. In 1980, he moved to Denver, Colorado, and held several managerial positions with Arco International Oil and Gas Corporation. In 1993, Reed formed his own company and bought the exclusive franchise rights to Schlotzsky&#39;s in the cities of Plano, Allen, and Frisco, Texas. In 2014 after over 21 years owning and operating 7 locations, he sold the franchise and the real estate. He is now a semi-retired commercial real estate owner. </p><p class="body-text" data-v-fb5c3a38> Reed served on many local boards such as Schlotzsky&#39;s Marketing Advisor Board, Equitable Bank Advisory Board of Directors, Girls, Inc. Advisory Board and Board of Directors, Black Executive Exchange Program Urban League, Midland Chamber of Commerce Advisory Board and the National Society of Black Engineers Region V Advisory Board. He served on the University of the Cumberlands Alumni Board of Directors from 1985-1988. </p><p class="body-text" data-v-fb5c3a38> Reed is married to his grade school sweetheart and wife of 51 years, the former Clara Higgins, a 1975 alumna of Cumberland. She has earned a Master of Arts from the University of Pittsburgh, a Master of Divinity, and a doctoral degree in Theology from SMU. She is a retired Elder in the United Methodist Church, where she was the first Black female District Superintendent in the North Texas Annual Conference. Dr. Reed is also responsible for 260 pastors and 80 churches. Charles and Clara have one child, Crystal, and one grandchild, Camryn. </p></div></div></main></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/speakers/CharlesReed.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CharlesReed = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-fb5c3a38"]]);
export {
  CharlesReed as default
};
//# sourceMappingURL=CharlesReed-aad0d78c.js.map
