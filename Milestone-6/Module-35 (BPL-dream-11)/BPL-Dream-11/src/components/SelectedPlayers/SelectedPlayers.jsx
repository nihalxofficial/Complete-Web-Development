import React from 'react';
import { MdDelete } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { MdSportsCricket } from "react-icons/md";
import { toast } from 'react-toastify';



const SelectedPlayers = ({selectedPlayers,setSelectedPlayers, coin, setCoin}) => {
    const deleteSelectedPlayer = (player) => {
        const deletedArray = selectedPlayers.filter(p=> p.playerName !== player.playerName);
        setSelectedPlayers(deletedArray);
        setCoin(coin + player.price)
        toast.warning(`Deleted ${player.playerName} from the list.`)
        
    }
    return (
        <div className='space-y-5'>
            {selectedPlayers.length >= 1 ? selectedPlayers.map((player, index)=> {
                return <div key={index} className='flex items-center justify-between gap-6 p-5 rounded-2xl shadow-sm'>
                    <div className='flex justify-between items-center gap-4'>
                        <img className='w-20 h-20 ' src={player.playerImg} alt="" />
                        <div>
                            <h2 className='font-bold text-xl flex justify-between items-center gap-2'><FaUser /> {player.playerName}</h2>
                            <p className=' text-gray-600 flex items-center gap-2' ><MdSportsCricket /> {player.playerType}</p>
                        </div>

                    </div>
                    <button onClick={()=>deleteSelectedPlayer(player)}>< MdDelete className='cursor-pointer text-2xl text-red-600' /></button>
                </div>
            })
            : <div className='h-100 flex justify-center items-center flex-col gap-3'>
                <h2 className='font-semibold text-xl'>No players selected yet</h2>
                <p>Go to available tab to select players</p>
            </div>
            }
        </div>
    );
};

export default SelectedPlayers;