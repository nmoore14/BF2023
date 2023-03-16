import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc, a as _imports_0 } from "../server.mjs";
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
const index_vue_vue_type_style_index_0_scoped_bfdf04ce_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex col justify-center items-center w-full h-full page" }, _attrs))} data-v-bfdf04ce><main class="flex col justify-center items-center w-full my-1 px-2" data-v-bfdf04ce><div class="page-title" data-v-bfdf04ce><img${ssrRenderAttr("src", _imports_0)} alt="Business forum logo" data-v-bfdf04ce></div><div class="page-content" data-v-bfdf04ce><p class="body-text" data-v-bfdf04ce> The Hutton School of Business at University of the Cumberlands maintains an innovative stance in providing cutting edge educational service to its students. We believe that success is defined by how well we extend the range of possibilities for our students. At the Hutton School of Business, we strive to provide an environment that encourages and recognizes innovation and creativity in the education of business students. It is with this overarching goal in mind that the Business Forum for Young Professionals was created. </p><p class="body-text" data-v-bfdf04ce> The Business Forum for Young Professionals was developed through a gift and at the impetus of a UC trustee (Mr. J. Hunt Perkins). Each April since 2009, the Hutton School of Business hosts four highly successful professionals from all areas of business. Previous speakers have included Presidents and CEOs of international corporations, entrepreneurs, systems analysts, CPAs, and attorneys. The diversity of the speakers reflects the requests of students and recommendations for topics and professionals. The theme for each Business Forum has been based on Recognizing Business Opportunities in any Economic Environment. </p><p class="body-text" data-v-bfdf04ce> The Business Forum is a simulated professional business conference designed to prepare young professionals as they enter the business workforce. The speakers make their presentations at two sessions which last 45 minutes including 10 minutes for questions. Since 2022, we have added a Keynote Session to open Forum. As with any professional conference, the students are required to pre-register choosing which sessions to attend. </p><p class="body-text" data-v-bfdf04ce> On the morning of Forum, students arrive at the Registration Center in professional dress to receive their conference materials. Students not only attend Forum sessions but critique each session’s value as part of their educational experience. They are encouraged to ask questions and engage the speakers in dialogues. As a component of their business classes, each student is required to reflect on the sessions they attended and consider the relevance to their chosen profession. </p><p class="body-text" data-v-bfdf04ce> Each year more than 150 students attend the Business Forum. The students who attend the presentations have been impressed not only with the speakers’ business expertise but with their commitment to serving others. In the thirteen years of Business Forum, more than 2,500 Cumberlands students have had the opportunity to network with more than 50 successful business people who are willing to share their professional experiences. </p><p class="body-text" data-v-bfdf04ce> Students can not only hear the speakers but interact with them in social situations. The members of our business honors society, Sigma Beta Delta, serve as hosts for a dinner with the speakers the evening before Forum. On the day of Forum, SBD members, along with our Business Club and department upper-class students, also serve as hosts for a luncheon honoring our speakers. Additionally, each speaker is assigned a student host during Forum. </p><p class="body-text" data-v-bfdf04ce> All Hutton School of Business students attend Forum from freshman to senior year. Each year upperclassmen begin talking about how much they are looking forward to Forum and sharing their experiences with the underclassmen. Student benefits from Business Forum include: </p><ul class="body-list" data-v-bfdf04ce><li class="body-text body-list-item" data-v-bfdf04ce> Shaping of the student’s professional development </li><li class="body-text body-list-item" data-v-bfdf04ce> Expansion of the knowledge of various professional fields and available opportunities </li><li class="body-text body-list-item" data-v-bfdf04ce> Exposure to a wealth of professional knowledge and experience </li><li class="body-text body-list-item" data-v-bfdf04ce> Creation of networking opportunities </li></ul><p class="body-text" data-v-bfdf04ce> We are excited to have the opportunity to host this year’s event. We had to cancel in 2020, had a much smaller scale event in 2021, resumed in-person attendance for the full event in 2022 and seem to be back to “normal” for 2023. We look forward to successful presentations and can’t wait to hear the student reviews. </p><p class="body-text" data-v-bfdf04ce> Thank you for attending this year’s Business Forum for Young Professionals! </p></div></main></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/forum/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-bfdf04ce"]]);
export {
  index as default
};
//# sourceMappingURL=index-a27d95ec.js.map
