import React from 'react';
import main from "../assets/main.jpg";

const MainHero = () => {
    return (
        <>
            <section className="float-start w-25 me-3">
                <img className="w-100" src={main} alt="Hero"/>
            </section>
        </>
    );
};

export default MainHero;