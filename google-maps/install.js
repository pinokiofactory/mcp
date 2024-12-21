const Config = require('../config')
module.exports = async (kernel) => {
  const config = Config(kernel)
  return {
    pre: [{
      env: "GOOGLE_MAPS_API_KEY",
      description: "Google maps api key",
    }],
    run: [{
      method: "json.set",
      params: {
        [config]: {
          "mcpServers.google-maps": {
            "env": {
              "GOOGLE_MAPS_API_KEY": "{{envs.GOOGLE_MAPS_API_KEY}}"
            },
            "command": "npx",
            "args": [
              "-y",
              "@modelcontextprotocol/server-google-maps"
            ],
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
