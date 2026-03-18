import React from 'react';

const Links = ({route}) => {
    return (
        <li className='hover:bg-blue-700 p-2 hover:text-white '>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Links;