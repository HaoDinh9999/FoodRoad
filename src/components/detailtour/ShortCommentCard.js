import React from 'react';
import { Grid, Avatar, Typography, Link, Button } from '@mui/material';
import { Box } from '@mui/system';
import ava from "./card_comment/ava.jpg"
import Reply from './Reply';

const Shortcommentcard = () => {
    return (
        <div>
            <Grid container sx={{ mt: 3, pt: 2, pb: 0, borderBottom: "1px solid gray" }} justifyContent="space-between">
                <Grid item>
                    <Grid container>
                        <Grid item sx={{ mr: 1 }}>
                            <Avatar src={ava} />
                        </Grid>
                        <Grid item>
                            Nick
                            <Typography> Portland, Oregon . 45 contributions</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container>
                        <Grid item>
                            <Typography >
                                Hi we are coming to Saigon on 18/1 arriving from mui ne by bus, we are not sure if we will arrive in time at 6 pm. Is it 6-10 pm the tour? Do you offer a food tour from 7 pm to 10pm? There is 7 adults and 2 kids.please let us know ASAP? And price for 3 hr tour?
                                <Link sx={{ fontSize: "20px", fontWeight: "bold" }}> Read More</Link>
                            </Typography>
                        </Grid>
                        <Grid item sx={{ mt: 2 }}>
                        </Grid>
                    </Grid>
                </Grid>
                <Box mb={1}>
                    <Reply />
                </Box>
                <Button variant="text" sx={{ ml: 5, pl: 2, pt: 2, pb: 0, mb: 2 }} > Read All Replies</Button>
            </Grid>
        </div>
    );
}

export default Shortcommentcard;
