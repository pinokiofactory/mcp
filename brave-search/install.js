module.exports = async (kernel) => {
  return {
    config: {
      darwin: "{{env.HOME}}/Library/Application Support/Claude/claude_desktop_config.json",
      win32: "{{path.resolve(env.APPDATA, 'Claude/claude_desktop_config.json')}}",
    },
    pre: [{
      env: "BRAVE_API_KEY",
      description: "Brave search API key https://brave.com/search/api/"
    }],
    run: [{
      method: "json.set",
      params: {
        "{{self.config[platform]}}": {
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
    }]
  }
}
