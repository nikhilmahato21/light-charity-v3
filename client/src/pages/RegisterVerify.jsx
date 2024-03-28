import { Form } from "react-router-dom"
import FormInput from "../components/FromInput"
import SubmitBtn from "../components/SubmitBtn"


const RegisterVerify = () => {
  return (

    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://img.freepik.com/free-vector/global-volunteer-solidarity-hands-up-banner-with-earth-map-vector_1017-48268.jpg?w=1380&t=st=1703825061~exp=1703825661~hmac=5cadf3587d2a167eb26300cf98afdff9cac86d79a8d3704076c27346bea6ec4a)'}}>
    <div className="hero-overlay bg-opacity-80"></div>
    <div className="hero-content text-center text-white"></div>
  
    <div className="max-w-md">

    <section className='h-screen grid place-items-center'>
    <Form
    method='post'
    className='card w-96 p-8 bg-transparent flex flex-col gap-y-4'
  >
    <h4 className='text-center text-3xl text-white font-bold'>Verify OTP</h4>
    <FormInput
      type='text'
      name='otp'
      size='ml-[5rem] font-bold text-xl px-14 w-[10rem]'
      maxLength='4'
   />
    <div className='mt-4 ml-[5rem] w-[10rem]'>
      <SubmitBtn text='verify' />
    </div>
  </Form>
  </section>
  </div>
  </div>
  )
}

export default RegisterVerify