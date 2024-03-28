import { Link, useLoaderData } from "react-router-dom";


const Donors = () => {
  const data = useLoaderData();

  if(data.bloodBank.donors.length === 0){
    return(
      <div className=" flex flex-col gap-6 items-center justify-center w-full h-full">
          <h1 className="text-5xl font-bold"> No Donors yet</h1>
           <Link to="add-donor" className=" btn text-xl"> Add donor +</Link>
      </div>
    )
  }

  else{
  return (
    <div className=" flex items-center justify-center w-full h-auto">
      <div className="overflow-x-auto">
        <table className="table table-md">
          <thead className=" text-lg text-base-900 capitalize">
            <tr>
              <th></th>
              <th>Name</th>
              <th>email</th>
              <th>number</th>
              <th>location</th>
              <th>Blood Group</th>
              <th>Donated (bangs)</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
          {data.bloodBank.donors.slice().reverse().map((donor, index) => (
           <tr key={index}>
           <th>{index + 1}</th>
           <td className=" capitalize">{donor.name}</td>
           <td>{donor.email}</td>
           <td>{donor.number}</td>
           <td>{donor.address}</td>
           <td>{donor.bloodGroup}</td>
           <td>{donor.donated}</td>
           <td>{donor.date}</td>
           </tr>
           ))}
          </tbody>
        </table>
      </div>
    </div>
  );
            }
};

export default Donors;
