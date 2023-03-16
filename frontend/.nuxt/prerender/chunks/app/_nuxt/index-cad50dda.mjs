import { p as publicAssetsURL } from '../../renderer.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createTextVNode } from 'file:///Users/nickmoore_rush/Desktop/projects/school/bf2023/frontend/node_modules/.pnpm/vue@3.2.47/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'file:///Users/nickmoore_rush/Desktop/projects/school/bf2023/frontend/node_modules/.pnpm/vue@3.2.47/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc, b as __nuxt_component_0$1 } from '../server.mjs';
import 'file:///Users/nickmoore_rush/Desktop/projects/school/bf2023/frontend/node_modules/.pnpm/vue-bundle-renderer@1.0.2/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/nickmoore_rush/Desktop/projects/school/bf2023/frontend/node_modules/.pnpm/h3@1.5.0/node_modules/h3/dist/index.mjs';
import 'file:///Users/nickmoore_rush/Desktop/projects/school/bf2023/frontend/node_modules/.pnpm/ufo@1.1.0/node_modules/ufo/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/nickmoore_rush/Desktop/projects/school/bf2023/frontend/node_modules/.pnpm/node-fetch-native@1.0.2/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/nickmoore_rush/Desktop/projects/school/bf2023/frontend/node_modules/.pnpm/ofetch@1.0.1/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/nickmoore_rush/Desktop/projects/school/bf2023/frontend/node_modules/.pnpm/destr@1.2.2/node_modules/destr/dist/index.mjs';
import 'file:///Users/nickmoore_rush/Desktop/projects/school/bf2023/frontend/node_modules/.pnpm/unenv@1.2.1/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/nickmoore_rush/Desktop/projects/school/bf2023/frontend/node_modules/.pnpm/hookable@5.4.2/node_modules/hookable/dist/index.mjs';
import 'file:///Users/nickmoore_rush/Desktop/projects/school/bf2023/frontend/node_modules/.pnpm/scule@1.0.0/node_modules/scule/dist/index.mjs';
import 'file:///Users/nickmoore_rush/Desktop/projects/school/bf2023/frontend/node_modules/.pnpm/ohash@1.0.0/node_modules/ohash/dist/index.mjs';
import 'file:///Users/nickmoore_rush/Desktop/projects/school/bf2023/frontend/node_modules/.pnpm/unstorage@1.1.5/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/nickmoore_rush/Desktop/projects/school/bf2023/frontend/node_modules/.pnpm/unstorage@1.1.5/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/nickmoore_rush/Desktop/projects/school/bf2023/frontend/node_modules/.pnpm/defu@6.1.2/node_modules/defu/dist/defu.mjs';
import 'file:///Users/nickmoore_rush/Desktop/projects/school/bf2023/frontend/node_modules/.pnpm/radix3@1.0.0/node_modules/radix3/dist/index.mjs';
import 'file:///Users/nickmoore_rush/Desktop/projects/school/bf2023/frontend/node_modules/.pnpm/unctx@2.1.2/node_modules/unctx/dist/index.mjs';
import 'file:///Users/nickmoore_rush/Desktop/projects/school/bf2023/frontend/node_modules/.pnpm/@unhead+vue@1.0.22_vue@3.2.47/node_modules/@unhead/vue/dist/index.mjs';
import 'file:///Users/nickmoore_rush/Desktop/projects/school/bf2023/frontend/node_modules/.pnpm/@unhead+dom@1.0.22/node_modules/@unhead/dom/dist/index.mjs';
import 'file:///Users/nickmoore_rush/Desktop/projects/school/bf2023/frontend/node_modules/.pnpm/@unhead+ssr@1.0.22/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Users/nickmoore_rush/Desktop/projects/school/bf2023/frontend/node_modules/.pnpm/vue-router@4.1.6_vue@3.2.47/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main$4 = {
  methods: {
    linkPage(page) {
      this.$router.push(`/${page}`);
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex col justify-end items-center w-full hero" }, _attrs))}><div class="gradient-bg"></div><h2 class="hero-sub-title"> 14th Annual Business Forum for Young Professionals </h2><h1 class="hero-title"> Equipping &amp; Empowering Tomorrow&#39;s Leaders </h1><div class="flex row my-1 hero-btns"><button class="btn btn-primary-ghost">Learn More</button><button class="btn btn-primary">Register</button></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Hero.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-full flex col justify-center items-start p-1 forum-card" }, _attrs))}><div class="w-full card-header"><h1 class="title">The Forum</h1></div><div class="my-1 card-content"><p class="body-text"> The Hutton School of Business at University of the Cumberlands maintains an innovative stance in providing cutting edge educational service to its students. We believe that success is defined by how well we extend the range of possibilities for our students. At the Hutton School of Business, we strive to provide an environment that encourages and recognizes innovation and creativity in the education of business students. It is with this overarching goal in mind that the Business Forum for Young Professionals was created. </p></div>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/forum",
    class: "my-1 link-cta"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Read More...`);
      } else {
        return [
          createTextVNode("Read More...")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ForumCard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "EventCard",
  __ssrInlineRender: true,
  props: {
    startTime: String,
    endTime: String,
    title: String,
    location: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex col justify-start items-center nowrap p-1 event-card" }, _attrs))} data-v-09a52a2e><div class="card-header" data-v-09a52a2e><h1 class="title card-title" data-v-09a52a2e>${ssrInterpolate(__props.title)}</h1></div><div class="card-content" data-v-09a52a2e><p class="body-info" data-v-09a52a2e>${ssrInterpolate(__props.startTime)} - ${ssrInterpolate(__props.endTime)}</p><h2 class="title-info" data-v-09a52a2e>${ssrInterpolate(__props.location)}</h2></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/EventCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-09a52a2e"]]);
const _imports_0 = "" + publicAssetsURL("images/sponsors/BizzackFoundationLogo.png");
const _imports_1 = "" + publicAssetsURL("images/sponsors/DerbyDistributionLogo-KS.png");
const _imports_2 = "" + publicAssetsURL("images/sponsors/ForchtTransparent-KS.png");
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex col w-full justify-center items-center p-1 sponsors" }, _attrs))}><div class="flex col w-full justify-center items-center sponsors-title"><h2 class="title">Sponsors</h2></div><div class="flex row wrap w-full justify-around items-center sponsors-content"><div class="sponsor"><img class="sponsor-img-bf"${ssrRenderAttr("src", _imports_0)} alt="Bizzack Foundation Logo"></div><div class="sponsor"><a href="https://derbydistribution.net/" target="_blank"><img class="sponsor-img-ddl"${ssrRenderAttr("src", _imports_1)} alt="Derby Distribution Logo"></a></div><div class="sponsor"><a href="https://www.forchtbank.com" target="_blank"><img class="sponsor-img-fb"${ssrRenderAttr("src", _imports_2)} alt="Forcht Bank Logo"></a></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Sponsors.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const Events = [
      {
        startTime: "8:00",
        endTime: "9:15",
        title: "Registration",
        location: "Hutton School of Business"
      },
      {
        startTime: "9:30",
        endTime: "10:15",
        title: "Keynote/Opening Session",
        location: "Kohn Theatre"
      },
      {
        startTime: "10:30",
        endTime: "11:15",
        title: "Session 1",
        location: "Hutton School of Business"
      },
      {
        startTime: "11:30",
        endTime: "12:15",
        title: "Session 2",
        location: "Hutton School of Business"
      },
      {
        startTime: "12:15",
        endTime: "12:30",
        title: "Additional Meet & Greet",
        location: "Hutton School of Business"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Hero = __nuxt_component_0;
      const _component_ForumCard = __nuxt_component_1;
      const _component_EventCard = __nuxt_component_2;
      const _component_Sponsors = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex col justify-center items-center w-full h-full page" }, _attrs))} data-v-f609a4a3>`);
      _push(ssrRenderComponent(_component_Hero, null, null, _parent));
      _push(`<main class="w-full flex col justify-center items-center my-1 content" data-v-f609a4a3>`);
      _push(ssrRenderComponent(_component_ForumCard, null, null, _parent));
      _push(`<div class="flex row wrap justify-center items-center w-full my-1 p-1 event-cards" data-v-f609a4a3><h1 class="w-full title event-section-title" data-v-f609a4a3>Events</h1><!--[-->`);
      ssrRenderList(Events, (event) => {
        _push(ssrRenderComponent(_component_EventCard, {
          startTime: event.startTime,
          endTime: event.endTime,
          title: event.title,
          location: event.location
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_Sponsors, null, null, _parent));
      _push(`</main></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f609a4a3"]]);

export { index as default };
//# sourceMappingURL=index-cad50dda.mjs.map
