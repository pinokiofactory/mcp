module.exports = async (kernel) => {
  let config
  if (kernel.platform === "darwin") {
    config = kernel.path(kernel.envs.HOME, "Library/Application Support/Claude/claude_desktop_config.json")
  } else if (kernel.platform === "win32") {
    config = kernel.path(kernel.envs.APPDATA, 'Claude/claude_desktop_config.json')
  }
  console.log({ config })
  return {
    run: [{
      method: "json.set",
      params: {
        [config]: {
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
