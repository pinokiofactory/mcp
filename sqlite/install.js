const Config = require('../config')
module.exports = async (kernel) => {
  const config = Config(kernel)
  return {
    pre: [{
      env: "SQLITE_FILE_NAME",
      description: "Sqlite file name (It will be stored in the sqlite folder)",
    }],
    run: [
      {
        method: "shell.run",
        params: {
          message: [
            "npm install",
            "node index {{envs.SQLITE_FILE_NAME}}"
          ],
        }
      },
      {
        method: "json.set",
        params: {
          [config]: {
            "mcpServers.sqlite": {
              "command": "uvx",
              "env": {
                "HOME": "{{envs.HOME}}",
                "PATH": "{{envs.PATH}}"
              },
              "args": [
                "mcp-server-sqlite",
                "--db-path",
                "{{path.resolve(cwd, envs.SQLITE_FILE_NAME)}}",
              ]
            },
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
