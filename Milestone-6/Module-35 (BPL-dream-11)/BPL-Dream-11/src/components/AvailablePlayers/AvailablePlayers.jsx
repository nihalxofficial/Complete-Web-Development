import React from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';



const AvailablePlayers = ({coin, setCoin, players, setSelectedPlayers, selectedPlayers}) => {
    
    return (
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6'>
        {players.map((player, index) => {
          return <PlayerCard key={index} coin={coin} setCoin={setCoin} player={player} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers}></PlayerCard>
        })}
      </div>
    );
};

export default AvailablePlayers;