import { Link, useRouteError } from 'react-router-dom';
import img from '../assets/images/not-found.svg';
import StyledWrapper from '../assets/wrappers/ErrorPage';

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <StyledWrapper>
        <div>
          <img src={img} alt='Not found' />
          <h3>{error.statusText}</h3>
          <p>The page you are looking for cannot be found.</p>
          <Link to='/dashboard'>Back Home</Link>
        </div>
      </StyledWrapper>
    );
  }

  return (
    <StyledWrapper>
      <div>
        <h3>Something went wrong...🤔</h3>
      </div>
    </StyledWrapper>
  );
};

export default Error;
