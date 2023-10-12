import React, { PureComponent } from "react";
import { useLoaderData } from "react-router-dom";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const Statistics = () => {
  const data = useLoaderData();
  const mySavedData = JSON.parse(localStorage.getItem("item")) || [];

  const showPie = [
    { name: "Total Donation ", value: data.length - mySavedData.length },
    { name: "Already Donated", value: mySavedData.length },
  ];
  const COLORS = ["#FA490B", "#3AD166"];
  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <>
      <section
        id="stat"
        className=" content-box grid grid-cols-1 lg:grid-cols-2 items-center mt-10 "
      >
        <h2 className=" text-lg md:text-3xl lg:text-4xl font-bold py-5 text-center">
          The percentage of donation
        </h2>
        <div style={{ width: "100%", height: "400px" }}>
          <ResponsiveContainer>
            <PieChart
              width={400}
              height={400}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <Pie
                data={showPie}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip></Tooltip>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </section>
    </>
  );
};

export default Statistics;
