import React from 'react';
import '../App.css';
import { Breadcrumbs, Link, Typography, Container, Grid, Box } from '@mui/material';
import Tourheader from '../components/tour/TourHeader';
import Tourfilters from '../components/tour/TourFilter';
import { grey, red, cyan } from '@mui/material/colors';
import { Pagination } from '@mui/material';
import { Typographyf14light, TypographyMod, TypographyModWarning } from '../components/tour/TypoUtils';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import HomeIcon from '@mui/icons-material/Home';


import Tour from '../components/tour/Tour';
export default function Tours() {
	return (
		<div className="">
			<Container fixed sx={{ mb: 2 }}>
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
				<Container fixed>
					<Grid container>
						<Grid item xs={4} sx={{ pb: 2 }}>
							<Tourfilters />
						</Grid>
						<Grid item xs={8} sx={{ mb: 2 }}>
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
							<Box sx={{ mt: 1 }}>
								<Tour />
							</Box>
							<Box sx={{ mt: 2 }}>
								<Tour />
							</Box>
							<Box sx={{ mt: 2 }}>
								<Tour />
							</Box>
							<Box sx={{ mt: 2 }}>
								<Tour />
							</Box>
							<Box sx={{ mt: 2 }}>
								<Tour />
							</Box>
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
