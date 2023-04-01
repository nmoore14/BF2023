
import type { Defu } from 'defu'
import cfg0 from "/Users/nickmoore_rush/Desktop/projects/school/bf2023/frontend/app.config"

declare const inlineConfig = {}
type ResolvedAppConfig = Defu<typeof inlineConfig, [typeof cfg0]>

declare module 'nuxt/schema' {
  interface AppConfig extends ResolvedAppConfig { }
}
