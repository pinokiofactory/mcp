module.exports = async (kernel) => {
  return {
    config: {
      darwin: "{{env.HOME}}/Library/Application Support/Claude/claude_desktop_config.json",
      win32: "{{path.resolve(env.APPDATA, 'Claude/claude_desktop_config.json')}}",
    },
    pre: [{
      env: "ALLOWED_DIRECTORIES",
      description: "A comma separated string of file paths you wish to allow file manipulation on"
    }],
    run: [{
      method: "json.set",
      params: {
        "{{self.config[platform]}}": {
          "mcpServers.filesystem": {
            "command": "npx",
            "args": [
              "-y",
              "@modelcontextprotocol/server-filesystem",
            ].concat(kernel.envs.ALLOWED_DIRECTORIES ? kernel.envs.ALLOWED_DIRECTORIES.split(",") : [])
          }
        }
      }
    }]
  }
}
