$(function () {
    "use strict";
    function RandInt(min, max) {
        if (min <= max && typeof min === "number" && typeof max === "number") {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1) + min);
        } else {
            return "Can't Calculate that!";
        }
    }

    function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    async function main() {
        $("p").eq(0).append("Countdown:<br>");
        for (let i = 5; i >= 1; i--) {
            await sleep(1000);
            $("p").eq(0).append(`${i}<br>`);
        }

        await sleep(1000);
        $("p").eq(0).append("GO!");
        await sleep(1000);
        $("p").eq(0).html("");
        let rand = 0;
        let total = 0;
        for (let x = 0; x < 4; x++) {
            rand = RandInt(1, 100);
            total = rand + total;
            $("h2").eq(0).append(`${rand}<br>`);
        }

        if (total >= 200) {
            $("p").eq(0).html(`Keep Playing!`);
        } else {
            $("p").eq(0).html(`You're broke! Quit!`);
        }

        await sleep(3000);
        $("h2").eq(0).html("");
        $("p").eq(0).html("");
        $("h2").eq(0).append("Flipping a coin:<br>");
        let rand2 = 0;
        rand2 = RandInt(1, 4);
        await sleep(1000);
        function CoinFlip() {
            /* Choice 1+4 is the least likely to be picked,
            because of the psuedorandom
            number generator that I picked. (inclusive number generator,
            but treating it as exclusive to have
            better psuedorandom chances) */
            if (rand2 === 1) {
                rand2 = RandInt(1, 4);
                CoinFlip();
            } else if (rand2 === 2) {
                $("h2").eq(0).append(`Heads!`);
            } else if (rand2 === 3) {
                $("h2").eq(0).append(`Tails!`);
            } else if (rand2 === 4) {
                rand2 = RandInt(1, 4);
                CoinFlip();
            }
        }
        CoinFlip();
    }
    main();
});
