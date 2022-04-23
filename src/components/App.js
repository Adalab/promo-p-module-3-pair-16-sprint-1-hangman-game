import '../styles/App.scss';
import { useState } from 'react';

function App() {
  //const [numberOfErrors, setNumberOfErrors] = useState(0);
  const [lastLetter, setLastLetter] = useState('');
  const [word, setWord] = useState('katakroker');
  const [userLetters, setUserLetters] = useState([]);

  const renderErrorLetters = () => {
    const wordLetters = word.split('');
    const errorLetters = userLetters.filter(
      (eachLetter) => !wordLetters.includes(eachLetter)
    );
    return errorLetters.map((eachLetter, index) => (
      <li key={index} className='letter'>
        {eachLetter}
      </li>
    ));
  };

  const calculateErorNumber = () => {
    const wordLetters = word.split('');
    const errorLetters = userLetters.filter(
      (eachLetter) => !wordLetters.includes(eachLetter)
    );
    if (errorLetters.length <= 13) {
      return errorLetters.length;
    }
  };
  const endGame = () => {
    const wordLetters = word.split('');
    const correctLetters = wordLetters.filter((eachLetter) =>
      userLetters.includes(eachLetter)
    );
    const errorLetters = userLetters.filter(
      (eachLetter) => !wordLetters.includes(eachLetter)
    );
    if (correctLetters.length === wordLetters.length) {
      return (
        <section className='end'>
          <p className='end__message'>¡Has ganado!</p>
        </section>
      );
    }
    if (errorLetters.length === 13) {
      return (
        <section className='end'>
          <p className='end__message'>¡Has perdido! La solución era {word}</p>
        </section>
      );
    }
  };

  const renderSolutionLetters = () => {
    const wordLetters = word.split('');
    return wordLetters.map((wordletter, index) => {
      if (userLetters.includes(wordletter)) {
        return (
          <li className='letter' key={index}>
            {wordletter}
          </li>
        );
      } else {
        return <li className='letter' key={index}></li>;
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleInput = (event) => {
    const inputValue = event.currentTarget.value;
    const regex = new RegExp('^[a-zA-Z\u00C0-\u00FF]*$');
    if (regex.test(inputValue)) {
      setLastLetter(inputValue);
      if (inputValue !== '') {
        setUserLetters([...userLetters, inputValue]);
      }
    }
  };
  {
    /*const handleButton = (event) => {
    event.preventDefault();
    setNumberOfErrors(numberOfErrors + 1);
  };*/
  }
  return (
    <div className='page'>
      <header>
        <h1 className='header__title'>Juego del ahorcado</h1>
      </header>
      <main className='main'>
        <section>
          <div className='solution'>
            <h2 className='title'>Solución:</h2>
            <ul className='letters'>{renderSolutionLetters()}</ul>
          </div>
          <div className='error'>
            <h2 className='title'>Letras falladas:</h2>
            <ul className='letters'>{renderErrorLetters()}</ul>
          </div>
          <form className='form' onSubmit={handleSubmit}>
            <label className='title' htmlFor='last-letter'>
              Escribe una letra:
            </label>
            <input
              autoComplete='off'
              className='form__input'
              maxLength='1'
              type='text'
              name='last-letter'
              id='last-letter'
              onChange={handleInput}
              value={lastLetter}
            />
          </form>
        </section>
        <section className={`dummy error-${calculateErorNumber()}`}>
          <span className='error-13 eye'></span>
          <span className='error-12 eye'></span>
          <span className='error-11 line'></span>
          <span className='error-10 line'></span>
          <span className='error-9 line'></span>
          <span className='error-8 line'></span>
          <span className='error-7 line'></span>
          <span className='error-6 head'></span>
          <span className='error-5 line'></span>
          <span className='error-4 line'></span>
          <span className='error-3 line'></span>
          <span className='error-2 line'></span>
          <span className='error-1 line'></span>
        </section>
        {endGame()}
        {/*<form action=''>
          <button onClick={handleButton}>Incrementar</button>
  </form>*/}
      </main>
    </div>
  );
}

export default App;
