import { useEffect, useState } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

function Dashboard() {

  const [data, setData] = useState(null);

  const [graphData, setGraphData] =
    useState([]);

  useEffect(() => {

    // Replace later with API Gateway URL

    const mockData = {
      ID: "1",
      Timestamp: "2026-06-18 10:00:00",

      pH: 7.2,
      Temperature: 28,
      TDS: 500,
      Turbidity: 35,
      Flow: 20,
      Color: 80,

      Status: "SAFE",

      COD: 115.4,

      SensorHealth: "HEALTHY",

      Alert: "System Normal"
    };
    /*
    instead of mockData...we have to replace with the below

    const API_URL =
  "https://your-api-gateway-url";

fetch(API_URL)
  .then((response) =>
    response.json()
  )
  .then((result) => {

    setData(result.latest);

    setGraphData(
      result.history
    );

  });
    
    */

    setData(mockData);

    setGraphData([
      {
        time: "10:00",
        pH: 7.0,
        TDS: 450,
        Turbidity: 30,
        Flow: 18,
        COD: 105
      },
      {
        time: "10:05",
        pH: 7.1,
        TDS: 470,
        Turbidity: 32,
        Flow: 19,
        COD: 108
      },
      {
        time: "10:10",
        pH: 7.2,
        TDS: 500,
        Turbidity: 35,
        Flow: 20,
        COD: 115
      },
      {
        time: "10:15",
        pH: 7.3,
        TDS: 520,
        Turbidity: 38,
        Flow: 21,
        COD: 120
      }
    ]);

  }, []);

  if (!data) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="dashboard-container">

      {/* Header */}

      <div className="dashboard-header">

        <h1>
          HydroGuard Dashboard
        </h1>

      </div>

      {/* Timestamp */}

      <div className="timestamp-card">

        <h3>
          Last Updated
        </h3>

        <p>
          {data.Timestamp}
        </p>

      </div>

      {/* Sensor Cards */}

      <div className="sensor-grid">

        <div className="sensor-card">
          <h3>pH</h3>
          <p>{data.pH}</p>
        </div>

        <div className="sensor-card">
          <h3>Temperature</h3>
          <p>{data.Temperature} °C</p>
        </div>

        <div className="sensor-card">
          <h3>TDS</h3>
          <p>{data.TDS}</p>
        </div>

        <div className="sensor-card">
          <h3>Turbidity</h3>
          <p>{data.Turbidity}</p>
        </div>

        <div className="sensor-card">
          <h3>Flow</h3>
          <p>{data.Flow}</p>
        </div>

        <div className="sensor-card">
          <h3>Color</h3>
          <p>{data.Color}</p>
        </div>

        <div className="sensor-card cod-card">
          <h3>COD Prediction</h3>
          <p>{data.COD}</p>
        </div>

      </div>

      {/* Status Section */}

      <div className="status-grid">

        <div className="status-card">

          <h2>
            Water Status
          </h2>

          <p>
            {data.Status}
          </p>

        </div>

        <div className="status-card">

          <h2>
            Sensor Health
          </h2>

          <p>
            {data.SensorHealth}
          </p>

        </div>

      </div>

      {/* Alert */}

      <div className="alert-card">

        <h2>
          Alert Message
        </h2>

        <p>
          {data.Alert}
        </p>

      </div>

      {/* Graph */}

      <div className="graph-card">

        <h2>
          Historical Trend Analysis
        </h2>

        <ResponsiveContainer
          width="100%"
          height={400}
        >

          <LineChart
            data={graphData}
          >

            <CartesianGrid
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="time"
            />

            <YAxis />

            <Tooltip />

            <Legend />

            <Line
              type="monotone"
              dataKey="pH"
            />

            <Line
              type="monotone"
              dataKey="TDS"
            />

            <Line
              type="monotone"
              dataKey="Turbidity"
            />

            <Line
              type="monotone"
              dataKey="Flow"
            />

            <Line
              type="monotone"
              dataKey="COD"
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default Dashboard;