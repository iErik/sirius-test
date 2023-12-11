/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly VITE_GITHUB_API: string
  readonly VITE_GIT_TOKEN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
