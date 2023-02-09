import './ProfileAnim.css';

export const ProfileAnim = () => {
    return (
    <div className='container-xl'>
        <div className='row'>
            <div className="col-12 d-flex justify-content-center">
                <div className='match'>
                    <div className='match-item animate__animated animate__bounceInLeft'>
                        <img className="match-item__img" src="https://media.licdn.com/dms/image/C5603AQHqyVMziFXKFw/profile-displayphoto-shrink_800_800/0/1605965604602?e=1681344000&v=beta&t=yTSIWVlZs_CfAoYJJQOFki20V-_me8ISZTLIJr0Nxpw" alt='Voornaam Achternaam'/>  
                        <h5 className='match-item__name'>
                            <span>Anna</span>
                            <span>Mykhailenko</span>
                        </h5> 
                    </div>

                    <div className='d-flex flex-column align-items-center'>
                        <img className='match-item-gif animate__animated animate__backInDown animate__delay-1s' src='https://thumbs.gfycat.com/BossyFineBanteng-size_restricted.gif' alt='Animated hearts'></img>
                        <h3 className='animate__animated animate__jackInTheBox animate__delay-2s'>It's a match!</h3>
                    </div>

                    <div className='match-item animate__animated animate__bounceInRight'>
                        <img className="match-item__img" src="https://media.licdn.com/dms/image/C4D03AQGp-NfEz7oqXw/profile-displayphoto-shrink_800_800/0/1600867990626?e=1681344000&v=beta&t=1ppziA_ZtZ2riCnFd_3lZZyaU6LL2LiQnt88jQmvD1o" alt='Voornaam Achternaam'/>  
                        <h5 className='match-item__name'>
                            <span>Ryan</span>
                            <span>Kool</span>
                        </h5>    
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    );
  };
  