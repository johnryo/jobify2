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
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <p>We can't seem to find the page you are looking for.</p>
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
