import './App.css';
import React from 'react';

function App() {
  let quotes = [
    { "Nelson Mandela": 'The greatest glory in living lies not in never falling, but in rising every time we fall.' },
    { "Steve Jobs": "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking." },
    { "Eleanor Roosevelt": 'The future belongs to those who believe in the beauty of their dreams.' },
    { "Walt Disney": "The way to get started is to quit talking and begin doing." },
    { "Mother Teresa": 'Spread love everywhere you go. Let no one ever come to you without leaving happier.' },
    { "Franklin D. Roosevelt": 'The only thing we have to fear is fear itself.' },
    { "John Lenon":"You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one."},
    { "James Cameron": "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success." },
    { "Martin Luther King Jr.": "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that." },
    { "Helen Keller": "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart." },
    { "Ralph Waldo Emerson": "Do not go where the path may lead, go instead where there is no path and leave a trail." },
    { "Oscar Wilde": "Be yourself; everyone else is already taken." },
    { "Benjamin Franklin": "Well done is better than well said." },
    { "Mother Teresa": "In this life we cannot do great things. We can only do small things with great love." },
    { "Thomas Edison": "Many of life's failures are people who did not realize how close they were to success when they gave up." },
    { "Dr. Seuss": "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose." },
    { "Abraham Lincoln": "Don't worry when you are not recognized but strive to be worthy of recognition." },
    { "John D. Rockefeller Jr.": "The secret of success is to do the common thing uncommonly well." },
    ]

    let index = Math.floor(Math.random() * quotes.length);
    
    class Quotes extends React.Component {
      constructor(props) {
        super(props);
        const initialIndex = Math.floor(Math.random() * quotes.length);
        const initialQuoteObj = quotes[initialIndex];
        const initialQuote = Object.values(initialQuoteObj);
        const initialAuthor = Object.keys(initialQuoteObj);
        
        //Choose background color initial
        const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        document.body.style.backgroundColor = randomColor;
        
        this.state = { quote: initialQuote, author: initialAuthor }
        this.newQuote = this.newQuote.bind(this)
      }
    
      newQuote() {
        index = Math.floor(Math.random() * quotes.length);
        const quoteObj = quotes[index];
        const quote = Object.values(quoteObj);
        const author = Object.keys(quoteObj);
        this.setState({ quote: quote, author: author });
        //Change background color randomly
        const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        document.body.style.backgroundColor = randomColor;
      }
    
      render() {
        return (
          <div id="quote-box">
            <div className="box-1">
              <p id="text" className='quote'><i class="fa-solid fa-quote-left"></i> {this.state.quote} <i class="fa-solid fa-quote-right"></i></p>
              <p id="author" className='author'>{this.state.author}</p>
            </div>
            <div className="box-2">
            <div className="row justify-content-center align-items-center">
              <div className="col-xs-10">
                <button className="btn btn-primary" id="new-quote" onClick={this.newQuote}>New Quote</button><br />
              </div>
              <div className="col-xs-1">
                <a id="tweet-quote" href="twitter.com/intent/tweet"><i class="fa-brands fa-twitter"></i></a>
              </div>
            </div>
    
            </div>
          </div>
        )
      }
    }

    return (
      <Quotes />
    )
}

export default App;