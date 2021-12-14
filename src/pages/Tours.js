import React from 'react';
import '../App.css';
import { Breadcrumbs, Link, Typography, Container, Grid, Box } from '@mui/material';
import Tourheader from '../components/tour/TourHeader';
import TourFilters from '../components/tour/TourFilter';
import { red, } from '@mui/material/colors';
import { Pagination } from '@mui/material';
import { TypographyMod } from '../components/tour/TypoUtils';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeIcon from '@mui/icons-material/Home';
import Tour from '../components/tour/Tour';
import useMediaQuery from "@mui/material/useMediaQuery"
import DropDownTourFilter from '../components/tour/DropDownFilter';
const data = [
	{
		image: "./images/cards/card-image1.jpg",
		name: "Saigon Barbecue",
		salePrice: 89,
		price: 69,
		reviewNum: 200,
		properties: [
			"Free cancellation",
			"Properties with special offers"
		],
		tags: [
			"Wine&Beer"
		],
		rating: 5
	},
	{
		image: "./images/cards/card-image2.jpg",
		name: "In Love With Saigon",
		salePrice: 89,
		price: 59,
		reviewNum: 250,
		properties: [
			"Free cancellation",
			"Properties with special offers"
		],
		tags: [
			"Best Tours",
			"Wine&Beer"
		],
		rating: 4
	},
	{
		image: "./images/cards/card-image3.jpg",
		name: "Saigon Vegan",
		salePrice: 109,
		price: 49,
		reviewNum: 50,
		properties: [
			"Free cancellation",
			"Reverse now, pay at stay"
		],
		tags: [
			"Vegan",
			"Wine&Beer",
		],
		rating: 4
	},
	{
		image: "./images/cards/card-image4.jpg",
		name: "Saigon BackStreet",
		salePrice: 79,
		price: 39,
		reviewNum: 80,
		properties: [
			"Free cancellation",
			"Properties with special offers"
		],
		tags: [
			"Wine&Beer"
		],
		rating: 3
	},
	{
		image: "./images/cards/card-image5.jpg",
		name: "In Love With Saigon",
		salePrice: 89,
		price: 59,
		reviewNum: 250,
		properties: [
			"Free cancellation",
			"Properties with special offers"
		],
		tags: [
			"Vegan",
			"Best Tours"
		],
		rating: 4
	},
]
export default function Tours() {
	const matches = useMediaQuery('(min-width:1108px)')
	return (
		<div className="">
			<Container fluid sx={{ mb: 2 }}>
				<Box display="flex">
					<HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />

					<Breadcrumbs
						separator={<NavigateNextIcon fontSize="small" />}
						aria-label="breadcrumb"
					>
						<Link underline="hover" key="1" color="inherit" href="/" >
							FoodRoad
						</Link>,
						<Link
							underline="hover"
							key="2"
							color="inherit"
							href="/tours"
						>
							Tours
						</Link>,
					</Breadcrumbs>
				</Box>
				<Tourheader />
			</Container>
			<Box style={{ backgroundColor: "#F6F9FC", height: "100%" }}>
				<Container fluid>
					<Grid container>
						<Grid item xs={0} md={0} lg={4} sx={{ pb: 2 }}>
							{matches ? (<TourFilters />) : (
								<DropDownTourFilter />
							)}
						</Grid>
						<Grid item xs={12} md={8} lg={8} sx={{ mb: 2 }}>
							<Box>
								{/* Tour banner */}
								<Box sx={{ backgroundColor: "white", p: 2, m: "7px 0 7px 0", borderRadius: "7px" }}>
									<Box display="flex">
										<LocalOfferIcon />
										<Typography variant="h6" component="h2" fontSize="18px" fontWeight="medium" color={red[600]} sx={{ ml: 2, mr: 2 }}>Hot deals</Typography>
										<Box sx={{ ml: 2 }}>
											<TypographyMod fontSize="16px" >We offers varieyy of Food Tours which are suitable for everyone</TypographyMod>
										</Box>
									</Box>

								</Box>
							</Box>
							{
								data.map((item, index) => {
									return (
										<Box sx={{ mt: 1 }}>
											<Tour {...item} key={index} />
										</Box>
									)
								})
							}

							<Box display="flex" sx={{ justifyContent: "center", mb: 1, mt: 2 }}>
								<Pagination count={4} />
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</div>
	)
}
