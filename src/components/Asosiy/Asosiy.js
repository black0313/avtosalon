import React, {useEffect} from 'react';
import './Asosiy.css'
import {connect} from "react-redux";
import carReducer, {getCars} from "../../store/CarReducer";
import {useState} from "react";
import CarReducer from "../../store/CarReducer";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

function Asosiy({carReducer, getCars}) {


    useEffect(() => {
        getCars()
    }, [])

    const [isOpen, setOpen] = useState(false)

    function toggle() {
        setOpen(!isOpen)
    }

    const [currentPage, setCurrentPage] = useState(1);


    const [isCorrect, setCorrect] = useState([])

    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / 3) * 3;
        return new Array(Math.round(3)).fill().map((_, idx) => start + idx + 1);

    }


    return (<div>
        <div className={'asosiy'}>
            <div className={'asosiy-header'}>
                <div className={'a-header-l'}>
                    <div className={'tag'}>
                        {console.log(carReducer)}
                    </div>
                    <div className={'asosiy-text'}>Mashinalar</div>
                </div>
                <div className={'a-header-l'}>
                    <button onClick={toggle} className={'btn-blue'}>
                        <span>+</span>
                        Mashina qo'shish
                    </button>
                </div>

            </div>
            <div className={'asosiy-body'}>
                <table className={'table'}>
                    <thead>
                    <tr className={'qator'}>
                        <th>#</th>
                        <th className={'td'}>Markasi</th>
                        <th className={'td'}>Gearbook</th>
                        <th>Tanirovkasi</th>
                        <th>Motor</th>
                        <th>Year</th>
                        <th>Color</th>
                        <th>Distance</th>
                        <th>Amallar</th>
                    </tr>
                    </thead>
                    <tbody>
                    {carReducer.cars.map((item, index) => {
                        return <tr className={'qator'}>
                            <td className={'index'}>{index + 1}.</td>
                            <td>{item?.marka?.name}</td>
                            <td>{item?.gearbok}</td>
                            <td>{item?.tonirovka}</td>
                            <td>{item?.motor}</td>
                            <td>{item?.year}</td>
                            <td>{item?.color}</td>
                            <td>{item?.distance}</td>
                            <td className={'button-group'}>
                                <button className={'edit'}>Edit</button>
                                <button className={'delete'}>Delete</button>
                            </td>
                        </tr>
                    })}


                    </tbody>
                </table>
            </div>
            <div className={'asosiy-footer'}>
                <button className={'btn-page disabled'} disabled={false}>
                    <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.2072 13.7929C8.59772 14.1834 8.59772 14.8166 8.2072 15.2071C7.81668 15.5976 7.18351 15.5976 6.79299 15.2071L1.00009 9.41421C0.219046 8.63317 0.219044 7.36684 1.00009 6.58579L6.79299 0.792894C7.18351 0.402369 7.81668 0.402369 8.2072 0.792894C8.59772 1.18342 8.59772 1.81658 8.2072 2.20711L3.41431 7H17.5001C18.0524 7 18.5001 7.44772 18.5001 8C18.5001 8.55229 18.0524 9 17.5001 9H3.41431L8.2072 13.7929Z"
                            fill="#6F767E"/>
                    </svg>
                </button>
                <div className="pagination">
                    {getPaginationGroup().map((item, index) =>

                        <button
                            key={index}
                            className={`paginationItem ${currentPage === item ? 'activePage' : null}
                                        ${isCorrect.some(number => {
                                return item === number
                            }) ? 'checked' : ''}
                                    `}
                        >
                            <span>{item}</span>
                        </button>)}
                    ...

                </div>

                <button className={'btn-page'}>
                    <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.7929 13.7929C10.4024 14.1834 10.4024 14.8166 10.7929 15.2071C11.1834 15.5976 11.8166 15.5976 12.2071 15.2071L18 9.41421C18.781 8.63317 18.781 7.36684 18 6.58579L12.2071 0.792894C11.8166 0.402369 11.1834 0.402369 10.7929 0.792894C10.4024 1.18342 10.4024 1.81658 10.7929 2.20711L15.5858 7H1.5C0.947715 7 0.5 7.44772 0.5 8C0.5 8.55229 0.947715 9 1.5 9H15.5858L10.7929 13.7929Z"
                            fill="#111315"/>
                    </svg>
                </button>
            </div>


        </div>


        <Modal className={'modals'} isOpen={isOpen} toggle={toggle}>
            <ModalHeader toggle={toggle}>
                <div className={'a-header-l'}>
                    <div className={'tag2'}>
                        {console.log(carReducer)}
                    </div>
                    <div className={'asosiy-text'}>Mashina qo'shish</div>
                </div>

            </ModalHeader>
            <ModalBody className={'modal-bodys'}>
                <div>
                    <label htmlFor="markasi" >
                        <h5 className={'label-text'}>Markasi</h5>
                    </label>
                    <div className="select">
                        <select id="markasi">

                            <option className={'option'} value="Option 1">CHEVROLET</option>
                            <option className={'option'} value="Option 2">LAda</option>
                        </select>
                        <span className="focus">
                            <img src={require('../../img/Vector 1.png')} alt=""/>
                        </span>
                    </div>
                </div>
                <div>
                    <label htmlFor="markasi" >
                        <h5 className={'label-text'}>Tonirovka</h5>
                    </label>
                    <div className="select">
                        <select id="markasi">

                            <option className={'option'} value="Option 1">yoq</option>
                            <option className={'option'} value="Option 2">bor</option>
                        </select>
                        <span className="focus">
                            <img src={require('../../img/Vector 1.png')} alt=""/>
                        </span>
                    </div>
                </div>

                <div>
                    <label htmlFor="toni" >
                        <h5 className={'label-text'}>Motor</h5>
                    </label>
                    <div className="select">
                        <input type="text" placeholder={'kiriting'}/>
                    </div>
                </div>
                <div>
                    <label htmlFor="toni" >
                        <h5 className={'label-text'}>Motor</h5>
                    </label>
                    <div className="select">
                        <input type="text" placeholder={'kiriting'}/>
                    </div>
                </div>
                <div>
                    <label htmlFor="toni" >
                        <h5 className={'label-text'}>Motor</h5>
                    </label>
                    <div className="select">
                        <input type="text" placeholder={'kiriting'}/>
                    </div>
                </div>
                <div>
                    <label htmlFor="toni" >
                        <h5 className={'label-text'}>Motor</h5>
                    </label>
                    <div className="select">
                        <input type="text" placeholder={'kiriting'}/>
                    </div>
                </div>
                <div>
                    <label htmlFor="toni" >
                        <h5 className={'label-text'}>Motor</h5>
                    </label>
                    <div className="select">
                        <input type="text" placeholder={'kiriting'}/>
                    </div>
                </div>
                <div>
                    <label htmlFor="toni" >
                        <h5 className={'label-text'}>Motor</h5>
                    </label>
                    <div className="select">
                        <input type="text" placeholder={'kiriting'}/>
                    </div>
                </div>
                <div>
                    <label>
                        <h5 className={'label-text'}>Rasm 360 ichki makon</h5>
                    </label>
                    <input id={'rasmichki'} type="file" placeholder={'Yuklash'}/>
                    <label htmlFor={'rasmichki'} className="select select-img">
                        <img src={require('../../img/photocamera.png')} alt=""/>
                        <h5 className={'rasmyukla'}>Yuklash</h5>


                    </label>
                </div>

                <div>
                    <label>
                        <h5 className={'label-text'}>Rasm 360 tashqi makon</h5>
                    </label>
                    <input id={'rasmtashqi'} type="file" placeholder={'Yuklash'}/>
                    <label htmlFor={'rasmtashqi'} className="select select-img">
                            <img src={require('../../img/photocamera.png')} alt=""/>
                            <h5 className={'rasmyukla'}>Yuklash</h5>


                    </label>
                </div>
                <div>
                    <label htmlFor="toni" >
                        <h5 className={'label-text'}>Description</h5>
                    </label>
                    <div className="select">
                        <textarea name="" id="" cols="30" rows="10" placeholder={'kiriting'}></textarea>
                    </div>
                </div>
                <div>
                    <label>
                        <h5 className={'label-text'}>Modeli turi uchun rasm</h5>
                    </label>
                    <input id={'modelturi'} type="file" placeholder={'Yuklash'}/>
                    <label htmlFor={'modelturi'} className="select select-img">
                        <img src={require('../../img/photocamera.png')} alt=""/>
                        <h5 className={'rasmyukla'}>Yuklash</h5>


                    </label>
                </div>




            </ModalBody>
            <ModalFooter>
                <button  className={'btn-saqlash'} onClick={toggle}>
                        Saqlash
                </button>
            </ModalFooter>
        </Modal>
    </div>


);
}

export default connect((carReducer),
    {
        getCars
    }
) (Asosiy);
