
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Button, Grid } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Favorite from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Checkbox } from '@mui/material';
import { blue, pink } from '@mui/material/colors';
import "./carditem.css"
import { Box } from '@mui/system';

const BestSellerMedia = (props) => {
	return (
		<>
			<Box sx={{ position: 'relative' }}>
				<CardMedia
					component="img"
					height="194"
					image={props.src}
					alt="tour image"
					className="media"
				/>
				<Box
					sx={{
						position: 'absolute',
						top: 0,
						left: 212,
						width: '100%',
						// bgcolor: 'rgba(0, 0, 0, 0.54)',
						color: 'white',
					}}
				>
					<img src="/images/cards/bestseller_tag.png" />
					{/* <Typography variant="body2">Subtitle</Typography> */}
				</Box>
			</Box>
		</>
	)
}
const NormalMedia = (props) => {
	return (
		<CardMedia
			component="img"
			height="194"
			image={props.src}
			alt="tour image"
			className="media"
		/>
	)
}
const showMedia = (isBestSeller, src) => {
	if (isBestSeller) {
		return <NormalMedia src={src} />;
	} else {
		return <BestSellerMedia src={src} />
	}
}
export default function CardItem(props) {
	const { src, title, content, isBestSeller, timeStart, timeEnd, price, concurency } = props
	return (
		<Card sx={{ maxWidth: 380 }} className="card">
			{showMedia(isBestSeller, src)}
			<CardHeader title={title} xs={{ pb: 0 }} className="text-uppercase" />
			<CardContent sx={{ pt: 0, pb: 0 }}>
				<Grid container className="border-btm">
					<Grid item xs={9}>
						<Typography variant="subtitle2">
							<AccessAlarmIcon />
							{timeEnd} - {timeStart}
						</Typography>
					</Grid>
					<Grid item >
						<Typography variant="h6" className="price-txt">
							{price} {concurency}
						</Typography>
					</Grid>
				</Grid>
				<Typography variant="body1" color="text.secondary">
					{content}
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				{/* <IconButton aria-label="add to favorites" className="favourite-icon">
          <FavoriteIcon />
        </IconButton> */}
				{/* <IconButton aria-label="share" className="share-icon">
          <ShareIcon  />
        </IconButton> */}
				<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />}
					sx={{
						color: pink[800],
						'&.Mui-checked': {
							color: pink[600],
						},
					}} />
				<Checkbox icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />}
					sx={{
						color: blue[800],
						'&.Mui-checked': {
							color: blue[600],
						},
					}}
				/>
				<Button className="book-now-btn" variant="contained" color="error">
					Book Now
				</Button>
			</CardActions>
		</Card>
	);
}