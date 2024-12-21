module.exports = async (kernel) => {
  const config =  {
    darwin: kernel.path(kernel.envs.HOME, "Library/Application Support/Claude/claude_desktop_config.json"),
    win32: kernel.path(kernel.envs.APPDATA, 'Claude/claude_desktop_config.json')
  }
  return {
    pre: [{
      env: "BRAVE_API_KEY",
      description: "Brave search API key https://brave.com/search/api/"
    }],
    run: [{
      method: "json.set",
      params: {
        [config[kernel.platform]]: {
          "mcpServers.brave-search": {
            "env": {
              "BRAVE_API_KEY": kernel.envs.BRAVE_API_KEY
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
        text: `Install Done. Config updated at ${config[kernel.platform]}`
      }
    }]
  }
}
