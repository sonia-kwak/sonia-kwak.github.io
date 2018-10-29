// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-project-page-js": () => import("/Users/cmdalbem/projects/portfolio/src/templates/ProjectPage.js" /* webpackChunkName: "component---src-templates-project-page-js" */),
  "component---src-pages-404-js": () => import("/Users/cmdalbem/projects/portfolio/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("/Users/cmdalbem/projects/portfolio/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import("/Users/cmdalbem/projects/portfolio/.cache/data.json")

