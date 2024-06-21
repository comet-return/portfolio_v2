import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Header/> */}
      <main className="wrapper flex-grow">
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App
