import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';


const FeatureCard = (props) => {
    const [state, setState] = useState({
        color: "black",
        backgroundColor: "white"
    });
    

    return (
        <a style={{textDecoration: "none"}} href="#">
            <Card>
                <CardMedia
                    component="img"
                    alt="image"
                    height="140"
                    image={props.image}
                    onMouseEnter={() => setState({color: "white", backgroundColor: "black"})}
                    onMouseLeave={() => setState({color: "black", backgroundColor: "white"})}
                />
                <CardContent style={{backgroundColor: state.backgroundColor}}>
                    <Typography color={state.color} variant="h6" component="div">
                    {props.title}
                    </Typography>
                </CardContent>
            </Card>
        </a>
    );
  };
  
  export default FeatureCard;