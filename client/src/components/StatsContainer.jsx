/* eslint-disable react/prop-types */
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from 'react-icons/fa';
import StatItem from './StatItem';
import StyledWrapper from '../assets/wrappers/StatsContainer';

const StatsContainer = ({ defaultStats }) => {
  const stats = [
    {
      title: 'Pending applications',
      count: defaultStats?.pending || 0,
      icon: <FaSuitcaseRolling />,
      color: '#f59e0b',
      bgc: '#fef3c7',
    },
    {
      title: 'Interviews scheduled',
      count: defaultStats?.interview || 0,
      icon: <FaCalendarCheck />,
      color: '#647acb',
      bgc: '#e0e8f9',
    },
    {
      title: 'Jobs declined',
      count: defaultStats?.declined || 0,
      icon: <FaBug />,
      color: '#d66a6a',
      bgc: '#ffeeee',
    },
  ];

  return (
    <StyledWrapper>
      {stats.map((item) => {
        return <StatItem key={item.title} {...item} />;
      })}
    </StyledWrapper>
  );
};

export default StatsContainer;
