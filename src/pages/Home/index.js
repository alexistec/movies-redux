import React,{useState} from 'react';
import {Container,Typography, Card, Grid,TextField,Button} from '@material-ui/core'

import styles from './style';
import {MovieIcon} from '../../icons/';


export default ({history}) => {
	const [searchText,setSearchText] = useState('');
	const classes = styles();
	const handleSearchTextChange = event =>{
		setSearchText(event.target.value);
	}

	const handleCleanTextClick = event =>{

	};

	const handleSearchTextClick = event =>{
		history.push(`/results?movieName=${searchText}`);
	};

	return(
		<Container className={classes.container}>
			<Card className={classes.cardContainer}>
				<Grid container className={classes.titleGridContainer}>
					<Grid>
						<Typography className={classes.title}>Welcome !</Typography>
					</Grid>
					<Grid>
						<label><MovieIcon className={classes.movieIcon}/></label>
					</Grid>
				</Grid>
				<TextField
					value={searchText}
					placeholder="Search..."
					onChange={handleSearchTextChange}
					className={classes.TextFieldSearch}
				/>
				<Grid className={classes.buttonsContainer}>
					<Button variant="contained" onClick={handleCleanTextClick}>Clear</Button>
					<Button variant="contained" className={classes.searchButton} color="primary" size="large" onClick={handleSearchTextClick}>Search</Button>	
				</Grid>
			</Card>
		</Container>
	)
}