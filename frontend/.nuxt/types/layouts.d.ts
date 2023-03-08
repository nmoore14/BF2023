import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "/Users/nickmoore_rush/Desktop/projects/school/bf2023/frontend/node_modules/.pnpm/nuxt@3.2.2_sass@1.58.3/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}