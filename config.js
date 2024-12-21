module.exports = (kernel) => {
  let config
  if (kernel.platform === "darwin") {
    config = kernel.path(kernel.envs.HOME, "Library/Application Support/Claude/claude_desktop_config.json")
  } else if (kernel.platform === "win32") {
    config = kernel.path(kernel.envs.APPDATA, 'Claude/claude_desktop_config.json')
  }
  return config
}
