import React from 'react';
import { InertiaLink, Link, Head } from "@inertiajs/inertia-react";
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import Dropdown from '@/Components/Dropdown';

import '../../css//HeaderFooter.css'


export default function Header({ props }) {
    console.log(props);
    return (
        <>
            <header className="headerprincipal bg-white">

                <Head>

                    <title> Dulces Recetas </title>
                    {/* <link rel="icon" type="image/ico" href="../../img/favicon.ico" /> */}
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500&display=swap" rel="stylesheet" />

                </Head>

                <InertiaLink
                    href={route("recetas.index")}
                >
                    <img src="/images/bombonTranparente.png" className="logo" />
                </InertiaLink>

                <div className="contTitulo">

                    <h1 className="text-3xl font-bold text-center"> Dulces Recetas </h1>

                    <div className="contBotonera">

                        <InertiaLink
                            className="px-4 py-2 text-white bg-yellow-400 rounded-md focus:outline-none"
                            href={route("recetas.index")}
                        >
                            Recetas
                        </InertiaLink>
                        <InertiaLink
                            className="px-4 py-2 text-white bg-yellow-400 rounded-md focus:outline-none"
                            href={route("recetas.create")}
                        >
                            Nueva
                        </InertiaLink>
                        <InertiaLink
                            className="px-4 py-2 text-white bg-yellow-400 rounded-md focus:outline-none"
                            href={route("favoritos.index")}
                        >
                            Favoritas
                        </InertiaLink>
                        <InertiaLink
                            className="px-4 py-2 text-white bg-yellow-400 rounded-md focus:outline-none"
                            href={route("resenas.index")}
                        >
                            Reseñas
                        </InertiaLink>

                    </div>

                </div>

                {props.auth.user ? (

                    <div className="linkUser">

                        <Dropdown>

                            <Dropdown.Trigger>
                                <span className="inline-flex rounded-md">
                                    <button
                                        type="button"
                                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                    >
                                        {props.auth.user.name} 

                                        <svg
                                            className="ml-2 -mr-0.5 h-4 w-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </span>
                            </Dropdown.Trigger>

                            <Dropdown.Content>
                                <Dropdown.Link href={route('logout')} method="post" as="button">
                                    Log Out
                                </Dropdown.Link>
                                {/* <form action="{{ route('logout') }}" method="post">
                                @csrf
                                <button type="submit">Logout</button>
                            </form> */}

                                {/* <Link href={route('logout')} method="post" as="button" type="button">Logout</Link> */}

                                {/* <InertiaLink
                                href={route("logout")}
                            >
                                <img src="/images/bombonTranparente.png" className="logo" />
                            </InertiaLink>

                            <form id="logout-form" action={route('logout')} method="POST" >
                                Log Out
                                @csrf
                            </form> */}

                                {/* <Dropdown.Link href={route('logout')} method="post" as="button">
                                Log Out
                            </Dropdown.Link> */}
                                {/* <Link method="post" href={route('logout')} as="button">
                                Log Out
                            </Link> */}
                                {/* <a href={ route('logout') } onClick="event.preventDefault(); document.getElementById('logout-form').submit();">Logout</a>

                            <form id="logout-form" action={ route('logout') } method="POST" style={{ display: none }}>
                                @csrf
                            </form> */}

                            </Dropdown.Content>

                        </Dropdown>

                        <Link href={route('dashboard')} className="text-sm text-gray-700 underline ">
                            <img src={props.auth.user.imguser} className="logoUser" />
                        </Link>

                    </div>

                ) : (
                    <div className="linkUser">
                        <Link href={route('login')} className="text-sm text-gray-700 underline">
                            Login
                        </Link>

                        <Link href={route('register')} className="ml-4 text-sm text-gray-700 underline">
                            Registro
                        </Link>
                    </div>
                )}


            </header>

        </>
    );
}
