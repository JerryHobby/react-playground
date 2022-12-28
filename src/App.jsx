import React from 'react';
import {Movies} from "./components/movies";

export function App(props) {
    return (
        <main className='container'>
            <Movies />
        </main>
    );
}

// Log to console
console.log('Hello console')