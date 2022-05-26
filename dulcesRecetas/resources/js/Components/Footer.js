import React from 'react';
import { InertiaLink, Link } from "@inertiajs/inertia-react";

import '../../css//HeaderFooter.css'

// navbar navbar-fixed-bottom

export default function Header({ props }) {
    return (
        <footer className="footerprincipal">
            <section className="seccion">
                <ul>
                    <li><p>INFO</p></li>
                    <li><a href="#" >Preguntas frecuentes</a></li>
                    <li><a href="#" >Contacto</a></li>
                </ul>
            </section>
            <section className="seccion">
                <ul>
                    <li><p>SIGUENOS</p></li>
                    <li><a href="#" >Instagram</a></li>
                    <li><a href="#" >Facebook</a></li>
                </ul>

            </section>
        </footer>
    );
}