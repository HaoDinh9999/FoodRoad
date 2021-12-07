import React,{useState} from 'react'
import "./ReviewDetails.css"
import {FaMapMarkerAlt, FaSearch, FaCircle, FaRegCircle} from "react-icons/fa"
import Rating from '@mui/material/Rating'
import Box from '@mui/material/Box'
import ExpandableContent from './ExpandableContent'

const labels ={
    1: 'Terrible',
    2: 'Poor',
    3: 'Average',
    4: 'Very Good',
    5: 'Excellent'
}

function ReviewDetails() {
    const [value1, setValue1] = useState(4)
    const [hover1, setHover1] = useState(-1)
    const [value2, setValue2] = useState(4)
    const [hover2, setHover2] = useState(-1)
    const [value3, setValue3] = useState(4)
    const [hover3, setHover3] = useState(-1)

    const [style1,setStyle1] = useState("div3");
    const [style2,setStyle2] = useState("div3");
    const [style3,setStyle3] = useState("div3");
    const [showForm1, setShowForm1]=useState(false);
    const [showForm2, setShowForm2]=useState(false);
    const [showForm3, setShowForm3]=useState(false);

    const [showFinishBtn, setShowFinishBtn] = useState(true)

    const onClick = () => setShowFinishBtn(false)

    const ShowForm1 = () => {
        setShowForm1(true);
    }

    const ShowForm2 = () => {
        setShowForm2(true);
    }

    const ShowForm3 = () => {
        setShowForm3(true);
    }

    const changeStyle1 = () => {
        console.log("you just clicked draft1");
      
        setStyle1("div3c1");
    };    
    
    const changeStyle2 = () => {
        console.log("you just clicked draft2");
      
        setStyle2("div3c2");
    }; 

    const changeStyle3 = () => {
        console.log("you just clicked draft3");
      
        setStyle3("div3c3");
    }; 

    const Finish = () => (
        <div className="primaryButton finishButton" id="finishbtn">
            <span className="ui_button" style={{width:"120px", marginTop:"0px"}}>Finish review</span>
        </div>
    )

    return (
        <div>
            <div style={{height:"30px"}}></div>
            <div className="div-main">
                <h1>
                Review a place you've visited
                </h1>
            </div>
            <div style={{height:"20px"}}></div>
            <div className="div1">
                <div class="whereError">Location not found</div>
                <div className="fauxInput where">
                <input
                    className="review"
                    name="where"
                    autoComplete="off"
                    type="text"
                    placeholder="City or destination"
                />
                <FaMapMarkerAlt class="image"/>
                </div>
                
                <div className="fauxInput what">
                <input
                    className="review"
                    refs="which"
                    type="text"
                    required="required"
                    placeholder="Hotels, restaurants, attractions, rental cars"
                />
                <FaSearch class="image"/>
                </div>
            </div>
            <div style={{height:"10px"}}></div>
            <div className="div1">
                <div className="ora">Or review a</div>
                <span>
                    <div className="vr">
                        <div id="VacationRental">
                        </div>
                        <span id="VacationRental">
                            Vacation Rental »
                        </span>
                    </div>
                    <div className="al">
                        <div id="Airline">
                        </div>
                        <span  id="Airline">
                            Airline »
                        </span>
                    </div>
                    <div className="sh">
                        <div id="Cruise">
                        </div>
                        <span id="Cruise">
                            Cruise »
                        </span>
                    </div>
                </span>
            </div>
            <div style={{height:50}}/>
            <div className="div2">
                <h2>
                Have you been? Travelers want to see more reviews of these places.
                </h2>
            </div>
            <div style={{height:"10px"}}></div>
            <div className={style1} 
                onClick={() => {
                                ShowForm1();
                                changeStyle1();
                                onClick();
                             }}>
                <div className="locationPhoto">
				    <img src="https://media-cdn.tripadvisor.com/media/photo-s/1a/60/ef/cf/caption.jpg" alt="Seafood trail" width="240" height="194" id="IMG_16" />
			    </div>
                <div className="locationContent">
			        <div className="locationName">
                        <a className="locationName" href="/AttractionProductReview-g293925-d15593290-Seafood_trail-Ho_Chi_Minh_City.html" target="_blank">Seafood trail</a>
			        </div>
                    <div className="locationAddress">
                        <span>Ho Chi Minh City,</span>
                        <span> Vietnam</span>
                    </div>
                    <div style={{height:10}}></div>
                    <div className="locationRating required">
                        <Box
                            sx={{
                                width: 200,
                                display: 'flex',
                                alignItems: 'center',
                                height: 40,
                            }}
                            >
                            <Rating 
                            name="hover-feedback"
                            value={value1}
                            onChange={(event, newValue)=>{
                                setValue1(newValue)
                            }} 
                            onChangeActive={(event, newHover)=>{
                                setHover1(newHover);
                            }}
                            fontSize="inherit"
                            style={{color: "rgb(12, 141, 102)"}}
                            emptyIcon={<FaRegCircle/>}
                            icon={<FaCircle/>}
                            />
                            {value1 !== null && (
                                <Box sx={{ ml: 2 }}>{labels[hover1 !== -1 ? hover1 : value1]}</Box>
                            )}
                        </Box>
                    </div>
                    {showFinishBtn ? <Finish /> : null}
                    {showForm1 && (
                        <ExpandableContent />
                    )}
                </div>
            </div>
            <div className={style2} 
                    onClick={() => {
                                ShowForm2();
                                changeStyle2();
                                
                             }}>
                <div className="locationPhoto">
				    <img src="https://media-cdn.tripadvisor.com/media/photo-s/15/b5/80/c6/good-vibes-central-hotel.jpg" alt="Seafood trail" width="240" height="194" id="IMG_16" />
			    </div>
                <div className="locationContent">
			        <div className="locationName">
				        <a className="locationName" href="/Hotel_Review-g293925-d12596354-Reviews-Good_Vibes_Central_Hotel-Ho_Chi_Minh_City.html" target="_blank">Good Vibes Central Hotel</a>
			        </div>
                    <div className="locationAddress">
                        <span>277 Le Thanh Ton Street</span> | 
                        <span> Ben Thanh Ward, District 1</span>
                        <span> Ho Chi Minh City 700000,</span>
                        <span> Vietnam</span>
                        <span> (Formerly Shangri La Saigon Hotel)</span>
                    </div>
                    <div style={{height:10}}></div>
                    <div className="locationRating required">
                    <Box
                            sx={{
                                width: 200,
                                display: 'flex',
                                alignItems: 'center',
                                height: 40,
                            }}
                            >
                            <Rating 
                            name="hover-feedback"
                            value={value2}
                            onChange={(event, newValue)=>{
                                setValue2(newValue)
                            }} 
                            onChangeActive={(event, newHover)=>{
                                setHover2(newHover);
                            }}
                            fontSize="inherit"
                            style={{color: "rgb(12, 141, 102)"}}
                            emptyIcon={<FaRegCircle/>}
                            icon={<FaCircle/>}
                            />
                            {value2 !== null && (
                                <Box sx={{ ml: 2 }}>{labels[hover2 !== -1 ? hover2 : value2]}</Box>
                            )}
                        </Box>
                    </div>
                    {showFinishBtn ? <Finish /> : null}
                    {showForm2 && (
                        <ExpandableContent />
                    )}
                </div>
            </div>
            <div className={style3} 
                    onClick={() => {
                                ShowForm3();
                                changeStyle3();
                                
                             }}>
                <div className="locationPhoto">
				    <img src="https://media-cdn.tripadvisor.com/media/photo-s/1a/63/ee/8a/caption.jpg" alt="Seafood trail" width="240" height="194" id="IMG_16" />
			    </div>
                <div className="locationContent">
			        <div className="locationName">
				        <a className="locationName" href="/Hotel_Review-g293925-d12596354-Reviews-Good_Vibes_Central_Hotel-Ho_Chi_Minh_City.html" target="_blank">Saigon Food Tour on Scooter at Night</a>
			        </div>
                    <div className="locationAddress">
                        <span>Ho Chi Minh City,</span>
                        <span> Vietnam</span>
                    </div>
                    <div style={{height:10}}></div>
                    <div className="locationRating required">
                    <Box
                            sx={{
                                width: 200,
                                display: 'flex',
                                alignItems: 'center',
                                color: "rgb(12, 141, 102)",
                                height: 40,
                            }}
                            >
                            <Rating 
                            name="hover-feedback"
                            value={value3}
                            onChange={(event, newValue)=>{
                                setValue3(newValue)
                            }} 
                            onChangeActive={(event, newHover)=>{
                                setHover3(newHover);
                            }}
                            fontSize="inherit"
                            style={{color: "rgb(12, 141, 102)"}}
                            emptyIcon={<FaRegCircle/>}
                            icon={<FaCircle/>}
                            />
                            {value3 !== null && (
                                <Box sx={{ ml: 2 }}>{labels[hover3 !== -1 ? hover3 : value3]}</Box>
                            )}
                        </Box>
                    </div>
                    {showFinishBtn ? <Finish /> : null}
                    {showForm3 && (
                        <ExpandableContent />
                    )}
                </div>
            </div>
        </div>
    )
}

export default ReviewDetails;