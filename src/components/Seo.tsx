import React from 'react';
import { Helmet } from 'react-helmet';

interface SeoProps {
    title: string;
    description?: string;
    keywords?: string;
}

const Seo: React.FC<SeoProps> = ({ title, description, keywords }) => {
    return (
        <Helmet>
            <title>{title} | Focca</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="robots" content="index, follow" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={window.location.href} />
            <meta property="og:image" content="URL_DA_IMAGEM" /> {/* Substitua pela URL da imagem */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content="URL_DA_IMAGEM" /> {/* Substitua pela URL da imagem */}
        </Helmet>
    );
};

export default Seo;