    import React, { useState } from 'react';
    import { ModalGamaBaja } from '../../Global/ModalCotizar/ModalGamaBaja';
    import User_view from '../../../Pages/HomeUser';
    import '../../Posts/ModalGamaBaja/cotizar.css'
    import ButtonMain from '../../UI/Button/ButtonMain';
    export function Cotizar(){
        const [isModalOpen, setIsModalOpen] = useState(false);
        const [modalTitle, setModalTitle] = useState('');
        const [selectedOption, setSelectedOption] = useState('');
    
        const showModal = (title) => {
        setModalTitle(title);
        setIsModalOpen(true);
        };
        const handleCloseModal = (option) => {
        setSelectedOption(option);
        setIsModalOpen(false);
        };
        const modalData = {
        'Gama Baja': ['Nuevo','Usado con desgaste mínimo','Usado con desgaste evidente' ]
        };

        return (
            <>
            <User_view />
            <div className="card">
         <h2>Bienvenido a nuestra sección de cotizar</h2>
            <p>Seleccione la información de los apartados requeridos.</p>
            <ButtonMain onClick={() => showModal('Gama Baja')}>Gama Baja</ButtonMain>
            <div className="button-container">
    {isModalOpen && (
                <ModalGamaBaja title={modalTitle} options={modalData[modalTitle]} onClose={handleCloseModal} />
                )}
            </div>
            </div>
        </>
        )
    }
