import React, { useEffect, useState } from 'react'
import axios from "axios"

import { PlayerCard } from "../components/PlayerCard"
const serverUrl = "http://localhost:4000"
export const Home = () => {

    const [players, setPlayers] = useState([])
    const [currentPlayerId, setCurrentPlayerId] = useState(0)
    const [player, setPlayer] = useState({})

    const getPlayers = async (e) => {

        const res = await axios.get(`${serverUrl}/players`)
        setPlayers(res.data)
    }
    useEffect(() => {

        getPlayers()
    }, [])

    if (players.length != 0) {

        const idArr = []
        players.map(p => {
            idArr.push(p._id)
        })


    }

    function getOnePlayer() {
        setPlayer(players[currentPlayerId])
        setCurrentPlayerId(currentPlayerId + 1)
        if (currentPlayerId === players.length - 1) {
            setCurrentPlayerId(0)
        }
    }




    return (
        <div className='flex flex-col w-full justify-center'>
            {

                <PlayerCard key={player._id} player={player} />

            }
            <button onClick={getOnePlayer} className='p-3 rounded-lg m-2 bg-slate-300  mx-auto text-xl font-bold'>Next Player</button>

        </div>
    )
}
