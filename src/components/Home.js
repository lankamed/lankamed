import React from 'react';
import '../assets/css/Home.css';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

ChartJS.register(ArcElement, Tooltip, Legend);

const bedData = {
  labels: ['ICU Beds', 'General Beds', 'Available Beds'],
  datasets: [
    {
      label: '# of Beds',
      data: [12, 19, 7],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
    }
  ]
};

const Home = () => {
  return (
    <div className="home-container">
      <h2>Welcome to the Lanka MED</h2>

      <div className="card-container">
        <div className="card">
          <h3>Patient Conditions</h3>
          <p>Total Patients: 120</p>
          <p>Critical: 10</p>
          <p>Stable: 90</p>
          <p>Recovering: 20</p>
        </div>

        <div className="card">
          <h3>Bed Count</h3>
          <p>Total Beds: 150</p>
          <p>Occupied: 100</p>
          <p>Available: 50</p>
        </div>

        <div className="card">
          <h3>Doctor Count</h3>
          <p>Total Doctors: 50</p>
          <p>On Duty: 30</p>
          <p>Off Duty: 20</p>
        </div>

        <div className="card">
          <h3>Bed Occupancy</h3>
          <Pie data={bedData} />
        </div>

        <div className="card">
          <h3>Geographical Distribution</h3>
          <ComposableMap>
            <Geographies geography="https://unpkg.com/world-atlas/world/110m.json">
              {({ geographies }) =>
                geographies.map(geo => (
                  <Geography key={geo.rsmKey} geography={geo} />
                ))
              }
            </Geographies>
          </ComposableMap>
        </div>
      </div>
    </div>
  );
};

export default Home;
