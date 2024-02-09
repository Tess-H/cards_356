//used chatgpt for debugging
//used tutorial from https://www.youtube.com/watch?v=ZCKohZwGZMw
//images from icon8

import './App.css'
import { useState, useEffect } from "react";
import SingleCard from './components/SingleCard';
import Timer from './components/Timer';

const cardFantasyEasy = [
  { src: "img/helmet.png", matched: false },
  { src: "img/potion.png", matched: false },
  { src: "img/dragon.png", matched: false },
  { src: "img/wand.png", matched: false }
];

const cardFantasy = [
  { src: "img/helmet.png", matched: false },
  { src: "img/potion.png", matched: false },
  { src: "img/dragon.png", matched: false },
  { src: "img/wand.png", matched: false },
  { src: "img/unicorn.png", matched: false },
  { src: "img/sword.png", matched: false },
];

const cardFantasyHard = [
  { src: "img/helmet.png", matched: false },
  { src: "img/potion.png", matched: false },
  { src: "img/dragon.png", matched: false },
  { src: "img/wand.png", matched: false },
  { src: "img/unicorn.png", matched: false },
  { src: "img/sword.png", matched: false },
  { src: "img/sheild.png", matched: false },
  { src: "img/crystal.png", matched: false },
];

const cardSportsEasy = [
  { src: "img/throw.png", matched: false },
  { src: "img/ball.png", matched: false },
  { src: "img/shoe.png", matched: false },
  { src: "img/swim.png", matched: false },
];

const cardSports = [
  { src: "img/throw.png", matched: false },
  { src: "img/ball.png", matched: false },
  { src: "img/shoe.png", matched: false },
  { src: "img/swim.png", matched: false },
  { src: "img/football.png", matched: false },
  { src: "img/trophy.png", matched: false },
];

const cardSportsHard = [
  { src: "img/throw.png", matched: false },
  { src: "img/ball.png", matched: false },
  { src: "img/shoe.png", matched: false },
  { src: "img/swim.png", matched: false },
  { src: "img/football.png", matched: false },
  { src: "img/trophy.png", matched: false },
  { src: "img/bowling.png", matched: false },
  { src: "img/pong.png", matched: false },
];

const cardGamesEasy = [
  { src: "img/elden.png", matched: false },
  { src: "img/mario.png", matched: false },
  { src: "img/pokeball.png", matched: false },
  { src: "img/destiny.png", matched: false },
];

const cardGames = [
  { src: "img/destiny.png", matched: false },
  { src: "img/hollow.png", matched: false },
  { src: "img/valorant.png", matched: false },
  { src: "img/elden.png", matched: false },
  { src: "img/mario.png", matched: false },
  { src: "img/pokeball.png", matched: false },
];

const cardGamesHard = [
  { src: "img/destiny.png", matched: false },
  { src: "img/hollow.png", matched: false },
  { src: "img/valorant.png", matched: false },
  { src: "img/elden.png", matched: false },
  { src: "img/mario.png", matched: false },
  { src: "img/pokeball.png", matched: false },
  { src: "img/diablo.png", matched: false },
  { src: "img/sv.png", matched: false },
];

const cardAnimalsEasy = [
  { src: "img/dog.png", matched: false },
  { src: "img/bug.png", matched: false },
  { src: "img/cat.png", matched: false },
  { src: "img/chick.png", matched: false },
];

const cardAnimals = [
  { src: "img/frog.png", matched: false },
  { src: "img/dog.png", matched: false },
  { src: "img/bug.png", matched: false },
  { src: "chick.png", matched: false },
  { src: "img/cat.png", matched: false },
  { src: "img/camel.png", matched: false },
];

const cardAnimalsHard = [
  { src: "img/frog.png", matched: false },
  { src: "img/dog.png", matched: false },
  { src: "img/bug.png", matched: false },
  { src: "img/chick.png", matched: false },
  { src: "img/cat.png", matched: false },
  { src: "img/camel.png", matched: false },
  { src: "img/owl.png", matched: false },
  { src: "img/penguin.png", matched: false },
];


const cardFoodsEasy = [
  { src: "img/pancake.png", matched: false },
  { src: "img/pizza.png", matched: false },
  { src: "img/dumpling.png", matched: false },
  { src: "img/taco.png", matched: false },
];

