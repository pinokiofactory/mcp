module.exports = {
  config: {
    darwin: "{{env.HOME}}/Library/Application Support/Claude/claude_desktop_config.json",
    win32: "{{path.resolve(env.APPDATA, 'Claude/claude_desktop_config.json')}}",
  },
  run: [
    {
      method: "json.rm",
      params: {
        "{{self.config[platform]}}": ["mcpServers.github"]
      }
    },
  ]
}
