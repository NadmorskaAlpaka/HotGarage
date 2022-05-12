import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Highlight from './ui/Highlight';

const Highlights = () => {
    return (
        <section id="highlights">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Why choose <span className="purple">Hot Garage</span>
                    </h2>
                    <div className="highlight__wrapper">
                       <Highlight 
                                icon={<FontAwesomeIcon icon="bolt" />}
                                subtitle="
                                Fast as lightning"
                                para="The fastest toy cars you can get online" 
                        />
                       <Highlight 
                                icon={<FontAwesomeIcon icon="fa-car" />}
                                subtitle="5000+ Cars"
                                para="Hot Garage has all your favorite cars" 
                        />
                       <Highlight 
                                icon={<FontAwesomeIcon icon="fa-money-bill" />}
                                subtitle="Affordable"
                                para="Best prices on the web guaranteed" 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Highlights;
