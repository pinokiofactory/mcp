const Config = require('../config')
module.exports = {
  run: async (kernel) => {
    const config = Config(kernel)
    return [
      {
        method: "json.rm",
        params: {
          [config]: ["mcpServers.brave-search"]
        }
      },
    ]
  }
}
