import StyledWrapper from '../assets/wrappers/StatItem';

// eslint-disable-next-line react/prop-types
const StatsItem = ({ count, title, icon, color, bgc }) => {
  return (
    <StyledWrapper color={color} bgc={bgc}>
      <header>
        <span className='count'>{count}</span>
        <span className='icon'>{icon}</span>
      </header>
      <h5 className='title'>{title}</h5>
    </StyledWrapper>
  );
};

export default StatsItem;
