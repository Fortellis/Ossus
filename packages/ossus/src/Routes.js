const routes = require('next-routes');

const Routes = routes().add({ name: 'docs', pattern: '/docs/:page/:section/:doc', page: 'doc'});

export default Routes;
    