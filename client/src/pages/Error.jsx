import {  useRouteError } from 'react-router-dom'

const ErrorPage = () => {

    const error = useRouteError();

    if(error.status === 404){
        return (
            <div className="flex items-center justify-center h-screen bg-gray-100">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-red-600 mb-4">404 Error</h1>
                <p className="text-gray-700">Oops! The page you are looking for does not exist.</p>
              </div>
            </div>
          );
      }

      return (
     
           <h3 className='text-5xl justify-center items-center'>Something went wrong</h3>
       
      )
 
};

export default ErrorPage;


