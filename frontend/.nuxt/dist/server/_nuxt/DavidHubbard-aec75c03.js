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
const _imports_0 = "" + __publicAssetsURL("images/speakers/HubbardDavid_Pic.jpeg");
const DavidHubbard_vue_vue_type_style_index_0_scoped_5ac08d74_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex col justify-center items-center w-full h-full page" }, _attrs))} data-v-5ac08d74><main class="flex col justify-center items-center w-full h-full my-1 px-2" data-v-5ac08d74><div class="flex col nowrap justify-center items-center w-full speaker-details" data-v-5ac08d74><div class="flex col nowrap justify-center items-center w-full speaker-display" data-v-5ac08d74><h1 class="brand text-center" data-v-5ac08d74>Mr. David Hubbard</h1><img${ssrRenderAttr("src", _imports_0)} alt="Image of Mr. David Hubbard" data-v-5ac08d74><h2 class="title-info speaker-title" data-v-5ac08d74> Chief of Legislative, State, and Local Affairs </h2><h2 class="sub-title-info speaker-company" data-v-5ac08d74> National Security Agency (NSA) </h2></div><div class="speaker-content" data-v-5ac08d74><p class="body-text" data-v-5ac08d74> Mr. Hubbard and the members of his organization lead NSA’s interactions with the members and staff of the U.S. Senate and House of Representatives, and are responsible for developing, promoting, and facilitating strategic alliances with state, local, and community leaders. </p><p class="body-text" data-v-5ac08d74> Mr. Hubbard attended the University of the Cumberlands and graduated from the University of Kentucky in 1985 with a Bachelor of Science degree majoring in Computer Science. </p><p class="body-text" data-v-5ac08d74> Mr. Hubbard joined NSA in 1985 and spent his early years in the former National Computer Security Center, where he evaluated national security information systems. In the late 1980’s, he worked in the Research Directorate, where he developed software for NSA. In the early 1990’s, Mr. Hubbard moved to the Operations Directorate, where he was a team chief responsible for the development and deployment of fielded systems. In the mid-1990’s, Mr. Hubbard served in a variety of program management, technical, and managerial positions. From 2000-2001, Mr. Hubbard was a program manager at Microsoft Corporation in Redmond, WA, before returning to NSA in September 2001 to work in several positions in the NSA Commercial Solutions Center. Prior to his current assignment, Mr. Hubbard was the Chief of the Commercial Engagement Center. In this position, Mr. Hubbard oversaw the establishment and management of NSA’s engagement with industry that delivers technical and cybersecurity solutions for Agency customers. </p><p class="body-text" data-v-5ac08d74> In addition to receiving several awards while at NSA, Mr. Hubbard also holds a patent for an invention developed while employed at Microsoft. He is also the recipient of a Meritorious Presidential Rank Award and the NSA Meritorious Civilian Service Award. </p><p class="body-text" data-v-5ac08d74> Mr. Hubbard currently resides in Annapolis, Maryland. </p></div></div></main></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/speakers/DavidHubbard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DavidHubbard = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-5ac08d74"]]);
export {
  DavidHubbard as default
};
//# sourceMappingURL=DavidHubbard-aec75c03.js.map
