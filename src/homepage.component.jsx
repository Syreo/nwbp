import './homepage.styles.scss';
const HomePage = () => {
    return (
        <div className='homepage'>
            <div className='directory-menu'>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>Strawberries</h1>
                        <span className='subtitle'>Shop Now</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>Blueberries</h1>
                        <span className='subtitle'>Shop Now</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>Herbs & Vegetables</h1>
                        <span className='subtitle'>Shop Now</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>Blackberries</h1>
                        <span className='subtitle'>Shop Now</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>Elderberries</h1>
                        <span className='subtitle'>Shop Now</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;
