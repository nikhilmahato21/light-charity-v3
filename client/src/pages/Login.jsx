import { Form, Link } from "react-router-dom"
import FormInput from "../components/FromInput"
import SubmitBtn from "../components/SubmitBtn"


const Login = () => {
  return (

    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://img.freepik.com/free-vector/global-volunteer-solidarity-hands-up-banner-with-earth-map-vector_1017-48268.jpg?w=1380&t=st=1703825061~exp=1703825661~hmac=5cadf3587d2a167eb26300cf98afdff9cac86d79a8d3704076c27346bea6ec4a)'}}>
  <div className="hero-overlay bg-opacity-80"></div>
  {/* <div className="hero-content text-center text-white"></div> */}

 

    <section className='h-screen grid place-items-center'>
    <Form
      method='post'
      className='card w-96 p-8 bg-transparent  flex flex-col gap-y-4'
    >
      <h4 className='text-center text-white text-3xl font-bold'>Login</h4>
      <FormInput
        type='email'
        label='email'
        name='email'
      />
      <FormInput
        type='password'
        label='password'
        name='password'
      />
      <div className='mt-4'>
        <SubmitBtn text='login' />
      </div>
      <p className='text-center text-white'>
        Not a member yet?
        <Link
          to='/donor/register'
          className='ml-2 link link-hover link-primary capitalize'
        >
          register
        </Link>
      </p>
    </Form>
  </section>

</div>
  )
}

export default Login