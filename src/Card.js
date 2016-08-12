import React from 'react';
import { Paper, Badge } from 'material-ui';
import { Grid, Row, Col } from 'react-bootstrap'
import CheckIcon from 'material-ui/svg-icons/action/done';
import XIcon from 'material-ui/svg-icons/content/add';
import ReactCountdownClock from './third-party/react-countdown-clock';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './Card.css';

const Card = (props) => {
  let score = (props.correct * 100) - (props.incorrect * 50)
  return  <div>
            <MuiThemeProvider>
              <Paper className='Card' zDepth={2} style={{backgroundColor: 'rgba(255, 255, 255, 0.9)'}}>
                <Grid fluid>
                  <Row className='Card-Contents'>
                      <Col xs={12} sm={4} md={4} lg={4} className='Countdown'>
                        <div id='clock'>
                          <ReactCountdownClock 
                            seconds={props.time}
                            color="purple"
                            alpha={0.9}
                            size={100}
                            onComplete={props.onFailure} 
                          />
                        </div>
                      </Col>
                      <Col xs={12} sm={4} md={4} lg={4} className='Question'>
                        <h1>{props.question}</h1>
                        <input
                          autoFocus={true}
                          placeholder='Answer'
                          maxLength={3}
                          style={{width: 80, fontSize: 18}}
                          onKeyDown={props.onSubmit}
                        />
                      </Col>
                      <Col xs={12} sm={4} md={4} lg={4} className='Badges'>
                        <Badge 
                          badgeContent={props.correct} 
                          secondary={true} 
                          badgeStyle={{top: 12, right: 12}}
                        >
                          <CheckIcon />
                        </Badge>
                        <Badge 
                          badgeContent={props.incorrect} 
                          primary={true} 
                          badgeStyle={{top: 12, right: 12}}
                        >
                          <XIcon className='xIcon' />
                        </Badge>
                        <h3><span className='Score'>Total score:</span> {score}</h3>
                        <h3><span className='High-Score'>High score:</span> {props.highScore}</h3>
                      </Col>
                  </Row>
                </Grid>
              </Paper>
            </MuiThemeProvider>
          </div>
}

export default Card;
