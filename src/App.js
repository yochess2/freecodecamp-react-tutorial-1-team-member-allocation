import './App.css'
import Header from './Header'
import Employees from './Employees'
import Footer from './Footer'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <main className="App">
      <Header />
      <Employees />
      <Footer />
    </main>
  );
}

export default App;
