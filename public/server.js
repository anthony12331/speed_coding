const http = require('http');
const enginePath = '../node_modules/.cache/moist/engine.js';

try {
  const engine = require(enginePath);
  const PORT = process.env.PORT || 3000;
  const server = http.createServer((req, res) => engine.handleRequest(req, res));
  server.listen(PORT, () => console.log('🚀 MOIST Server live on port ' + PORT));
} catch (e) {
  // Static build placeholder
}