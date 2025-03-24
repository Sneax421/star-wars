import React from 'react';
import Heros from "./Heros.jsx";
import Text from "./Text.jsx";
import MainHero from "./MainHero.jsx";

const Main = () => {
    return (
        <main className="clearfix">
            <MainHero />
            <Heros />
            <Text/>
        </main>
    );
};

export default Main;