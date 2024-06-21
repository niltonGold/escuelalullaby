import './App.css';
import { Header } from './components/Principal_Componets/header';
import { Main } from './components/Principal_Componets/main';
import { Footer } from './components/Principal_Componets/footer';

function App() {
  return (
    <div>

        <div className="App">
            <Header />
            <Main />
        </div>
        <Footer />

    </div>
  );
}

export default App;
