import React from 'react';
import { InertiaLink, Link } from "@inertiajs/inertia-react";

import '../../css//HeaderFooter.css'
import git from '/images/git.png';
import linkedin from '/images/linkedin.png';
import instagram from '/images/instagram.png';
import contacto from '/images/contacto.png';
import faqs from '/images/faqs.png';
// navbar navbar-fixed-bottom

export default function Header({ props }) {
    return (
        <footer className="footerprincipal">
            <section className="seccion">
                <header> Info </header>
                <ul>                  
                    <li>
                        <a href="#" >
                            <img src={faqs} className="imgsiguenos" />
                        </a>
                    </li>
                    <li>
                        <a href="#" >
                            <img src={contacto} className="imgsiguenos" />
                        </a>
                    </li>
                </ul>
            </section>
            <section className="seccion">
                <header> Síguenos </header>
                <ul>
                    <li>
                        <a href="#" >
                            <img src={git} className="imgsiguenos" />
                        </a>
                    </li>
                    <li>
                        <a href="#" >
                            <img src={linkedin} className="imgsiguenos" />
                        </a>
                    </li>
                    <li>
                        <a href="#" >
                            <img src={instagram} className="imgsiguenos" />
                        </a>
                    </li>
                </ul>

            </section>
        </footer >
    );
}