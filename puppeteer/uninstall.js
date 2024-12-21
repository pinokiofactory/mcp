const Config = require('../config')
module.exports = async (kernel) => {
  const config = Config(kernel)
  return {
    run: [{
      method: "json.rm",
      params: {
        [config]: ["mcpServers.puppeteer"]
      }
    }, {
      method: "log",
      params: {
        text: `Done. Config updated at ${config}`
      }
    }]
  }
}
