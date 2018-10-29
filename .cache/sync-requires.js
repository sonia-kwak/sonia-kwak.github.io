// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-project-page-js": preferDefault(require("/Users/cmdalbem/projects/portfolio/src/templates/ProjectPage.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/cmdalbem/projects/portfolio/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/cmdalbem/projects/portfolio/src/pages/index.js"))
}

