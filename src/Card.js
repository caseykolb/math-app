import React from 'react';
import { Paper, TextField, Badge } from 'material-ui';
import { Grid, Row, Col } from 'react-bootstrap'
import CheckIcon from 'material-ui/svg-icons/action/done';
import XIcon from 'material-ui/svg-icons/content/add';
import ReactCountdownClock from 'react-countdown-clock';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './Card.css';

var Card = (props) => {
  return  <div>
            <MuiThemeProvider>
              <Paper className='Card' zDepth={2}>
                <Grid fluid>
                  <Row className='Card-Contents'>
                      <Col xs={4} sm={4} md={4} lg={4} className='Countdown'>
                        <div id='clock'>
                          <ReactCountdownClock 
                            seconds={props.time}
                            showMilliseconds={true}
                            color="purple"
                            alpha={0.9}
                            size={100}
                            onComplete={props.onFailure} 
                          />
                        </div>
                      </Col>
                      <Col xs={4} sm={4} md={4} lg={4} className='Question'>
                        <h1>{props.question}</h1>
                        <TextField
                          name='Answer' 
                          hintText='Answer'
                          style={{width: 60}}
                          onKeyDown={props.onSubmit.bind(this)}
                        />
                      </Col>
                      <Col xs={4} sm={4} md={4} lg={4} className='Badges'>
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
                      </Col>
                  </Row>
                </Grid>
              </Paper>
            </MuiThemeProvider>
          </div>
}

export default Card;
