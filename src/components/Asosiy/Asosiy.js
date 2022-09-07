import React from 'react';
import './Asosiy.css'
import {useState} from "react";

function Asosiy(props) {




    return (
        <div className={'asosiy'}>
            <div className={'asosiy-header'}>
                <div className={'a-header-l'}>
                    <div className={'tag'}>
                    </div>
                    <div className={'asosiy-text'}>Mashinalar</div>
                </div>
                <div className={'a-header-l'}>
                        <button  className={'btn-blue'}>
                            <span>+</span>
                    Mashina qo'shish
                        </button>
                </div>

            </div>
            <div className={'asosiy-body'}>
                <table className={'table'}>
                    <thead>
                    <tr className={'qator'}>
                        <td>#</td>
                        <td>Markasi</td>
                        <td>Gearbook</td>
                        <td>Tanirovkasi</td>
                        <td>Motor</td>
                        <td>Year</td>
                        <td>Color</td>
                        <td>Distance</td>
                        <td></td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className={'qator2'}>
                        <th>1.</th>
                        <th>CHEVROLET</th>
                        <th>Avtomat karobka</th>
                        <th>Yoq</th>
                        <th>1.6</th>
                        <th>2016</th>
                        <th>Oq</th>
                        <th>3000 km</th>
                        <th>-></th>
                    </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Asosiy;
