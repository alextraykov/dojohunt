import Navbar from './components/Navbar';
import Map from './components/Map';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="fixed top-0 left-0 right-0 h-16 bg-gray-900">
        <Navbar />
      </nav>
      <main className="flex-1">
        <Map />
      </main>
    </div>
  );
}

export default App;