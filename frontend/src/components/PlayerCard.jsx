import React, { useEffect, useState } from 'react'

export const PlayerCard = ({ player }) => {


    return (

        <section class="card flex p-2">
            <div className='border-3 w-4/12'>
                <img className='w-72 mx-auto p-5' src="https://s.ndtvimg.com//images/entities/120/virat-kohli-967.png" alt="" />
                <h2 className='p-2 text-white text-center text-3xl'>{player.NATIONALITY}</h2>
                <h2 className='p-2 text-white text-center text-3xl'>{player.TYPE}</h2>
                <h2 className='p-2 text-white text-center text-3xl'>Rating: {player.RATING}/5</h2>

            </div>
            <div className=' w-8/12'>
                <h1 className='text-white text-7xl text-center font-bold'>{player.PLAYER_NAME}</h1>
                <div className=' grid grid-cols-2 justify-evenly w-full p-4 text-center'>
                    <div className='bg-themeBlue p-3 rounded-lg text-xl text-white font-bold m-4 '>Strike Rate:  {player.BAT_SR}</div>
                    <div className='bg-themeBlue p-3 rounded-lg text-xl text-white font-bold m-4 '>Strike Rate:{player.BAT_SR}</div>
                    <div className='bg-themeBlue p-3 rounded-lg text-xl text-white font-bold m-4 '>Strike Rate:{player.BAT_SR}</div>
                    <div className='bg-themeBlue p-3 rounded-lg text-xl text-white font-bold m-4 '>Strike Rate:{player.BAT_SR}</div>
                    <div className='bg-themeBlue p-3 rounded-lg text-xl text-white font-bold m-4 '>Strike Rate:{player.BAT_SR}</div>
                    <div className='bg-themeBlue p-3 rounded-lg text-xl text-white font-bold m-4 '>Strike Rate:{player.BAT_SR}</div>
                    
                   
                </div>
            </div>

        </section>




    )
}
