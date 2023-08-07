import StyledWrapper from '../assets/wrappers/JobInfo';

// eslint-disable-next-line react/prop-types
const JobInfo = ({ icon, text }) => {
  return (
    <StyledWrapper>
      <span className='job-icon'>{icon}</span>
      <span className='job-text'>{text}</span>
    </StyledWrapper>
  );
};

export default JobInfo;
