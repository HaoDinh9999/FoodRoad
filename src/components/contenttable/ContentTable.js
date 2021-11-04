import React from 'react';
import './ContentTable.css'
import { FaBiking, FaSmile, FaHandshake, FaUtensils } from "react-icons/fa";

function ContentTable ({items}) {
    return(
        <div>
            <h1 className='about-title2'>OUR MISSION</h1>
            <table className= 'content-table'>
                <tr>
                    <th>
                        <FaBiking className='icon'/>
                    </th>
                    <th>
                        <FaSmile className='icon'/>
                    </th>
                    <th>
                        <FaHandshake className='icon'/>
                    </th>
                    <th>
                        <FaUtensils className='icon'/>
                    </th>
                </tr>
                <tr>
                    <td >
                    To take you on the back of the bikes and give you the safest experience. We guarantee to keep you safe and sound the whole tour with our skillful and experienced drivers.
                    </td >
                    <td >
                    To get you a personal English speaking guide, who was well trained and selected by many criterias. The tour will be filled with our friendly, knowledgable and funny staffs.
                    </td>
                    <td > 
                    To deliver our great qualities along with our outstanding service to all the customers that other business provided.
                    </td>
                    <td >
                    To fulfill our customer stomach with a unique authentic local taste and understanding of Saigon cuisine and its customs. Starve yourself before the tour!
                    </td>
                </tr>
                <tr>
                    <td rowSpan="3" className='title'>
                        MEET OUR BOARD OF MANAGEMENT
                    </td>
                    <td >
                        <img src="/images/info-image.png" alt='CEO_image' className='about-img' />
                    </td>
                    <td colSpan='2'>
                        <h3 className='about-h3'>DENT TRAN</h3>
                        <h4 className='about-h4'> Founder & Managing Director</h4>
                        <p>Xin Chào, I am from the Mekong Delta. Saigon Food Tour is one of my main goals to promote responsible tourism in Vietnam. I wish to create tours that would benefit those who are the poorest in Vietnam and leave as little environmental footprint as possible. I also want to give visitors a wonderful experience and promote the treasure of Vietnamese food & cultures.</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src="/images/info-image.png" alt='CEO_image' className='about-img' />
                    </td>
                    <td colSpan='2'>
                        <h3 className='about-h3'>NANCY LE</h3>
                        <h4 className='about-h4'>Co-founder</h4>
                        <p>Nancy was born in Mekong Delta, but her family is originated from Hue - the central of Vietnam. She can cook more than 40 Vietnamese dishes, especially Hue dishes. She loves cooking and loves to create new dishes. She is not only a great cook, but also a good clothes desinger. She is the co-founder of Saigon Food Tour, side by side with Dent Tran to manage their little passion.</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src="/images/info-image.png" alt='CEO_image' className='about-img' />
                    </td>
                    <td colSpan='2'>
                        <h3 className='about-h3'>TB Xuan Thinh</h3>
                        <h4 className='about-h4'>Tour Operation</h4>
                        <p>TB has joined the tour guide team for 1 year and a half and he quickly got into the company, where he is the Saigon Food Tour Operator at the moment. Most of the bookings and serving requests have been done by him with his wonderful skills and sensational abilities. So don't hesitate to ask him for any assisstance as he will give you his best shot on advice.</p>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <img src="/images/info-image.png" alt='CEO_image' className='about-img' />
                    </td>
                    <td colSpan='2'>
                        <h3 className='about-h3'>Khanh Ha Dinh T.</h3>
                        <h4 className='about-h4'>Sales Executive</h4>
                        <p>Ha is a dynamic and motivated individual with professional manners. She experienced working as a tour guide for more than two years, from which she developed her great knowledge in all of company's products. Having exposed to different tours, she strives to contribute her knowledge and passion to each and every booking/request. Please feel free to contact Ha for the best deal! </p>
                    </td>
                </tr>
                <tr>
                    <td rowSpan='2' className='title'>
                    MEET OUR OUTSTANDING TOUR GUIDES
                    </td>
                    <td>
                        <div className='about-div'>
                            <img src="/images/info-image.png" alt="CEO_image" className='about-img'></img>
                            <h4>Quynh Anh</h4>
                        </div>
                    </td>
                    <td>
                        <div className='about-div'>
                            <img src="/images/info-image.png" alt="CEO_image" className='about-img'></img>
                            <h4>Ngoc Thinh</h4>
                        </div>
                    </td>
                    <td>
                        <div className='about-div'>
                            <img src="/images/info-image.png" alt="CEO_image" className='about-img'></img>
                            <h4>Kim Thoa</h4>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className='about-div'>
                            <img src="/images/info-image.png" alt="CEO_image" className='about-img'></img>
                            <h4>Phu Bao</h4>
                        </div>
                    </td>
                    <td>
                        <div className='about-div'>
                            <img src="/images/info-image.png" alt="CEO_image" className='about-img'></img>
                            <h4>Lily</h4>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default ContentTable;