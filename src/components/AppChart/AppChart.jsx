import React from "react";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AppChart = ({ findId }) => {
  const chartData = findId.ratings.map((data) => {
    const rating = {
      name: data.name,
      count: data.count,
    };
    return rating;
  });
  return (
    <div>
      <p className="font-semibold text-2xl text-[#001931]">Ratings</p>
        <div className="w-full h-96 ">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} layout="vertical">
              <XAxis type="number" />
              <YAxis type="category" dataKey="name" />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#FF8811" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

  );
};

export default AppChart;
