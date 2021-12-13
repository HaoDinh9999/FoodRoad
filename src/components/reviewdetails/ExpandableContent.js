import React, { useState } from 'react'
import { Button, CircularProgress, Fab } from '@mui/material';
import { Check } from '@mui/icons-material';
import { green } from '@mui/material/colors';


export default function ExpandableContent() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const timer = React.useRef();

    const buttonSx = {
        ...(success && {
            bgcolor: green[500],
            '&:hover': {
            bgcolor: green[700],
            },
        }),
    };

    React.useEffect(() => {
        return () => {
            clearTimeout(timer.current);
        };
    }, []);

    const handleButtonClick = () => {
        if (!loading) {
          setSuccess(false);
          setLoading(true);
          timer.current = window.setTimeout(() => {
            setSuccess(true);
            setLoading(false);
          }, 2000);
        }
      };

    return (
        <div className="submit-form">
            <form
                name="submit form"
                className="submit-form">
                <label className="reviewTitle required">
                    <div className="review-form">Title of your review</div>
                    <input
                        className="formInput"
                        name="title"
                        type="text"
                        size="32"
                        placeholder="Summarize your visit or highlight an interesting detail"
                        style={{marginTop:"16px", width:"680px", height:"36px"}}/>
                </label>
                <label clasname="reviewBody required">
                    <div className="review-form">Your review</div>
                    <textarea
                        className="formInput"
                        name="review"
                        size="32"
                        placeholder="By sharing your experiences, you're helping travelers make better choices and plan their dream trips. Thank you!   "
                        style={{marginTop:"16px", width:"680px", height:"56px"}} />
                </label>
                <label className="visitDate required complete">
                    <div className="review-form">When did you travel?</div>
                    <select 
                        name="trip_date_month_year"
                        style={{marginTop:"16px", width:"132px", height:"32px"}}
                        >
                            <option value>Select one</option>
                            <option value="11/2021">November 2021</option>
                            <option value="10/2021">October 2021</option>
                            <option value="9/2021">September 2021</option>
                            <option value="8/2021">August 2021</option>
                            <option value="7/2021">July 2021</option>
                            <option value="6/2021">June 2021</option>
                            <option value="5/2021">May 2021</option>
                            <option value="4/2021">April 2021</option>
                            <option value="3/2021">March 2021</option>
                            <option value="2/2021">February 2021</option>
                            <option value="1/2021">January 2021</option>
                            <option value="12/2020">December 2020</option>
                            <option>Three</option>
                    </select>
                </label>
                <label className="fraudCheck required">
                    <div className="inner">
                        <input type="checkbox" name="noFraud" value="1" className="verify-ckbx"/>
                        <div className="terms">
                            I vertify that this review is based on my own experience and is my genuine opinion of this establishment and that I have no personal or business relationship with this establishment, and have not been offered any incentive or payment originating from the establishment to write this review. I understand that Tripadvisor has a zero-tolerance policy on fake reviews.
                        </div>
                    </div>
                </label>
                <div className="primary_button">
                    <Button
                        className="ui_button"
                        variant="contained"
                        sx={buttonSx}
                        disabled={loading}
                        onClick={handleButtonClick}
                        >
                        Submit
                    </Button>
                    {loading && (
                        <CircularProgress
                            size={36}
                            sx={{
                            color: green[500],
                            position: 'absolute',
                            top: 294,
                            left: 96,
                            zIndex: 1,
                            }}
                        />
                    )}
                    {success && (
                        <Fab
                            aria-label="save"
                            color="primary"
                            sx={buttonSx}
                            size= "small"
                            onClick={handleButtonClick}
                            style={{marginLeft:"12px"}}
                            disabled={!success}
                        >
                            <Check></Check>
                        </Fab>
                    )}
                </div>
            </form>
        </div>
    )
}