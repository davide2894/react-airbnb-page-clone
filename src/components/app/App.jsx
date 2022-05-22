import './App.scss';
import Navbar from '../navbar/Navbar';
import Hero from '../hero/Hero';
import Card from '../card/Card';

export default function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <Hero></Hero>
      <Card></Card>
    </div>
  );
}