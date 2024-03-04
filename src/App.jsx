import Dashboard from "./components/Dashboard";
import students from "./data/students";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <main>
      <Header />
      <Dashboard students={students} />
      <Footer />
    </main>
  );
}

export default App;
