
import { Form, Link } from "react-router-dom"
import FormInput from "../components/FromInput";
import SubmitBtn from "../components/SubmitBtn";



const Register = () => {


  return (

    <div className="hero min-h-screen " style={{backgroundImage: 'url(https://img.freepik.com/free-vector/global-volunteer-solidarity-hands-up-banner-with-earth-map-vector_1017-48268.jpg?w=1380&t=st=1703825061~exp=1703825661~hmac=5cadf3587d2a167eb26300cf98afdff9cac86d79a8d3704076c27346bea6ec4a)'}}>
        <div className="hero-overlay bg-opacity-80"></div>
    <div className="bg-transparent p-8  w-full sm:max-w-lg">
      <h2 className="text-3xl text-center text-white font-bold mb-6">Register</h2>
      <Form
       method='post'>
       
         
        <div className=" sm:grid-cols-2 grid gap-4">

          {/* Username Input */}

        <FormInput
        type='text'
        label='name'
        name='name'
      />
          {/* Email Input */}
        
          <FormInput
        type='email'
        label='email'
        name='email'
        required
      />

       <FormInput
        type='password'
        label='password'
        name='password'
      />

<div className="form-control">
    <label htmlFor='bloodGroup' className="label text-white">
      Blood Group
    </label>
    <select
      id='bloodGroup'
      name='bloodGroup'
      className= {`input input-bordered `}
    >
      <option value='A+'>A+</option>
      <option value='A-'>A-</option>
      <option value='B+'>B+</option>
      <option value='B-'>B-</option>
      <option value='AB+'>AB+</option>
      <option value='AB-'>AB-</option>
      <option value='O+'>O+</option>
      <option value='O-'>O-</option>
    </select>
      </div>


        </div>
        <FormInput
        type='text'
        label='address'
        name='address'
        size = "w-full"
       />
        <div className='mt-6'>
        <SubmitBtn text='Register' />
      </div>

      <p className='text-center mt-4 text-white'>
        Already a member 
        <Link
          to='/donor/login'
          className='ml-2 link link-hover link-primary capitalize'
        >
          login
        </Link>
      </p>

      </Form>
    </div>
  </div>

      
  )
};

export default Register;