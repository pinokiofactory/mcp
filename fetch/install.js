const Config = require('../config')
module.exports = async (kernel) => {
  const config = Config(kernel)
  return {
    run: [
      {
        method: "json.set",
        params: {
          [config]: {
            "mcpServers.fetch": {
              "command": "uvx",
              "args": ["mcp-server-fetch"]
            }
          }
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
