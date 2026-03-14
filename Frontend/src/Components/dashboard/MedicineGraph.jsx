import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const medicineData = [55, 12, 25, 8];
const total = medicineData.reduce((acc, val) => acc + val, 0);

const data = {
  labels: ["Paracetamol", "Vitamin Tablets", "Antacid Tablets", "Others"],
  datasets: [
    {
      data: medicineData,
      backgroundColor: [
        "linear-gradient(135deg, #4A90E2, #007BFF)",
        "linear-gradient(135deg, #34D399, #10B981)",
        "linear-gradient(135deg, #A855F7, #9333EA)",
        "linear-gradient(135deg, #FACC15, #F59E0B)",
      ],
      backgroundColor: ["#4A90E2", "#34D399", "#A855F7", "#FACC15"],
      borderWidth: 0,
      hoverOffset: 15,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: "70%",
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: "#111",
      padding: 10,
      callbacks: {
        label: function (context) {
          const value = context.raw;
          const percentage = ((value / total) * 100).toFixed(1);
          return `${context.label}: ${value} (${percentage}%)`;
        },
      },
    },
    datalabels: {
      color: "#fff",
      font: {
        weight: "bold",
        size: 13,
      },
      formatter: (value) => {
        const percentage = ((value / total) * 100).toFixed(0);
        return `${percentage}%`;
      },
    },
  },
};

const MedicineGraph = () => {
  return (
    <div
      className="shadow-lg rounded-4 p-4 bg-white h-100"
  style={{ width: "33%" }}
    >
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h5 className="fw-bold mb-0">Top Medicines Sold</h5>
          <small className="text-muted">Performance Overview</small>
        </div>

        <select className="form-select form-select-sm w-auto">
          <option>Daily</option>
          <option>Weekly</option>
          <option>Monthly</option>
          <option>Yearly</option>
        </select>
      </div>

      {/* Chart + Legend */}
      <div className="d-flex align-items-center justify-content-between">

        {/* Custom Legend */}
        <div className="d-flex flex-column gap-3">
          {data.labels.map((label, index) => {
            const percentage = ((medicineData[index] / total) * 100).toFixed(0);
            return (
              <div key={index} className="d-flex align-items-center gap-2">
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    backgroundColor: data.datasets[0].backgroundColor[index],
                  }}
                ></div>
                <div>
                  <div className="fw-semibold">{label}</div>
                  <small className="text-muted">{percentage}%</small>
                </div>
              </div>
            );
          })}
        </div>

        {/* Chart */}
        <div style={{ width: "200px", height: "200px", position: "relative" }}>
          <Doughnut data={data} options={options} />

          {/* Center Text */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
            }}
          >
            <h4 className="fw-bold mb-0">{total}</h4>
            <small className="text-muted">Total Sales</small>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MedicineGraph;
