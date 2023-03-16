import { _ as _export_sfc, b as __nuxt_component_0$1 } from '../server.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createTextVNode } from 'file:///Users/nickmoore_rush/Desktop/projects/school/bf2023/frontend/node_modules/.pnpm/vue@3.2.47/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'file:///Users/nickmoore_rush/Desktop/projects/school/bf2023/frontend/node_modules/.pnpm/vue@3.2.47/node_modules/vue/server-renderer/index.mjs';
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
      const _component_NuxtLink = __nuxt_component_0$1;
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/speakers/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-28623872"]]);

export { index as default };
//# sourceMappingURL=index-abd25814.mjs.map
