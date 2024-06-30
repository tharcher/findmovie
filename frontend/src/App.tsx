import { MoviesProvider } from "./contexts/moviesContext"
import { AppRoutes } from "./routes"

function App() {
  return (
    <MoviesProvider>
      <AppRoutes />
    </MoviesProvider>);
}

export default App
