import React from 'react';
import { Grid, Typography, Link, Avatar } from "@mui/material"

const Reply = () => {
    const [readMore, setReadMore] = React.useState(false);
    return (
        <div>
            <Grid container sx={{ ml: 5, pl: 2, pt: 2, pb: 0, mb: 1, borderLeft: "1px solid", height: "100px" }} justifyContent="space-between">
                <Grid item>
                    <Grid container>
                        <Grid item sx={{ mr: 1 }}>
                            <Avatar src="./images/card_comment/ava.jpg" />
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="h2" sx={{ fontSize: "16px", fontWeight: 'medium' }}>
                                Nick
                            </Typography>
                            <Typography variant="h6" component="h2" sx={{ fontSize: "14px", fontWeight: 'medium' }}> Portland, Oregon . 45 contributions</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container>
                        <Grid item>
                            <Typography variant="h6" component="h2" sx={{ fontWeight: 'light', fontSize: "14px" }}>
                                Hi we are coming to Saigon on 18/1 arriving from mui ne by bus, we are not sure if we will arrive in time at 6 pm. Is it 6-10 pm the tour? Do you offer a food tour from 7 pm to 10pm? {readMore ? 'There is 7 adults and 2 kids.please let us know ASAP? And price for 3 hr tour?' : null}
                                {readMore ? (<Link sx={{ fontSize: "15px", fontWeight: "bold", cursor: "pointer" }} onClick={() => setReadMore(false)} > Read less</Link>) : (<Link sx={{ fontSize: "15px", fontWeight: "bold", cursor: "pointer" }} onClick={() => setReadMore(true)} > Read More</Link>)}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default Reply;
