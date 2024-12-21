module.exports = async (kernel) => {
  const config =  {
    darwin: kernel.path(kernel.envs.HOME, "Library/Application Support/Claude/claude_desktop_config.json"),
    win32: kernel.path(kernel.envs.APPDATA, 'Claude/claude_desktop_config.json')
  }
  return {
    run: [{
      method: "json.set",
      params: {
        [config[kernel.platform]]: {
          "mcpServers.puppeteer": {
            "command": "npx",
            "args": [
              "-y",
              "@modelcontextprotocol/server-puppeteer"
            ]
          }
        }
      }
    }]
  }
}
