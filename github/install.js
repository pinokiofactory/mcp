module.exports = {
  config: {
    darwin: "{{env.HOME}}/Library/Application Support/Claude/claude_desktop_config.json",
    win32: "{{path.resolve(env.APPDATA, 'Claude/claude_desktop_config.json')}}",
  },
  pre: [{
    env: "GITHUB_PERSONAL_ACCESS_TOKEN",
    description: "Github api access token ",
  }],
  run: [
    {
      method: "json.set",
      params: {
        "{{self.config[platform]}}": {
          "mcpServers.github": {
            "env": {
              "GITHUB_PERSONAL_ACCESS_TOKEN": "{{envs.GITHUB_PERSONAL_ACCESS_TOKEN}}",
            },
            "command": "npx",
            "args": [
              "-y",
              "@modelcontextprotocol/server-github"
            ],
          }
        }
      }
    },
  ]
}
