import { b as __nuxt_component_0, _ as _export_sfc } from "../server.mjs";
import { defineComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
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
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SpeakerCard",
  __ssrInlineRender: true,
  props: {
    name: String,
    title: String,
    company: String,
    picture: String,
    link: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex col nowrap justify-center items-center speaker-card" }, _attrs))}><div class="speaker-img"><img${ssrRenderAttr("src", __props.picture)} alt="Picture of {{ name }}"></div><div class="flex col nowrap justify-center items-center speaker-content"><h1 class="title speaker-name-info">${ssrInterpolate(__props.name)}</h1><h2 class="speaker-title-info">${ssrInterpolate(__props.title)}</h2><h2 class="speaker-company-info">${ssrInterpolate(__props.company)}</h2>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: __props.link,
        class: "btn btn-primary speaker-read-more"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Read More`);
          } else {
            return [
              createTextVNode("Read More")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const SpeakerCard_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SpeakerCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const KeynoteSpeakers = [
      {
        name: "Mr. Joe Craft",
        title: "Chairman, President and CEO",
        company: "Alliance Resource Partners, LP",
        picture: "/images/speakers/CraftJoe_Pic.jpg",
        link: "/speakers/JoeCraft"
      }
    ];
    const Speakers = [
      {
        name: "Mr. David Hubbard",
        title: "Chief of Legislative, State and Local Affairs",
        company: "National Security Agency",
        picture: "/images/speakers/HubbardDavid_Pic.jpeg",
        link: "/speakers/DavidHubbard"
      },
      {
        name: "Ms. Barbara Johnston",
        title: "Creative Director",
        company: "IDEA Johnston",
        picture: "/images/speakers/JohnstonBarbara_Pic.jpg",
        link: "/speakers/BarbaraJohnston"
      },
      {
        name: "Mr. Charles Reed",
        title: "President",
        company: "Reed Enterprises, Inc.",
        picture: "/images/speakers/ReedCharles.jpg",
        link: "/speakers/CharlesReed"
      },
      {
        name: "Mr. Jeffrey W. Davis",
        title: "Business Development and Commercial Training Director",
        company: "Interplastic Corporation/North American Composites",
        picture: "/images/speakers/DavisJeff_Pic.jpg",
        link: "/speakers/JeffDavis"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SpeakerCard = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex col justify-center items-center w-full h-full page" }, _attrs))} data-v-28623872><main class="flex col justify-center items-center w-full h-full my-1 px-2" data-v-28623872><div class="flex row wrap justify-center items-center w-full keynote-speakers" data-v-28623872><!--[-->`);
      ssrRenderList(KeynoteSpeakers, (keynoteSpeaker) => {
        _push(ssrRenderComponent(_component_SpeakerCard, {
          name: keynoteSpeaker.name,
          title: keynoteSpeaker.title,
          company: keynoteSpeaker.company,
          picture: keynoteSpeaker.picture,
          link: keynoteSpeaker.link
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="flex row wrap justify-center items-center w-full speakers" data-v-28623872><!--[-->`);
      ssrRenderList(Speakers, (speaker) => {
        _push(ssrRenderComponent(_component_SpeakerCard, {
          name: speaker.name,
          title: speaker.title,
          company: speaker.company,
          picture: speaker.picture,
          link: speaker.link
        }, null, _parent));
      });
      _push(`<!--]--></div></main></div>`);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_28623872_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/speakers/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-28623872"]]);
export {
  index as default
};
//# sourceMappingURL=index-abd25814.js.map
