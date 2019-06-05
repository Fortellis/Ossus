const routes = require('next-routes');
const { loadConfig } = require('./config');
// Variables
const config = loadConfig(process.cwd());
const router = routes();

config.documents.forEach(({ route, page, depth }) => {
  const params = Array.apply(null, Array(depth + 1)).map((_x, i) => i).join('/:');
  router.add({ name: route, pattern: `/${route}/:${params}`, page });
});


export default router;