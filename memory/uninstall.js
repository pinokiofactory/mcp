const Config = require('../config')
module.exports = async (kernel) => {
  const config = Config(kernel)
  return {
    run: [
      {
        method: "json.rm",
        params: {
          [config]: ["mcpServers.memory"]
        }
      },
      {
        method: "log",
        params: {
          text: `Install Done. Config updated at ${config}`
        }
      }
    ]
  }
}
