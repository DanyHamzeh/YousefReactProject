import React from "react";
import Header from "../../Components/Header/Header";
import HeroPage from "../../Components/Header/HeroPage/HeroPage";
import OficesPage from "../../Components/Header/OficesPage/OficesPage";
import Section3Page from "../../Components/Section3Page/Section3Page";


function HomePage(){
    return(
        <div>
            <Header/>
            <HeroPage/>
            <OficesPage/>
            <Section3Page/>
        </div>
    )
};


export default HomePage