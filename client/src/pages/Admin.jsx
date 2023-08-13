import { useLoaderData, redirect } from 'react-router-dom';
import { FaSuitcaseRolling, FaCalendarCheck } from 'react-icons/fa';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';
import { StatItem } from '../components';
import StyledWrapper from '../assets/wrappers/StatsContainer';

export const loader = async () => {
  try {
    const response = await customFetch.get('/users/admin/app-stats');
    return response.data;
  } catch (error) {
    toast.error('Not authorized to view this page');
    return redirect('/dashboard');
  }
};

const Admin = () => {
  const { users, jobs } = useLoaderData();

  return (
    <StyledWrapper>
      <StatItem
        title='Current users'
        count={users}
        color='#e9b949'
        bgc='#fcefc7'
        icon={<FaSuitcaseRolling />}
      />
      <StatItem
        title='Total jobs'
        count={jobs}
        color='#647acb'
        bgc='#e0e8f9'
        icon={<FaCalendarCheck />}
      />
    </StyledWrapper>
  );
};

export default Admin;
