const Config = require('../config')
module.exports = async (kernel) => {
  const config = Config(kernel)
  return {
    run: [
      {
        method: "json.set",
        params: {
          [config]: {
            "mcpServers.memory": {
              "command": "npx",
              "args": [
                "-y",
                "@modelcontextprotocol/server-memory"
              ]
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
