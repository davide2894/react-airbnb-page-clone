import './App.scss';
import Navbar from '../navbar/Navbar';
import Hero from '../hero/Hero';
import Card from '../card/Card';
import swimAthlete from '../../assets/images/swim_athlete.png';

/*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/

export default function App() {
  return (
    <div className="app">
      <Navbar/>
      <Hero/>
      <Card
        img={swimAthlete}
        rating="5.0"
        reviewCount=" (6)"
        country="US"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />
    </div>
  );
}