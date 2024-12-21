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
              "env": {
                "HOME": "{{envs.HOME}}",
                "PATH": "{{envs.PATH}}",
              },
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
