import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-vector/global-volunteer-solidarity-hands-up-banner-with-earth-map-vector_1017-48268.jpg?w=1380&t=st=1703825061~exp=1703825661~hmac=5cadf3587d2a167eb26300cf98afdff9cac86d79a8d3704076c27346bea6ec4a)",
      }}
    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-center text-gray-100">
        <div className="max-w-md">
          <h1 className="mb-[5rem] text-6xl font-bold">You Are ?</h1>
          <div className="flex justify-center space-x-4">
            {/* Option 1 */}
            <Link
              to="donor/login"
              className="flex flex-col m-4 items-center group"
            >
              <i className="fa-solid fa-heart text-3xl transition-transform transform group-hover:scale-110"></i>
              <span className="transition-transform transform group-hover:scale-110">
                Donor
              </span>
            </Link>
            {/* Option 2 */}
            <Link
              to="blood-bank/register"
              className="flex flex-col m-4 items-center group"
            >
              <i className="fa-solid fa-hospital text-3xl transition-transform transform group-hover:scale-110"></i>
              <span className="transition-transform transform group-hover:scale-110">
                Hospital
              </span>
            </Link>
            {/* Option 3 */}
            <Link className="flex flex-col m-4 items-center group">
              <i className="fa-solid fa-droplet text-3xl transition-transform transform group-hover:scale-110"></i>
              <span className="ml-2 transition-transform transform group-hover:scale-110">
                Bloodbank
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
