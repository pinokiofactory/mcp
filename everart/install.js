const Config = require('../config')
module.exports = async (kernel) => {
  const config = Config(kernel)
  return {
    pre: [{
      env: "EVERART_API_KEY",
      description: "Everart API Key https://www.everart.ai/",
    }],
    run: [{
      method: "json.set",
      params: {
        [config]: {
          "mcpServers.everart": {
            "command": "npx",
            "env": {
              EVERART_API_KEY: "{{envs.EVERART_API_KEY}}"
            },
            "args": [
              "-y",
              "@modelcontextprotocol/server-everart",
            ]
          }
        }
      }
    }]
  }
}
