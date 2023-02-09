import './ProfileAnim.css';

export const ProfileAnim = () => {
    return (
    <div className='container-xl'>
        <div className='row'>
            <div className="col-12 d-flex justify-content-center">
                <div className='match'>
                    <div className='match-item animate__animated animate__bounceInLeft'>
                        <img className="match-item__img" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt='Voornaam Achternaam'/>  
                        <h5 className='match-item__name'>
                            <span>Voornaam</span>
                            <span>Achternaam</span>
                        </h5> 
                    </div>

                    <div className='d-flex flex-column align-items-center'>
                        <img className='match-item-gif animate__animated animate__backInDown animate__delay-1s' src='https://thumbs.gfycat.com/BossyFineBanteng-size_restricted.gif' alt='Animated hearts'></img>
                        <h3 className='animate__animated animate__jackInTheBox animate__delay-2s'>It's a match!</h3>
                    </div>

                    <div className='match-item animate__animated animate__bounceInRight'>
                        <img className="match-item__img" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"alt='Voornaam Achternaam'/>  
                        <h5 className='match-item__name'>
                            <span>Voornaam</span>
                            <span>Achternaam</span>
                        </h5>    
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    );
  };
  