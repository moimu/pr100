import React from 'react';
import { InertiaLink, Link } from "@inertiajs/inertia-react";
import Dropdown from '@/Components/Dropdown';

import '../../css//HeaderFooter.css'


export default function Header({ props }) {
    console.log(props);
    return (
        <header className="headerprincipal bg-white">

            <InertiaLink
                href={route("recetas.index")}
            >
                <img src="/images/bombonTranparente.png" className="logo" />
            </InertiaLink>

            <h1 className="text-3xl font-bold text-center"> Dulces Recetas </h1>

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
                                    {/* flechita desplegable */}
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
    );
}
