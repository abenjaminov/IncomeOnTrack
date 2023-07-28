import {dashboardView} from "./dashboard.css";
import {useDashboard} from "./useDashboard";
import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis, Tooltip} from "recharts";
import React from "react";

export const DashboardView = () => {
  const { lastTwelveMonthsGraph } = useDashboard();

    const barChardData = lastTwelveMonthsGraph?.data?.items || [];

    return (
        <div className={dashboardView}>
          <ResponsiveContainer width="45%" height="50%">
            <BarChart width={500} height={300} data={barChardData} margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="label" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="payment" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
    )
}
