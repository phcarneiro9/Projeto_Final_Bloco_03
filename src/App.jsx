import NavBar from './components/NavBar'
import Footer from './components/Footer'
import AppRoutes from './router/AppRoutes'

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <div className="flex-1">
        <AppRoutes />
      </div>
      <Footer />
    </div>
  )
}

export default App
