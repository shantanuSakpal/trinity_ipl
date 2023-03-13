import React from 'react'

export const PlayerCard = ({ player }) => {
    console.log(player.image)
    return (




        <section class="">
            <div class="w-full lg:w-6/12 px-4 mx-auto">
                <div class="relative flex flex-col min-w-0 break-words bg-slate-100 w-full mb-6 shadow-xl rounded-lg ">
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
                                <div class="m-3 p-3 text-center shadow-lg bg-slate-200 rounded-lg">
                                    <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                        {player.BAT_SR}
                                    </span>
                                    <span class="text-sm text-blueGray-400">BatTing SR</span>
                                </div>
                                <div class="m-3 p-3 text-center shadow-lg bg-slate-200 rounded-lg">
                                    <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                        {player.BAT_AVG}
                                    </span>
                                    <span class="text-sm text-blueGray-400">Batting Avg</span>
                                </div>
                                <div class="m-3 p-3 text-center shadow-lg bg-slate-200 rounded-lg">
                                    <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                        {player.TOTAL_RUNS}
                                    </span>
                                    <span class="text-sm text-blueGray-400">Total Runs</span>
                                </div>


                            </div>
                            <div class="flex flex-wrap justify-center lg:pt-4 ">
                                <div class="m-3 p-3 text-center shadow-lg bg-slate-200 rounded-lg">
                                    <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                        {player.BOL_ECO}
                                    </span>
                                    <span class="text-sm text-blueGray-400">Bowling ECO</span>
                                </div>
                                <div class="m-3 p-3 text-center shadow-lg bg-slate-200 rounded-lg">
                                    <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                        {player.BOL_AVG}
                                    </span>
                                    <span class="text-sm text-blueGray-400">Bowling Avg</span>
                                </div>
                                <div class="m-3 p-3 text-center shadow-lg bg-slate-200 rounded-lg">
                                    <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                        {player.TOTAL_WICKET}
                                    </span>
                                    <span class="text-sm text-blueGray-400">Total Wickets</span>
                                </div>

                            </div>
                        </div>
                        <h3 class="text-2xl font-semibold leading-normal my-3 text-center">
                            Base Price: <span className='text-xl font-normal'>{player.BASE_PRICE}</span>
                        </h3>



                    </div>
                </div>
            </div>

        </section>




    )
}
