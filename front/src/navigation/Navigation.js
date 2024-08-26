import React, {useState, useEffect} from 'react';
import './Navigation.css';


function Navigation() {
    const [button, setButton] = useState(true);
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };
    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
        <nav className = 'navibar'>
            <div className ='navibar-container'>
                <div className='menu-icon' onClick={handleClick}> 

                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
            </div>
        </nav>
        </>
    );
}

export default Navigation
