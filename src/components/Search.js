import { NavLink } from "react-router-dom";
import { TrendItem, LikeItem } from "./SearchItem";

import Mushtariy from "../assets/img/mushtariy.png";
import Shuhrat from "../assets/img/shuhrat.png";
import React from "react";
import { Context } from "./Context";
import SearchHero from '../assets/img/searchHero.png';


const Search = () =>{
    const {searchDisplay, setSearchDisplay} = React.useContext(Context);
    return(
        <>
            <div className="search">
                <input className="search-input" type="search" aria-label="Search Twitter" placeholder="Search Twitter" maxLength={20} required/>
                <span className="search-icon"></span>

                {searchDisplay ?(
                    <img className="search-hero" src={SearchHero} alt="recommend list" />
                ):(
                    <></>
                )}

                <div className="search-trend">
                    <h2 className="search-trend-title">Trends for you</h2>

                    <TrendItem />
                    <TrendItem />
                    <TrendItem />

                    <NavLink to="/more" >Show more</NavLink>
                </div>

                <div className="might-like">
                    <h2 className="might-like-title">You might like</h2>

                    <LikeItem name="Mushtariy" username="@Mushtar565266" userimg={Mushtariy} />
                    <LikeItem name="Shuhratbek" username="@mrshukhrat" userimg={Shuhrat} />

                    <NavLink to="/more" >Show more</NavLink>
                </div>
                
                {searchDisplay ? (
                    <></>
                ):(
                    <>
                        <div className="search-links">
                            <a href="#link">Terms of Service</a>
                            <a href="#link">Privacy Policy</a>
                            <a href="#link">Cookie Policy</a>
                        </div>
                        <div className="search-links">
                            <a href="#link">Imprint</a>
                            <a href="#link">Ads Info</a>
                            <a href="#link">More ···</a>
                            <a href="#link">&copy; 2021 Twitter, Inc.</a>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default Search;