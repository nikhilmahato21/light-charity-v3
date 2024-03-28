
import { BarChart } from '@mui/x-charts/BarChart';
import { useLoaderData } from 'react-router-dom';

const Inventory = () => {
  const data = useLoaderData();
  console.log(data);
  // const inventoryData = [
  //   { bloodType: "A+", units: 25 },
  //   { bloodType: "B+", units: 30 },
  //   { bloodType: "O+", units: 20 },
  //   { bloodType: "AB+", units: 15 },
  //   { bloodType: "A-", units: 10 },
  //   { bloodType: "B-", units: 12 },
  //   { bloodType: "O-", units: 8 },
  //   { bloodType: "AB-", units: 5 },
  // ];

  return (
    <div className=" flex items-center justify-center w-full h-full ">
      <BarChart
    series={[
      {name: 'Series 1', data: [35, 40, 42, 10, 20, 17, 69, 37 ], color: '#880808',}, // Assigning blue color to the first series
    ]}
      height={500}
      xAxis={[{ data: ['A+', "A-", "O+", "O-", "AB+", "AB-", "B+", "B-"], 
      scaleType: 'band',
      axisLabel: { style: { fontSize: 100, color: '#fffff' } },
     }]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}

    />
    </div>
  );
};

export default Inventory;
