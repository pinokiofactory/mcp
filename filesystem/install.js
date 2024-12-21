const Config = require('../config')
module.exports = async (kernel) => {
  const config = Config(kernel)
  return {
    pre: [{
      env: "ALLOWED_DIRECTORIES",
      description: "A comma separated string of file paths you wish to allow file manipulation on"
    }],
    run: [{
      method: "json.set",
      params: {
        [config]: {
          "mcpServers.filesystem": {
            "command": "npx",
            "args": [
              "-y",
              "@modelcontextprotocol/server-filesystem",
            ].concat(kernel.envs.ALLOWED_DIRECTORIES ? kernel.envs.ALLOWED_DIRECTORIES.split(",") : [])
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
