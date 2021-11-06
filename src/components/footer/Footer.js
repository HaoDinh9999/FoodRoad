import React from 'react';
import './Footer.css';
import { Button } from '../button/Button';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer id="footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <h3 class="footer-title">SAIGON FOOD TOUR</h3>
                            <p class="footer-link">
                                <i class="fa fa-map-marker"></i>
                                R604, 133 Duong Ba Trac St, Dist.8, HCMC                  </p>
                            <p class="footer-link">
                                <b><a target="_blank" href="https://wa.me/+84349201427">
                                    <i><img width="14px" src="./Food Tour _ Saigon Food Tour_files/whatsapp.png" alt="" /></i>

                                    +(84) 349-201-427 </a></b>
                            </p>
                            <p class="footer-link">
                                <i class="fa fa-envelope"></i>
                                <a href="mailto:hello@saigonfoodtour.com">hello@saigonfoodtour.com</a></p>
                            <p class="footer-link">
                                <i class="fa fa-dribbble"></i>
                                <a href="https://www.saigonfoodtour.com/" target="_blank">saigonfoodtour.com</a>
                            </p>
                            <p>
                                <a target="_blank" href="https://www.facebook.com/saigonfoodtour"><img src="./Food Tour _ Saigon Food Tour_files/facebook_footer.png" /></a>
                                <a target="_blank" href="https://twitter.com/saigonfoodtour"><img src="./Food Tour _ Saigon Food Tour_files/twitter_footer.png" /></a>
                                <a target="_blank" href="https://instagram.com/saigonfoodtour"><img src="./Food Tour _ Saigon Food Tour_files/instagram_footer.png" /></a>
                                <a target="_blank" href="https://www.linkedin.com/pub/saigon-food-tour/102/258/a4a"><img src="./Food Tour _ Saigon Food Tour_files/linkedin_footer.png" /></a>
                                <a target="_blank" href="https://www.youtube.com/channel/UC5pTn0ZYr-Rij5AM7Z-9BkA"><img src="./Food Tour _ Saigon Food Tour_files/youtube_footer.png" /></a>

                            </p>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <h3 class="footer-title">BLOG &amp; PRESS</h3>
                            <div class="blog_item col-md-12 col-xs-12 col-sm-12">
                                <div class="img col-md-3 col-sm-3 col-xs-3">
                                    <a href="https://saigonfoodtour.com/blog/cheap-shopping-an-dong-market/" target="_blank">
                                        <img src="./Food Tour _ Saigon Food Tour_files/banner_cheap_shopping_at_an_dong_market_plenty_of_things_to_buy_in_vietnam_1.jpg" />
                                    </a>
                                </div>
                                <div class="blog_title col-md-9 col-sm-9 col-xs-9">
                                    <a target="_blank" href="https://saigonfoodtour.com/blog/cheap-shopping-an-dong-market/">  Cheap shopping at An Dong Market – Plenty of things to buy in Vietnam</a>

                                </div>
                                <div class="blog_date col-md-9 col-sm-9 col-xs-9">
                                    07 Aug, 2019                      </div>
                            </div>
                            <div class="blog_item col-md-12 col-xs-12 col-sm-12">
                                <div class="img col-md-3 col-sm-3 col-xs-3">
                                    <a href="https://saigonfoodtour.com/blog/egg-coffee-a-taste-of-elegance/" target="_blank">
                                        <img src="./Food Tour _ Saigon Food Tour_files/banner_egg_coffee_a_taste_of_elegance_and_where_to_find_it_in_saigon.jpg" />
                                    </a>
                                </div>
                                <div class="blog_title col-md-9 col-sm-9 col-xs-9">
                                    <a target="_blank" href="https://saigonfoodtour.com/blog/egg-coffee-a-taste-of-elegance/"> Egg Coffee – a taste of elegance and where to find it in Saigon</a>

                                </div>
                                <div class="blog_date col-md-9 col-sm-9 col-xs-9">
                                    07 Aug, 2019                      </div>
                            </div>

                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <h3 class="footer-title">AGENCY LOGIN</h3>
                            <p>
                            </p><div class="btn-wrap">
                                <a href="http://foodtoursystem.com/" target="_blank" class=" btn-agentcy-login">
                                    LOGIN
                                </a>
                            </div>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-12 footer-endsection">
                <div class="col-md-6 col-sm-6 col-xs-12 footer-right">

                </div>
            </div>
        </footer>
    );
}

export default Footer;
