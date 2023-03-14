import React, { useEffect, useState } from 'react'

export const PlayerCard = ({ player }) => {


    return (

        <section class="card flex p-2">
            <div className='border-3 w-4/12'>
                <img className='w-72 mx-auto p-5' src={player.IMAGE} alt="" />
                <h2 className=' text-white text-center text-2xl'>{player.NATIONALITY}</h2>
                <h2 className=' text-white text-center text-2xl'>{player.TYPE}</h2>
                <h2 className='font-bold  text-white text-center text-3xl'>Rating: {player.RATING}/5</h2>

            </div>
            <div className=' w-8/12'>
                <h1 className='text-white text-7xl text-center font-bold'>{player.PLAYER_NAME}</h1>
                <div className=' grid grid-cols-2 justify-evenly w-full p-4 text-center'>
                    <div className='bg-themeBlue p-3 rounded-lg text-xl text-white font-bold m-4 '>Strike Rate:  {player.BAT_SR}</div>
                    <div className='bg-themeBlue p-3 rounded-lg text-xl text-white font-bold m-4 '>Economy:  {player.BOL_ECO}</div>
                    <div className='bg-themeBlue p-3 rounded-lg text-xl text-white font-bold m-4 '>Total Runs:  {player.TOTAL_RUNS}</div>
                    <div className='bg-themeBlue p-3 rounded-lg text-xl text-white font-bold m-4 '>Total Wickets:  {player.TOTAL_WICKET}</div>
                    <div className='bg-themeBlue p-3 rounded-lg text-xl text-white font-bold m-4 '>Batting Avg.:  {player.BAT_SR}</div>
                    <div className='bg-themeBlue p-3 rounded-lg text-xl text-white font-bold m-4 '>BowlingAvg.:  {player.BOL_AVG}</div>


                </div>
                <h2 className='text-white font-bold text-4xl mx-auto w-fit bg-blue-600 shadow-xl rounded-lg py-2 px-4'>Base Price:  {player.BASE_PRICE}</h2>
            </div>

        </section>




    )
}
