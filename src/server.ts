import App from './App'

const defaultPort = 3333
const port = process.env.PORT || defaultPort

App.listen(port, () => {
  console.log(`⚡️ Server listening on http://localhost:${port}`)
})
