import React, { use, useState } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';

const Players = ({setCoin, playerPromise, coin}) => {
    const players = use(playerPromise)  
    
    const [selectedType, setSelectedType] = useState("available")
    const [selectedPlayers, setSelectedPlayers] = useState([])
    
    return (
        <div className='w-11/12 mx-auto'>

            <div className='flex justify-between items-center mb-6'>
                {selectedType === "available"? <h2 className='font-bold text-2xl'>Available Players</h2>
                : <h2 className='font-bold text-2xl'>Selected Players ({selectedPlayers.length}/{players.length})</h2>}
                <div className='flex items-center'>
                    <button onClick={()=>setSelectedType("available")} className={`btn ${selectedType ==="available"? "btn-primary" : ""}  rounded-r-none rounded-l-xl`}>Available</button>
                    <button onClick={()=> setSelectedType("selected")} className={`btn ${selectedType ==="selected"? "btn-primary" : ""} rounded-l-none rounded-r-xl`}>Selected ({selectedPlayers.length})</button>
                </div>
            </div>
           {selectedType === "available" ?  <AvailablePlayers coin={coin} setCoin={setCoin} players={players} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers}></AvailablePlayers>
           : <SelectedPlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} coin={coin} setCoin={setCoin}></SelectedPlayers>}
        </div>

    );
};

export default Players;