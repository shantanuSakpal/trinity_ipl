import React, { useEffect, useState } from 'react'

export const PlayerCard = ({ player }) => {
    const [rating, setRating] = useState(1.5)

    function CalRating() {
        if (((player.TOTAL_RUNS > 2500) && (player.BAT_SR > 125)) || ((player.BAT_SR > 150 || player.BOL_ECO < 8)) || (player.TOTAL_WICKET > 75 && player.BOL_ECO < 10)) {
            setRating(5);
        }
        else if (((player.TOTAL_RUNS > 2500) && (player.BAT_SR < 125)) || (player.TOTAL_WICKET > 75 && player.BOL_ECO > 10)) {
            setRating(4.5);
        }
        else if (((player.TOTAL_RUNS > 2000) && (player.BAT_SR > 125)) || (player.TOTAL_WICKET > 60 && player.BOL_ECO < 10)) {
            setRating(4);
        }
        else if (((player.TOTAL_RUNS > 2000) && (player.BAT_SR < 125)) || (player.TOTAL_WICKET > 60 && player.BOL_ECO > 10)) {
            setRating(3.5);
        }
        else if (((player.TOTAL_RUNS > 1500) && (player.BAT_SR > 125)) || (player.TOTAL_WICKET >= 45 && player.BOL_ECO < 10)) {
            setRating(3);
        }
        else if (((player.TOTAL_RUNS > 1500) && (player.BAT_SR < 125)) || (player.TOTAL_WICKET > 45 && player.BOL_ECO > 10)) {
            setRating(2.5);
        }
        else if (((player.TOTAL_RUNS > 1000) && (player.BAT_SR > 125)) || (player.TOTAL_WICKET > 30 && player.BOL_ECO < 10)) {
            setRating(2);
        }

        else {
            setRating(1.5);
        }
        if (player.BAT_SR > 135 || player.BOL_ECO < 8) {
            setRating(rating + 1)
        }



    }

    useEffect(() => {
        CalRating();
    }, [])



    return (

        <section class="">
            <div class="w-full lg:w-6/12 px-4 mx-auto">
                <div class="relative flex flex-col min-w-0 break-words bg-slate-200 w-full mb-6 shadow-xl rounded-lg ">
                    <div>
                        <div className='text-center p-3'>
                            <h1 className='font-bold text-3xl'>{player.PLAYER_NAME}</h1>
                        </div>
                        <div class="px-3 text-center">
                            <h3 class="text-xl font-semibold leading-normal mb-2 text-blueGray-700">
                                Nationality: <span className='text-base font-normal'>{player.NATIONALITY}</span>
                            </h3>
                            <h3 class="text-xl font-semibold leading-normal mb-2 text-blueGray-700">
                                Type: <span className='text-base font-normal'>{player.TYPE}</span>
                            </h3>

                        </div>
                        <div class="w-full text-center ">
                            <div class="flex flex-wrap justify-center lg:pt-4 ">
                                <div class="m-3 p-3 text-center shadow-lg bg-slate-300 rounded-lg">
                                    <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                        {player.BAT_SR}
                                    </span>
                                    <span class="text-sm text-blueGray-400">Batting SR</span>
                                </div>
                                <div class="m-3 p-3 text-center shadow-lg bg-slate-300 rounded-lg">
                                    <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                        {player.BAT_AVG}
                                    </span>
                                    <span class="text-sm text-blueGray-400">Batting Avg</span>
                                </div>
                                <div class="m-3 p-3 text-center shadow-lg bg-slate-300 rounded-lg">
                                    <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                        {player.TOTAL_RUNS}
                                    </span>
                                    <span class="text-sm text-blueGray-400">Total Runs</span>
                                </div>


                            </div>
                            <div class="flex flex-wrap justify-center lg:pt-4 ">
                                <div class="m-3 p-3 text-center shadow-lg bg-slate-300 rounded-lg">
                                    <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                        {player.BOL_ECO}
                                    </span>
                                    <span class="text-sm text-blueGray-400">Bowling ECO</span>
                                </div>
                                <div class="m-3 p-3 text-center shadow-lg bg-slate-300 rounded-lg">
                                    <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                        {player.BOL_AVG}
                                    </span>
                                    <span class="text-sm text-blueGray-400">Bowling Avg</span>
                                </div>
                                <div class="m-3 p-3 text-center shadow-lg bg-slate-300 rounded-lg">
                                    <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                        {player.TOTAL_WICKET}
                                    </span>
                                    <span class="text-sm text-blueGray-400">Total Wickets</span>
                                </div>

                            </div>
                        </div>
                        <h3 class="text-2xl font-semibold leading-normal my-3 text-center">
                            Rating: <span className='text-xl font-normal'>{rating}/5</span>
                        </h3>
                        <h3 class="text-2xl font-semibold leading-normal my-3 text-center">
                            Base Price: <span className='text-xl font-normal'>{player.BASE_PRICE}</span>
                        </h3>



                    </div>
                </div>
            </div>

        </section>




    )
}
