module.exports = async (kernel) => {
  const config =  {
    darwin: kernel.path(kernel.envs.HOME, "Library/Application Support/Claude/claude_desktop_config.json"),
    win32: kernel.path(kernel.envs.APPDATA, 'Claude/claude_desktop_config.json')
  }
  return {
    pre: [{
      env: "EVERART_API_KEY",
      description: "Everart API Key https://www.everart.ai/",
    }],
    run: [{
      method: "json.set",
      params: {
        [config[kernel.platform]]: {
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
