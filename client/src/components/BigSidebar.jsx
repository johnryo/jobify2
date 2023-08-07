import { useDashboardContext } from '../pages/DashboardLayout';
import NavLinks from './NavLinks';
import Logo from './Logo';
import StyledWrapper from '../assets/wrappers/BigSidebar';

const BigSidebar = () => {
  const { showSidebar } = useDashboardContext();

  return (
    <StyledWrapper>
      <div
        className={
          showSidebar ? 'sidebar-container' : 'sidebar-container show-sidebar'
        }
      >
        <div className='content'>
          <header>
            <Logo />
          </header>
          <NavLinks isBigSidebar />
        </div>
      </div>
    </StyledWrapper>
  );
};

export default BigSidebar;
