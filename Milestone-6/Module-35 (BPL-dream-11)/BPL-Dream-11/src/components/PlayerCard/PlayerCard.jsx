import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import { toast } from 'react-toastify';

const PlayerCard = ({coin, setCoin, player,setSelectedPlayers,selectedPlayers}) => {

    const [isSelected, setIsSelected] = useState(false)
    const handleChoosePlayer = () => {
      
      let newCoin = coin - player.price
      if(newCoin >=0){
        setIsSelected(true)
        setCoin(newCoin)
        setSelectedPlayers([...selectedPlayers,player])
        toast.success(`${player.playerName} is selected`)
        }else{
          toast.error(`Not enough coins. Need ${player.price - coin} coins more.`)
        }
    }
    return (
        <div className="card bg-base-100  shadow-sm p-3 ">
              <figure>
                <img className=' '
                  src={player.playerImg}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  <FaUser /> {player.playerName}
                </h2>
                <div className="flex justify-between items-center">
                  <div className="flex justify-between items-center gap-2">
                    <FaFlag /> <p>{player.country}</p>
                  </div>
                  <button className="btn">{player.playerType}</button>
                </div>
                <div className="divider my-1"></div>

                <h2 className="font-bold">Rating ({player.rating})</h2>
                <div className="flex justify-between items-center gap-16 font-bold">
                  <p>{player.battingStyle}</p>
                  <p className='text-right'>{player.bowlingStyle}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-semibold">Price: ${player.price}</p>
                  <button onClick={()=>handleChoosePlayer()} disabled={isSelected? true:false} className="btn py-1 px-2">
                    {isSelected? "Selected" : "Choose Player"}
                  </button>
                </div>
              </div>
            </div>
    );
};

export default PlayerCard;