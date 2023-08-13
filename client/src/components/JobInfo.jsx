import StyledWrapper from '../assets/wrappers/JobInfo';

const JobInfo = ({ icon, text }) => {
  return (
    <StyledWrapper>
      <span className='job-icon'>{icon}</span>
      <span className='job-text'>{text}</span>
    </StyledWrapper>
  );
};

export default JobInfo;
