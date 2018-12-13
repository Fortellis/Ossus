const routes = require('next-routes');

export default routes().add({ name: 'docs', pattern: '/docs/:page/:section/:doc', page: 'doc'});
    