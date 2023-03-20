import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/nickmoore_rush/Desktop/projects/school/bf2023/frontend/node_modules/.pnpm/nuxt@3.2.2_eslint@8.36.0+sass@1.58.3/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}