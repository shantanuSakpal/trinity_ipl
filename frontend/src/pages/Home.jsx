import React, { useEffect, useState } from 'react'

import { PlayerCard } from "../components/PlayerCard"
import { players } from '../players'

export const Home = () => {


    const [currentPlayerId, setCurrentPlayerId] = useState(0)
    const [player, setPlayer] = useState({})

    console.log(players.length)

    if (players.length != 0) {

        const idArr = []
        players.map(p => {
            idArr.push(p._id)
        })


    }

    function getNextPlayer() {
        setCurrentPlayerId(currentPlayerId + 1)
        setPlayer(players[currentPlayerId])
        console.log(currentPlayerId)
        if (currentPlayerId === players.length - 1) {
            setCurrentPlayerId(0)
        }
    }

    function getPrevPlayer() {
        setCurrentPlayerId(currentPlayerId - 1)
        setPlayer(players[currentPlayerId])
        console.log(currentPlayerId)
        if (currentPlayerId === 0) {
            setCurrentPlayerId(players.length - 1)
        }
    }




    return (

        <>

            <PlayerCard key={player._id} player={player} />
            <button onClick={getPrevPlayer} className='p-3 rounded-lg m-2 bg-slate-300  mx-auto text-xl font-bold'>Prev Player</button>
            <button onClick={getNextPlayer} className='p-3 rounded-lg m-2 bg-slate-300  mx-auto text-xl font-bold'>Next Player</button>
        </>





    )
}
