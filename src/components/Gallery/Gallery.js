import React from 'react';
import GalleryItem from './GalleryItem';

const Gallery = ({ items }) => {
    return (
        <section className="bg-primary-muted py-20">
            <div className="container grid gap-x-10 gap-y-10 lg:gap-y-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {items.map((item, i) => {
                    return <GalleryItem key={i} {...item} />;
                })}
            </div>
        </section>
    );
};

export default Gallery;
