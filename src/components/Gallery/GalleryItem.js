import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

const GalleryItem = ({ img, url, title, description }) => {
    return (
        <Link
            to={url}
            className="group bg-primary shadow-sm rounded-lg overflow-hidden"
            style={{ transform: 'translateZ(0)' }}
        >
            <GatsbyImage
                image={img.gatsbyImageData}
                alt={img.alt}
                className="h-64 md:h-80 lg:h-64 xl:h-80 transition-opacity duration-[150ms] group-hover:opacity-50"
            />
            <div className="p-4">
                <h3 className="font-bold">{title}</h3>
                <p>{description}</p>
            </div>
        </Link>
    );
};

export default GalleryItem;