const cardFoods = [
  { src: "img/pancake.png", matched: false },
  { src: "img/pizza.png", matched: false },
  { src: "img/dumpling.png", matched: false },
  { src: "img/kfc.png", matched: false },
  { src: "img/taco.png", matched: false },
  { src: "img/cake.png", matched: false },
];

const cardFoodsHard = [
  { src: "img/pancake.png", matched: false },
  { src: "img/pizza.png", matched: false },
  { src: "img/dumpling.png", matched: false },
  { src: "img/kfc.png", matched: false },
  { src: "img/taco.png", matched: false },
  { src: "img/cake.png", matched: false },
  { src: "img/cotton.png", matched: false },
  { src: "img/burger.png", matched: false },
];

const cardStarWarsEasy = [
  { src: "img/trooper.png", matched: false },
  { src: "img/vader.png", matched: false },
  { src: "img/r2.png", matched: false },
  { src: "img/mf.png", matched: false },
];

const cardStarWars = [
  { src: "img/trooper.png", matched: false },
  { src: "img/vader.png", matched: false },
  { src: "img/star.png", matched: false },
  { src: "img/r2.png", matched: false },
  { src: "img/mf.png", matched: false },
  { src: "img/at.png", matched: false },
];

const cardStarWarsHard = [
  { src: "img/trooper.png", matched: false },
  { src: "img/vader.png", matched: false },
  { src: "img/star.png", matched: false },
  { src: "img/r2.png", matched: false },
  { src: "img/mf.png", matched: false },
  { src: "img/at.png", matched: false },
  { src: "img/c3po.png", matched: false },
  { src: "img/rebel.png", matched: false },
];

const cardRetroEasy = [
  { src: "img/phone.png", matched: false },
  { src: "img/atari.png", matched: false },
  { src: "img/floppy.png", matched: false },
  { src: "img/cassette.png", matched: false },
];

const cardRetro = [
  { src: "img/comp.png", matched: false },
  { src: "img/phone.png", matched: false },
  { src: "img/atari.png", matched: false },
  { src: "img/cassette.png", matched: false },
  { src: "img/cam.png", matched: false },
  { src: "img/floppy.png", matched: false },
];

const cardRetroHard = [
  { src: "img/comp.png", matched: false },
  { src: "img/phone.png", matched: false },
  { src: "img/atari.png", matched: false },
  { src: "img/cassette.png", matched: false },
  { src: "img/cam.png", matched: false },
  { src: "img/floppy.png", matched: false },
  { src: "img/news.png", matched: false },
  { src: "img/film.png", matched: false },
];


