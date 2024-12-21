const Config = require('../config')
module.exports = async (kernel) => {
  const config = Config(kernel)
  return {
    run: [{
      method: "json.set",
      params: {
        [config]: {
          "mcpServers.puppeteer": {
            "command": "npx",
            "args": [
              "-y",
              "@modelcontextprotocol/server-puppeteer"
            ]
          }
        }
      }
    }, {
      method: "log",
      params: {
        text: `Done. Config updated at ${config}`
      }
    }]
  }
}
