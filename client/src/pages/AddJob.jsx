import { Form, redirect, useOutletContext } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FormRow, FormRowSelect, SubmitBtn } from '../components';
import customFetch from '../utils/customFetch';
import { JOB_STATUS, JOB_TYPE } from '../../../utils/constants';
import StyledWrapper from '../assets/wrappers/DashboardFormPage';

// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post('/jobs', data);
    toast.success('Job added successfully');
    return redirect('all-jobs');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
};

const AddJob = () => {
  const { user } = useOutletContext();

  return (
    <StyledWrapper>
      <Form method='post' className='form'>
        <h4 className='form-title'>Add job</h4>
        <div className='form-center'>
          <FormRow type='text' name='position' />
          <FormRow type='text' name='company' />
          <FormRow
            type='text'
            labelText='Job location'
            name='jobLocation'
            defaultValue={user.location}
          />
          <FormRowSelect
            labelText='Job status'
            name='jobStatus'
            list={Object.values(JOB_STATUS)}
            defaultValue={JOB_STATUS.PENDING}
          />
          <FormRowSelect
            labelText='Job type'
            name='jobType'
            list={Object.values(JOB_TYPE)}
            defaultValue={JOB_TYPE.FULL_TIME}
          />
          <SubmitBtn formBtn />
        </div>
      </Form>
    </StyledWrapper>
  );
};

export default AddJob;
