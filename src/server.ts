import App from 'src/App'

const defaultPort = 3333

App.listen(defaultPort, () => {
  console.log(`⚡️ Server listening on http://localhost:${defaultPort}`)
})
