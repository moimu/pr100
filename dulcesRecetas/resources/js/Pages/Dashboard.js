import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, InertiaLink } from '@inertiajs/inertia-react';


export default function Dashboard(props) {

    return (

        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight"> Mi zona </h2>}
            props={props}
        >

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">

                            <InertiaLink
                                className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                                href={route("recetas.index")}
                            >
                                Recetas
                            </InertiaLink>

                        </div>
                    </div>
                </div>
            </div>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">

                            <InertiaLink
                                className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                                href={route("recetas.create")}
                            >
                                Nueva
                            </InertiaLink>

                        </div>
                    </div>
                </div>
            </div>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">

                            <InertiaLink
                                className="px-6 py-2 text-white bg-yellow-500 rounded-md focus:outline-none"
                                href={route("favoritos.index")}
                            >
                                Recetas favoritas
                            </InertiaLink>

                        </div>
                    </div>
                </div>
            </div>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">

                            <InertiaLink
                                className="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none"
                                href={route("resenas.index")}
                            >
                                Recetas reseñadas
                            </InertiaLink>

                        </div>
                    </div>
                </div>
            </div>
        

        </Authenticated>


    );
}

