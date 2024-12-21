const Config = require('../config')
module.exports = async (kernel) => {
  const config = Config(kernel)
  return {
    pre: [{
      env: "GITHUB_PERSONAL_ACCESS_TOKEN",
      description: "Github api access token ",
    }],
    run: [
      {
        method: "json.set",
        params: {
          [config]: {
            "mcpServers.github": {
              "env": {
                "HOME": "{{envs.HOME}}",
                "PATH": "{{envs.PATH}}",
                "GITHUB_PERSONAL_ACCESS_TOKEN": "{{envs.GITHUB_PERSONAL_ACCESS_TOKEN}}"
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
      {
        method: "log",
        params: {
          text: `Install Done. Config updated at ${config}`
        }
      }
    ]
  }
}
