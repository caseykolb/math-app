import React from 'react';
import { Paper, List, ListItem } from 'material-ui';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './Milestones.css';

const Milestones = (props) => {
	return <div className='Milestones'>
		<MuiThemeProvider>
			<Paper zDepth={3} style={{backgroundColor: 'rgba(74, 48, 65, 0.7)'}}>
				<h3 className='Milestone-Title'>Milestones</h3>
				<List>
					{(props.milestones.length !== 0) 
						? props.milestones.map((milestone) => {
								return <ListItem 
									style={{color: 'white'}}
									primaryText={'Milestone reached: ' + milestone.toString() + ' Points!'} 
									leftIcon={<ActionGrade color='yellow'/>} 
								/>
							})
						: <h4 className='Milestone'>You haven't reached any milestones yet.</h4>
					}
				</List>
			</Paper>
		</MuiThemeProvider>
	</div>
}


export default Milestones;