function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [theme, setTheme] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [firstButton, setFirstButton] = useState(false);
  const [secondButton, setSecondButton] = useState(false);
  const [insaneButton, setInsaneButton] = useState(false);
  const [newButton, setNewButton] = useState(false);
  const[choiceOne, setChoiceOne] = useState(null);
  const[choiceTwo, setChoiceTwo] = useState(null);
  const[disable, setDisabled] = useState(false);

    
  //sets and bools
  const setSelectedTheme = (t) => {
    setTheme(t)
  }
  const handleFirstButtonClick = () => {
    setFirstButton(true)
    setNewButton(false)
    //make sure to set back to false when doing a new game
  }
  const handleSecondButtonClick = () => {
    setSecondButton(true)
    setNewButton(false)
    //make sure to set back to false when doing a new game
  }
  const handleNewButtonClick = () => {
    setFirstButton(false)
    setSecondButton(false)
    setNewButton(true)
    setInsaneButton(false)
    //make sure to set back to false when doing a new game
  }
  const handleTimeout = () => {
    setFirstButton(false)
    setSecondButton(false)
    setNewButton(true)
    setInsaneButton(false)
  };

  //assign theme for shuffle cards funcs
  const findThemeAndDiff = (diff) => {
    if(theme === "Fantasy" && diff === "Easy"){
      return cardFantasyEasy
    }
    else if(theme === "Fantasy" && diff === "Medium"){
      return cardFantasy
    }
    else if((theme === "Fantasy") && (diff === "Hard" || diff === "Insane")){
      return cardFantasyHard
    }
    else if (theme === "Sports" && diff === "Easy"){
      return cardSportsEasy
    }
    else if(theme === "Sports" && diff === "Medium"){
      return cardSports
    }
    else if(theme === "Sports" && (diff === "Hard" || diff === "Insane")){
      return cardSportsHard
    }
    else if(theme === "Gaming" && diff === "Easy"){
      return cardGamesEasy
    }
    else if(theme === "Gaming" && diff === "Medium"){
      return cardGames
    }
    else if(theme === "Gaming" && (diff === "Hard" || diff === "Insane")){
      return cardGamesHard
    }
    else if (theme === "Animals" && diff === "Easy"){
      return cardAnimalsEasy
    }
    else if (theme === "Animals" && diff === "Medium"){
      return cardAnimals
    }
    else if (theme === "Animals" && (diff === "Hard" || diff === "Insane")){
      return cardAnimalsHard
    }
    else if (theme === "Star Wars" && diff === "Easy"){
      return cardStarWarsEasy
    }
    else if (theme === "Star Wars" && diff === "Medium"){
      return cardStarWars
    }
    else if (theme === "Star Wars" && (diff === "Hard" || diff === "Insane")){
      return cardStarWarsHard
    }
    else if (theme === "Food" && diff === "Easy"){
      return cardFoodsEasy
    }
    else if (theme === "Food" && diff === "Medium"){
      return cardFoods
    }
    else if (theme === "Food" && (diff === "Hard" || diff === "Insane")){
      return cardFoodsHard
    }
    else if (theme === "Retro" && diff === "Easy"){
      return cardRetroEasy
    }
    else if (theme === "Retro" && diff === "Medium"){
      return cardRetro
    }
    else {
      return cardRetroHard
    }
  }

  //shuffle cards
  const shuffleCards2Easy = (difficulty) => {
    const cardTheme = findThemeAndDiff(difficulty)
    const randomChance = Math.floor(Math.random() * cardTheme.length)
    console.log(randomChance)

    const shuffledCards = [cardTheme[randomChance],cardTheme[randomChance]]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  const shuffleCards = (difficulty) => {
    const cardTheme = findThemeAndDiff(difficulty)
    const shuffledCards = [...cardTheme, ...cardTheme]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  //handle a choice
  const handleChoice = (card) => {
    //if null/false update choice1 else update choice2
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  //compare two selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true)
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  //reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  return (
    <div className="App">
      <h1>Memory Match</h1>

      {!secondButton && <div className="theme_row">
        <h3>Theme: </h3>
        <button onClick={() => {setSelectedTheme("Fantasy"); handleFirstButtonClick()}}>Fantasy</button>
        <button onClick={() => {setSelectedTheme("Sports"); handleFirstButtonClick()}}>Sports</button>
        <button onClick={() => {setSelectedTheme("Gaming"); handleFirstButtonClick()}}>Gaming</button>
        <button onClick={() => {setSelectedTheme("Animals"); handleFirstButtonClick()}}>Animals</button>
        <button onClick={() => {setSelectedTheme("Star Wars"); handleFirstButtonClick()}}>Star Wars</button>
        <button onClick={() => {setSelectedTheme("Food"); handleFirstButtonClick()}}>Food</button>
        <button onClick={() => {setSelectedTheme("Retro"); handleFirstButtonClick()}}>Retro</button>
      </div>}

      {!secondButton && firstButton && <div className="diff_row">
        <h3>Difficulty: </h3>
        <button onClick={() => {shuffleCards2Easy("Hard"); handleSecondButtonClick()}}>Too Easy</button>
        <button onClick={() => {shuffleCards("Easy"); handleSecondButtonClick()}}>Easy</button>
        <button onClick={() => {shuffleCards("Medium"); handleSecondButtonClick()}}>Medium</button>
        <button onClick={() => {shuffleCards("Hard"); handleSecondButtonClick()}}>Hard</button>
        <button onClick={() => {setDifficulty("Insane"); shuffleCards("Insane"); handleSecondButtonClick(); setInsaneButton(true)}}>Too Hard</button>
      </div>}

      {secondButton && insaneButton && <div>
        <h3>Countdown Timer</h3>
        <Timer initialTime={30} difficulty={difficulty} onTimeout={handleTimeout} />
      </div>}

      {secondButton && <div className="card-grid">
        {cards.map((card) => (
          <SingleCard 
            key={card.id} 
            card = {card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disable={disable}
            />
        ))}
      </div>}

      {secondButton && <div>
        <p>Turns: {turns}</p>
      <button  onClick={() => {handleNewButtonClick()}}>New Game</button>
      </div>}

    </div>
  );
}

export default App
