import React from 'react';
import { Breadcrumbs, Link, Typography, Container, Grid, Box } from '@mui/material';
import OrderOption from '../components/order/OrderOptions';
import OrderList from '../components/order/OrderList';
import OrderHistoryList from '../components/order/OrderHistoryList';
import { grey } from '@mui/material/colors';
import OrderDetail from '../components/order/OrderDetail';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Order = () => {
    return (
        <div>
            <Container fixed sx={{ mb: 2, backgroundColor: grey[200] }}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        Home
                    </Link>
                    <Link underline="hover" color="inherit" href="/">
                        Tours
                    </Link>
                    <Typography color="text.primary">Orders</Typography>
                </Breadcrumbs>
                <Grid container>
                    <Grid item xs={3}>
                        <OrderOption />
                    </Grid>
                    <Grid item xs={8} sx={{ ml: 5 }}>
                        <Router>
                            <Switch>
                                <Route path="/order" exact component={OrderList} />
                                <Route path="/order/detail" component={OrderDetail} />
                                <Route path="/order/history" component={OrderHistoryList} />
                            </Switch>
                        </Router>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Order;
