import React from 'react';
import { Link, Typography, Container, Grid, Box } from '@mui/material';
import OrderOption from '../components/order/OrderOptions';
import OrderList from '../components/order/OrderList';
import OrderHistoryList from '../components/order/OrderHistoryList';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Breadcrumbs } from '@mui/material';
import { lightBlue, cyan } from '@mui/material/colors';
import OrderDetail from '../components/order/OrderDetail';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
const Order = () => {

    return (
        <Box sx={{ backgroundColor: "#F6F9FC" }}>

            <Container fixed sx={{ mb: 1, mt: 1, backgroundColor: "#F6F9FC" }}>
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
                        <Typography key="3" color="black">
                            Orders
                        </Typography>
                    </Breadcrumbs>
                </Box>
                <Grid container>
                    <Grid item xs={3}>
                        <OrderOption />
                    </Grid>
                    <Grid item xs={8} sx={{ ml: 5 }}>
                        <Router>
                            <Switch>
                                <Route path="/order" exact component={OrderList} />
                                <Route exact path="/order/detail" component={OrderDetail} />
                                <Route exact path="/order/history" component={OrderHistoryList} />
                            </Switch>
                        </Router>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Order;
