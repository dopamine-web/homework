"use strict";

// Окружения

const x = 5;

function log() {
    console.log(x);
    let y = 10;

    function innerLog() {
        console.log(y);
    }

    innerLog();
}

log();

