module.exports = async (kernel) => {
  return {
    config: {
      darwin: "{{env.HOME}}/Library/Application Support/Claude/claude_desktop_config.json",
      win32: "{{path.resolve(env.APPDATA, 'Claude/claude_desktop_config.json')}}",
    },
    pre: [{
      env: "EVERART_API_KEY",
      description: "Everart API Key https://www.everart.ai/",
    }],
    run: [{
      method: "json.set",
      params: {
        "{{self.config[platform]}}": {
          "mcpServers.everart": {
            "command": "npx",
            "env": {
              EVERART_API_KEY: "{{env.EVERART_API_KEY}}"
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
