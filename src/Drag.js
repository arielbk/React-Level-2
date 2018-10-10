import React, { Component } from 'react';
import { Gesture } from 'react-with-gesture';
import { Spring, animated, interpolate } from 'react-spring';
import { Card } from 'Elements';
import styled from 'styled-components';

const AnimCard = Card.withComponent(animated.div);

const DragCard = AnimCard.extend`
  height: 300px;
`;

const CardContainer = styled(animated.div)`
  position: relative;
  max-width: 320px;
  height: auto;
  background: #ddd;
  margin: 35px auto;
  border-radius: 5px;
`;

export default class Drag extends Component {
  onUp = xDelta => () => {
    console.log(xDelta);
    if (xDelta < -200) {
      alert('Remove Card')
    } else if (xDelta > 200) {
      alert('Accept Card');
    }
  }

  render() {
    return (
      <Gesture>
        {({ down, xDelta }) => (
          <Spring
            native
            to={{
              x: down ? xDelta : 0
            }}
            immediate={name => down && name === 'x'}
          >

            {({x}) => (
            <CardContainer style={{
              background: x.interpolate({
                    range: [-250, 250],
                    output: ['#ff1c68', '#14d790'],
                    extrapolate: 'clamp'
              })
            }}>
              <DragCard 
                onMouseUp={this.onUp(xDelta)}
                onTouchEnd={this.onUp(xDelta)}
                style={{
                  transform: interpolate(
                  [
                      x,
                      x.interpolate({
                      range: [-300, 300],
                      output: [-55, 55],
                      extrapolate: 'clamp'
                    })
                  ],
                    (x, rotate, opacity) => (
                      `translateX(${x}px) rotate(${rotate}deg)`
                    )
                  ),
                  opacity: x.interpolate({
                        range: [-300, -100, 0, 100, 300],
                        output: [0, 1, 1, 1, 0 ]
                  }),
              }}>
                <h1>Drag Me</h1>
              </DragCard>
            </CardContainer>
            )}

          </Spring>
        )}
      </Gesture>
    )
  }
}
