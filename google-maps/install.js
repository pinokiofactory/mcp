module.exports = async (kernel) => {
  return {
    config: {
      darwin: "{{env.HOME}}/Library/Application Support/Claude/claude_desktop_config.json",
      win32: "{{path.resolve(env.APPDATA, 'Claude/claude_desktop_config.json')}}",
    },
    pre: [{
      env: "GOOGLE_MAPS_API_KEY",
      description: "Google maps api key",
    }],
    run: [{
      method: "json.set",
      params: {
        "{{self.config[platform]}}": {
          "mcpServers.google-maps": {
            "env": {
              "GOOGLE_MAPS_API_KEY": kernel.envs.GOOGLE_MAPS_API_KEY
            },
            "command": "npx",
            "args": [
              "-y",
              "@modelcontextprotocol/server-google-maps"
            ],
          }
        }
      }
    }]
  }
}
