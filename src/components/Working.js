import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Working() {
    return (
        <div>
            <Navbar />
            <div className="container mt-5">
                <h1 className="display-4 text-center mb-4">How To Assemble</h1>
                <div className="embed-responsive embed-responsive-16by9 mb-4" style={{ backgroundColor: "#000", display: "flex", justifyContent: "center", alignItems: "center", color: "#fff", height: "400px" }}>
                    <p>Video Placeholder ("Coming Soon: Step-by-Step Video Guide for Assembly")</p>
                </div>
                <div className="content">
                    <p className="lead"><b>How does the Foldhope work?</b></p>
                    <p className="text-justify">
                        The Foldhope is an affordable, paper-based microscope that works remarkably well despite its simple construction. 
                        It uses a glass lens with a magnification of up to 140x and a 2-micron resolution. 
                        The microscope includes a sliding focus ramp, allowing the user to easily adjust the focus to observe different sections 
                        of the specimen without needing to adjust the lens. This makes it an excellent tool for both educational and scientific purposes.
                    </p>
                </div>
                <h2 className="mt-5 mb-3">Steps to Follow:</h2>
                <ol className="list-unstyled">
                    <li className="mb-2">1. Assemble the Foldhope following the instructions provided.</li>
                    <li className="mb-2">2. Prepare your specimen on a slide and place it in the Foldhope.</li>
                    <li className="mb-2">3. Use the sliding focus ramp to bring the specimen into clear view.</li>
                    <li className="mb-2">4. Use your thumbs to press and move the lens stage in the same direction to pan around the sample.</li>
                    <li className="mb-2">5. Observe and enjoy exploring the microscopic world!</li>
                </ol>
                <a className='my-3' href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4062392/" target="_blank" rel="noopener noreferrer">....Reference link......</a>
            </div>
            <Footer />
        </div>
    );
}
