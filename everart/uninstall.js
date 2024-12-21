const Config = require('../config')
module.exports = {
  run: async (kernel) => {
    const config = Config(kernel)
    return [
      {
        method: "json.rm",
        params: {
          [config[kernel.platform]]: ["mcpServers.everart"]
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
