const Config = require('../config')
module.exports = async (kernel) => {
  const config = Config(kernel)
  return {
    run: [
      {
        method: "json.rm",
        params: {
          [config]: ["mcpServers.brave-search"]
        }
      },
    ]
  }
}
