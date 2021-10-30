import './App.css';
import React from 'react'
import Calculator from "./calculator/src/index.js";
import Dice from 'react-dice-roll';
import ReactCardFlip from 'react-card-flip';


function App() {

  const handleInput = (input) => {
    console.log(`${input.expression} is shown in the calculator, User clicked the ${input.key}`)
  }

  const onResultChange = (newResult) => {
    console.log(newResult)
    console.log(`${newResult.expression} is validated as ${newResult.result} `)
  }

  const [isChanceFlipped, setIsChanceFlipped] = React.useState(false)
  const [isChestFlipped, setIsChestFlipped] = React.useState(false)

  const handleClickChance = (e) => {
    e.preventDefault()
    setIsChanceFlipped(!isChanceFlipped)
  }

  const handleClickChest = (e) => {
    e.preventDefault()
    setIsChestFlipped(!isChestFlipped)
  }

  return (
    <div className="App">
      <div className='cards-box'>
      <div class="row">
        <div class="column">
          <ReactCardFlip isFlipped={isChanceFlipped}>
            {/* <img src={require("./img/chance.png")} onClick={handleClick} alt="chance card" /> */}
            <div className='card-box'>
              <img className='card' src={'https://i.pinimg.com/originals/23/3e/ff/233eff1a0bcd8812bf8ba73fd94235bc.jpg'} onClick={handleClickChance} alt="chance card" />
            </div>

            <div className='card-box'>
              <img className='card' src={require('./img/chance.png').default} onClick={handleClickChance} alt="chance card" />
            </div>
            
            {/* <img src={require("./img/chest.png")} onClick={handleClick} alt="chest card" /> */}
          </ReactCardFlip>
        </div>
        <div class="column">
          <ReactCardFlip isFlipped={isChestFlipped}>
            {/* <img src={require("./img/chance.png")} onClick={handleClick} alt="chance card" /> */}
            <div className='card-box'>
              <img className='card' src={'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/community-chest-vintage-monopoly-board-game-theme-card-design-turnpike.jpg'} onClick={handleClickChest} alt="chest card" />
            </div>

            <div className='card-box'>
              <img className='card' src={require('./img/chest.png').default} onClick={handleClickChest} alt="chest card" />
            </div>
            
            {/* <img src={require("./img/chest.png")} onClick={handleClick} alt="chest card" /> */}
          </ReactCardFlip>
        </div>
      </div> 

      </div>
      <div className='calc-box'>
        <Calculator
        onNewInput={handleInput}
        onResultChange={onResultChange}/>
      </div>
      <div className='dice-box'>
        <Dice onRoll={(value) => console.log(value)} size={100} />
      </div>
      
    </div>
  );

  
}

export default App;
