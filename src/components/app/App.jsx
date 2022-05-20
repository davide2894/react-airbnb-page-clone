import './App.scss';
import Navbar from '../navbar/Navbar';
import Hero from '../hero/Hero';

export default function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <Hero></Hero>
    </div>
  );
}