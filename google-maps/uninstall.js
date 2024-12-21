const Config = require('../config')
module.exports = async (kernel) => {
  const config = Config(kernel)
  return {
    run: async (kernel) => {
      return [
        {
          method: "json.rm",
          params: {
            [config]: ["mcpServers.google-maps"]
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
}
