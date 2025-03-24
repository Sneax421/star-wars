import React from 'react';
import Heros from "./Heros.jsx";
import Text from "./Text.jsx";

const Main = () => {
    return (
        <main className="clearfix">
            <Heros />
            <Text/>
        </main>
    );
};

export default Main;