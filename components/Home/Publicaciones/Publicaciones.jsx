import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const posts = [
    {
        id: 1,
        titulo: 'Revista Latinoamericana De Ciencias Agrarias',
        href: 'https://revistas.peruvianscience.org/index.php/rlca/article/view/26',
        descrpcion:
            'Principales enfermedades que afectan el cultivo de papa (Solanum tuberosum L.) en la sierra - Alto Piura',
        fecha: 'jun. 15, 2023',
        categoria: { titulo: 'Vol. 1 Núm. 1 (2023)', href: 'https://revistas.peruvianscience.org/index.php/rlca/article/view/26' },
        autor: {
            nombre: 'Dilmer Saavedra Rojas',
            uni: 'Universidad Privada San Pedro',
            enlace: 'https://revistas.peruvianscience.org/index.php/rlca/article/view/26',
            img:
                'https://i.postimg.cc/Z5jyqzr4/149071.png',
        },
    },
    {
        id: 2,
        titulo: 'PRIUS Revista de Derecho y Ciencia Política',
        href: 'https://revistas.peruvianscience.org/index.php/PRIUS/article/view/31',
        descrpcion:
        'Resguardo de la información de la identidad biológica del adoptado: Una perspectiva del Derecho Comparado',
        fecha: 'jun. 15, 2023',
        categoria: { titulo: 'Vol. 1 Núm. 1 (2023)', href: 'https://revistas.peruvianscience.org/index.php/PRIUS/article/view/31' },
        autor: {
            nombre: 'Juan Andreas Bernardo Romero Pizarro',
            uni: 'Universidad Nacional Mayor de San Marcos',
            enlace: 'https://revistas.peruvianscience.org/index.php/PRIUS/article/view/31',
            img:
                'https://i.postimg.cc/Z5jyqzr4/149071.png',
        },
    },
    {
        id: 3,
        titulo: 'Revista Latinoamericana De Ciencias Agrarias',
        href: 'https://revistas.peruvianscience.org/index.php/rlca/article/view/27',
        descrpcion:
            'Viabilidad técnica en producción de forraje verde hidropónico en base a cebada (Hordeum vulgare) costa central - Perú',
        fecha: 'jun. 15, 2023',
        categoria: { titulo: 'Vol. 1 Núm. 1 (2023)', href: 'https://revistas.peruvianscience.org/index.php/rlca/article/view/27' },
        autor: {
            nombre: 'Edgardo Arturo Vilcara Cardenas',
            uni: 'Universidad Nacional Agraria La Molina',
            enlace: 'https://revistas.peruvianscience.org/index.php/rlca/article/view/27',
            img:
                'https://i.postimg.cc/Z5jyqzr4/149071.png',
        },
    },
    {
        id: 4,
        titulo: 'PRIUS Revista de Derecho y Ciencia Política',
        href: 'https://revistas.peruvianscience.org/index.php/PRIUS/article/view/23',
        descrpcion:
        'Los Optimates: En defensa de la libertad',
        fecha: 'jun. 15, 2023',
        categoria: { titulo: 'Vol. 1 Núm. 1 (2023)', href: 'https://revistas.peruvianscience.org/index.php/PRIUS/article/view/23' },
        autor: {
            nombre: 'Alejandro Rameth Aréstegui Callo',
            uni: 'Universidad Francisco Marroquín',
            enlace: 'https://revistas.peruvianscience.org/index.php/PRIUS/article/view/23',
            img:
                'https://i.postimg.cc/Z5jyqzr4/149071.png',
        },
    },
    {
        id: 5,
        titulo: 'Revista Latinoamericana De Ciencias Agrarias',
        href: 'https://revistas.peruvianscience.org/index.php/rlca/article/view/28',
        descrpcion:
        'Principales enfermedades que afectan al cultivo de papa en Pataz, La Libertad, Perú',
        fecha: 'jun. 15, 2023',
        categoria: { titulo: 'Vol. 1 Núm. 1 (2023)', href: 'https://revistas.peruvianscience.org/index.php/rlca/article/view/28' },
        autor: {
            nombre: 'Alejandro Rameth Aréstegui Callo',
            uni: 'Universidad Privada San Pedro',
            enlace: 'https://revistas.peruvianscience.org/index.php/rlca/article/view/28',
            img:
                'https://i.postimg.cc/Z5jyqzr4/149071.png',
        },
    },
    {
        id: 6,
        titulo: 'Revista Latinoamericana De Ciencias Agrarias',
        href: 'https://revistas.peruvianscience.org/index.php/PRIUS/article/view/40',
        descrpcion:
        'El enemigo en el Tribunal de la Inquisición',
        fecha: 'jun. 15, 2023',
        categoria: { titulo: 'Vol. 1 Núm. 1 (2023)', href: 'https://revistas.peruvianscience.org/index.php/PRIUS/article/view/40' },
        autor: {
            nombre: 'Fabian Alonso Rodriguez Pareja',
            uni: 'Universidad Nacional Mayor de San Marcos',
            enlace: 'hhttps://revistas.peruvianscience.org/index.php/PRIUS/article/view/40',
            img:
                'https://i.postimg.cc/Z5jyqzr4/149071.png',
        },
    },
   
]


export default function Publicaciones() {

    return (
        <div className="bg-white py-24 sm:py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Publicaciones</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Visita las publicaciones realizadas en nuestras Revistas
                    </p>
                </div>
                <hr className="my-8" />
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    navigation={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: true,
                    }}
                    modules={[Autoplay, Navigation, Pagination]}
                    className="mySwiper"
                >
                    <div className="mx-auto py-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {posts.map((post) => (
                            <SwiperSlide key={post.id}>
                                <article className="flex max-w-xl flex-col items-start justify-between">
                                    <div className="flex items-center gap-x-4 text-xs">
                                        <time className="text-gray-500">
                                            {post.fecha}
                                        </time>
                                        <a
                                            href={post.categoria_titulo}
                                            target='_blank'
                                            title="Ir a la publicación"
                                            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                        >
                                            {post.categoria.titulo}
                                        </a>
                                    </div>
                                    <div className="group relative">
                                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                            <a href={post.href} title="Ir a la publicación">
                                                <span className="absolute inset-0" />
                                                {post.titulo}
                                            </a>
                                        </h3>
                                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.descrpcion}</p>
                                    </div>
                                    <div className="relative mt-8 flex items-center gap-x-4">
                                        <img src={post.autor.img} alt="Autor" className="h-10 w-10 rounded-full bg-gray-50" />
                                        <div className="text-sm leading-6">
                                            <p className="font-semibold text-gray-900">
                                                <a href={post.autor.enlace} title="Ir a la publicación">
                                                    <span className="absolute inset-0" />
                                                    {post.autor.nombre}
                                                </a>
                                            </p>
                                            <p className="text-gray-600">{post.autor.uni}</p>
                                        </div>
                                    </div>
                                </article>
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
            </div>
        </div>
    );
}
