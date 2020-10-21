import React from 'react';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';

const NaoEncontrada = () => {
    return(
        <div>
            <Menu />
            <h1 className="text-center">404</h1>
            <Rodape />
        </div>
    )
}

export default NaoEncontrada;