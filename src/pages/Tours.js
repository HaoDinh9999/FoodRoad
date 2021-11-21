import React from 'react';
import '../App.css';
import { Breadcrumbs, Link, Typography, Container, Grid, Box } from '@mui/material';
import Tourheader from '../components/tour/TourHeader';
import Tourfilters from '../components/tour/TourFilter';
import { grey, red } from '@mui/material/colors';
import { Typographyf14light, TypographyMod, TypographyModWarning } from '../components/tour/TypoUtils';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Tour from '../components/tour/Tour';
import Chip from '@mui/material/Chip';
import { SlideShow } from '../components/tour/FlashSaleSlide';
export default function Tours() {
	return (
		<div className="">
			<Container fixed sx={{ mb: 2 }}>
				<Breadcrumbs aria-label="breadcrumb">
					<Link underline="hover" color="inherit" href="/">
						Home
					</Link>
					<Typography color="text.primary">Tours</Typography>
				</Breadcrumbs>
				<Tourheader />
			</Container>
			<Box style={{ backgroundColor: grey[200], height: "100%" }}>
				<Container fixed>
					<Grid container>
						<Grid item xs={4} sx={{ pb: 2 }}>
							<Tourfilters />
						</Grid>
						<Grid item xs={8} sx={{ mb: 2 }}>
							<Box>
								{/* Tours Filters */}
								<Box>
									<Box >

									</Box>
								</Box>
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
						</Grid>
					</Grid>
				</Container>
			</Box>
		</div>
	)
}
