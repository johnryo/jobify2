import { Link } from 'react-router-dom';
import main from '../assets/images/main.svg';
import { Logo } from '../components';
import StyledWrapper from '../assets/wrappers/LandingPage';

const Landing = () => {
  return (
    <StyledWrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            Job <span>tracking</span> app
          </h1>
          <p>
            Dreamcatcher waistcoat readymade irony salvia cray vaporware.
            Aesthetic praxis prism solarpunk vexillologist yuccie tilde. Cray
            subway tile post-ironic kogi tumblr knausgaard JOMO hoodie cardigan
            edison bulb pitchfork paleo lo-fi. Praxis prism solarpunk
            vexillologist
          </p>
          <Link to='/register' className='btn register-link'>
            Register
          </Link>
          <Link to='/login' className='btn'>
            Log In / Demo User
          </Link>
        </div>
        <img src={main} alt='Job hunt' className='img main-img' />
      </div>
    </StyledWrapper>
  );
};

export default Landing;
