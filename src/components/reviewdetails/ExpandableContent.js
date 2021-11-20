import React, { useState } from 'react'

export default function ExpandableContent() {

    const [state, setState] = useState(false);

    const Submit = () =>{
        alert("Submit successful!");

        setState(true);
    }

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
                        <input type="checkbox" name="noFraud" value="1"/>
                        <div className="terms">
                            I certify that this review is based on my own experience and is my genuine opinion of this establishment and that I have no personal or business relationship with this establishment, and have not been offered any incentive or payment originating from the establishment to write this review. I understand that Tripadvisor has a zero-tolerance policy on fake reviews.
                        </div>
                    </div>
                </label>
                <div className="primary_button">
                    <input type="submit" className="ui_button primary" value="Submit" onClick={Submit}/>
                </div>
            </form>
        </div>
    )
}