import React from 'react';
import '../styles/sns.scss';
const Sns = () => {
    return (
        <div className="sns">
            <h3>Sns</h3>
            <div clasName="sns_icon">
                <ul>
                    <li>
                        <a href="#">
                            <span className="facebook"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="twitter"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="blog"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="instagram"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="youtube"></span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sns;