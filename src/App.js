import React, { Component } from 'react';
import styled from 'styled-components';
const _ = require("underscore")
let emojis = require('emojis')

const ReviewsContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

.emoji {
    margin-bottom: .25em;
    vertical-align: middle;
  }

  .widthsetter {
      width: 25px;
  }
 
`

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            reviews: [
                {
                stars: 5,
                emojiType: '+1',
                review: 'I am very happy with the craftsmanship & can’t wait to show these off to my friends & famil',
                reviewer: 'MOTHER NATURE'
                },
                {
                stars: 4,
                emojiType: 'star',
                review: 'super cool totally different take on wall art',
                reviewer: 'MICKEY MOUSE'
                }
            ]
        }
    }


      render() {        
        const iteratedReviews = this.state.reviews.map((item, key) =>
        <div key={item}>
                <div>
                    {
                    _.times( item.stars, () => emojis.unicode(`${item.emojiType}`))
                    }
                </div>
                <div>
                    <p>"{item.review}"</p>
                </div>
                <h5>-{item.reviewer}</h5>
            </div>
        );

        return (
            <ReviewsContainer>
                <h3>why waluv</h3>
                    {iteratedReviews}        
            </ReviewsContainer>
        );
    }
}


export default App;