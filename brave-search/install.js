const Config = require('../config')
module.exports = async (kernel) => {
  const config = Config(kernel)
  return {
    pre: [{
      env: "BRAVE_API_KEY",
      description: "Brave search API key https://brave.com/search/api/"
    }],
    run: [{
      method: "json.set",
      params: {
        [config]: {
          "mcpServers.brave-search": {
            "env": {
              "BRAVE_API_KEY": "{{envs.BRAVE_API_KEY}}"
            },
            "command": "npx",
            "args": [
              "-y",
              "@modelcontextprotocol/server-brave-search"
            ]
          }
        }
      }
    }, {
      method: "log",
      params: {
        text: `Install Done. Config updated at ${config}`
      }
    }]
  }
}
