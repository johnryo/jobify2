import { Form, redirect, Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FormRow, Logo, SubmitBtn } from '../components';
import customFetch from '../utils/customFetch';
import StyledWrapper from '../assets/wrappers/RegisterAndLoginPage';

// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post('/auth/login', data);
    toast.success('Login successful');
    return redirect('/dashboard');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Login = () => {
  const navigate = useNavigate();

  const loginDemoUser = async () => {
    const data = {
      email: 'test@test.com',
      password: 'secret123',
    };
    try {
      await customFetch.post('/auth/login', data);
      toast.success('Take a test drive');
      navigate('/dashboard');
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };

  return (
    <StyledWrapper>
      <Form method='post' className='form'>
        <Logo />
        <h4>Log In</h4>
        <FormRow type='email' name='email' />
        <FormRow type='password' name='password' />
        <SubmitBtn />
        <button type='button' className='btn btn-block' onClick={loginDemoUser}>
          Explore the app
        </button>
        <p>
          Not a member yet?{' '}
          <Link to='/register' className='member-btn'>
            Register
          </Link>
        </p>
      </Form>
    </StyledWrapper>
  );
};

export default Login;