import { useState } from 'react';
import BarChart from './BarChart';
import AreaChart from './AreaChart';
import StyledWrapper from '../assets/wrappers/ChartsContainer';

// eslint-disable-next-line react/prop-types
const ChartsContainer = ({ data }) => {
  const [barChart, setBarChart] = useState(true);

  return (
    <StyledWrapper>
      <h4>Monthly applications</h4>
      <button type='button' onClick={() => setBarChart(!barChart)}>
        {barChart ? 'Area chart' : 'Bar chart'}
      </button>
      {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </StyledWrapper>
  );
};

export default ChartsContainer;
