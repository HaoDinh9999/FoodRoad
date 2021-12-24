import React from 'react';
import { Grid, Avatar, Typography, Link, Button } from '@mui/material';
import { Box } from '@mui/system';
import Reply from './Reply';
import { Input } from '@mui/material';
const Shortcommentcard = () => {
    const [reply, setReply] = React.useState(false);
    return (
        <div>
            <Grid container sx={{ mt: 3, pt: 2, pb: 0, borderBottom: "1px solid gray" }} justifyContent="space-between">
                <Grid item>
                    <Grid container>
                        <Grid item sx={{ mr: 1 }}>
                            <Avatar src="./images/card_comment/ava.jpg" />
                        </Grid>
                        <Grid item>
                            <Typography variant="h6" component="h2" sx={{ fontSize: "18px", fontWeight: 'medium' }}></Typography>
                            Nick
                            <Typography variant="h6" component="h2" sx={{ fontSize: "16px", fontWeight: 'medium' }}> Portland, Oregon . 45 contributions</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container>
                        <Grid item>
                            <Typography variant="h6" component="h2" sx={{ fontSize: "18px", fontWeight: 'light' }}>
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
                    <Box display="grid">
                        <Button sx={{ ml: 5, pl: 2, pt: "12px", pb: "12px", borderRadius: 6, maxWidth: '200px', maxHeight: '100px', color: "#000", backgroundColor: "#fff" }} > Read All Replies</Button>
                        {/* <Button variant="outlined" sx={{ ml: 5, pl: 2, pt: 2, pb: 0, mb: 2, borderRadius: 10 }} > Reply</Button> */}
                    </Box>
                    <Button sx={{ mt: 1, pl: 2, pt: "12px", pb: "12px", mb: 2, borderRadius: 6, color: "#000", backgroundColor: "#fff" }} onCLick={() => setReply(!reply)} > Reply</Button>
                    {reply ? (<Input
                        fullWidth
                        multiline
                        sx={{ width: "30px" }}
                    />) : null}

                </Box>
                <Box>
                </Box>
            </Grid>
        </div>
    );
}

export default Shortcommentcard;
