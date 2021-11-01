import React, { useState } from 'react';
// import CardItem from "./CardItem"
import CardItem from "./CardItem"
import {FormControlLabel, FormLabel, Grid, FormGroup, FormControl, FormHelperText, Container} from "@mui/material"
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Checkbox from '@mui/material/Checkbox';
import { useEffect } from 'react';
import ListIcon from '@mui/icons-material/List';
import { Collapse } from '@mui/material';
import {data} from './data';
import { IconButton } from '@mui/material';
export default function Cards() {
	const [searchWord, setSearchWord]= useState("")
	const [cardList, setCardList] = useState([])
	const [isChecked, setIsChecked] = useState(false)
	useEffect(() => {
		var res= data.map((item, index) => {
			const {src,title, content, isBestSeller, timeStart, timeEnd, price, concurency, id}= item
			  return (
				<Grid item xs={4} key= {index}>
					<CardItem
					  id= {id}
					  src= {src}
					  title= {title}
					  content={content}
					  isBestSeller={isBestSeller}
					  timeStart={timeStart}
					  timeEnd= {timeEnd}
					  price={price}
					  concurency={concurency}
					/>
				</Grid>
			  )
			})
		  setCardList(res)
	}, []);
	const onChange =(event) => {
		setSearchWord(event.target.value)
		if (searchWord === null || searchWord === "" || searchWord.trim().length <= 2)
		{
			var res= data.map((item, index) => {
				const {src,title, content, isBestSeller, timeStart, timeEnd, price, concurency, id}= item
				  return (
					<Grid item xs={4} key= {index}>
						<CardItem
						  id= {id}
						  src= {src}
						  title= {title}
						  content={content}
						  isBestSeller={isBestSeller}
						  timeStart={timeStart}
						  timeEnd= {timeEnd}
						  price={price}
						  concurency={concurency}
						/>
					</Grid>
				  )
				})
			  setCardList(res)
		} 
		else
		{
			var filtered= data.filter((item) => (item.title.toLowerCase().indexOf(searchWord.toLowerCase()) !== -1));
			var res= filtered.map((item, index) => {
				const {src,title, content, isBestSeller, timeStart, timeEnd, price, concurency, id}= item
				  return (
					<Grid item xs={4} key= {index}>
						<CardItem
						  id= {id}
						  src= {src}
						  title= {title}
						  content={content}
						  isBestSeller={isBestSeller}
						  timeStart={timeStart}
						  timeEnd= {timeEnd}
						  price={price}
						  concurency={concurency}
						/>
					</Grid>
				  )
				})
			  setCardList(res)
		}
	}
  return (
    <div className="container">
    <Grid container  spacing={95}>
    <Grid item>
    <Breadcrumbs aria-label="breadcrumb" sx={{pb:3, pt:3}}>
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
      	<Typography color="text.primary">Tours</Typography>
    </Breadcrumbs>
      </Grid>
      <Grid item>
      <Box sx={{ display: 'flex', alignItems: 'flex-end', pb:3, pt:3 }}>
        <SearchIcon sx={{ color: 'action.active' }} />
        <TextField 
		id="input-with-sx" 
		label="Seach" 
		variant="standard" 
		sx={{width:'36ch'}}
		onChange={(event) => {onChange(event)}}
		value={searchWord}
		name="searchWord"
		/>
		<IconButton onClick={() => {setIsChecked(!isChecked)}}>
		<ListIcon sx={{fontSize:30}}/>
		</IconButton>
      </Box>
      </Grid>
    </Grid>
	<Collapse in={isChecked} sx={{pb:2}}>
	<Box sx={{ display: 'flex' , pt:0}}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
	<Typography variant="subtitle2"> Advanced Search</Typography>
        <FormGroup sx={{display: 'block'}}>
          <FormControlLabel
            control={
              <Checkbox  name="gilad" />
            }
            label="Vegan"
          />
          <FormControlLabel
            control={
              <Checkbox  name="jason" />
            }
            label="Bear"
          />
		  <FormControlLabel
            control={
              <Checkbox  name="gilad" />
            }
            label="Day"
          />
          <FormControlLabel
            control={
              <Checkbox  name="jason" />
            }
            label="Night"
          />
        </FormGroup>
      </FormControl>
    </Box>
        </Collapse>
  <Grid container  spacing={5}>
    {cardList}
  </Grid>
    </div>
  );
}