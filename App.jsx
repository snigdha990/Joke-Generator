import React from 'react';
import Joke from './Joke.jsx';
import jokeData from './JokeData.jsx'
import './index.css';


export default function App() {
    const jokes = jokeData.map((joke, index) => (
        <Joke 
            key={joke.id || index}
            setup={joke.setup}
            punchline={joke.punchline}
        />
    ));

    return (
        <div className="joke-list">
           <i> <h1 className='JokePageHeading'>🤣 Joke Generator</h1></i>
            {jokes}
        </div>
    );
}
