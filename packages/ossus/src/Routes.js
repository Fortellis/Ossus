const routes = require('next-routes');

export default routes()
  .add({ name: 'docs', pattern: '/docs/:page/:section/:doc', page: 'doc' })
  .add({ name: 'blog', pattern: '/blog/:post', page: 'blog' });