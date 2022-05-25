import './App.scss';
import Navbar from '../navbar/Navbar';
import Hero from '../hero/Hero';
import Card from '../card/Card';
import swimAthlete from '../../assets/images/swim_athlete.png';
import { cardsData } from '../../data/data';

/*
Challenge:
- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/

export default function App() {

  const cards = cardsData.map(cardData => {
    return <Card
      key={cardData.id.toString()} 
      cardData={cardData}
    />  
  });

  return (
    <div className="app">
      <Navbar/>
      <Hero/>
      <section className="cards">
        {cards}
      </section>
    </div>
  );
}