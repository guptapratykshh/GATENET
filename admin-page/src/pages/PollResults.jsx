import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import 'react-toastify/dist/ReactToastify.css';
import './PollResults.css';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const PollResults = () => {
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    const storedPolls = JSON.parse(localStorage.getItem('polls')) || [];
    setPolls(storedPolls);
  }, []);

  const togglePublish = (index) => {
    const updatedPolls = [...polls];
    const poll = updatedPolls[index];
    poll.published = !poll.published;
    localStorage.setItem('polls', JSON.stringify(updatedPolls));
    setPolls(updatedPolls);

    toast.success(
      `Poll "${poll.question}" ${poll.published ? 'published' : 'unpublished'} successfully!`
    );
  };

  return (
    <div className="poll-results-container">
      <h2>Poll Results</h2>
      {polls.length === 0 ? (
        <p className="no-polls">No polls found.</p>
      ) : (
        polls.map((poll, index) => {
          const votes = poll.votes || [];
          const total = votes.reduce((a, b) => a + b, 0) || 1;

          const percentages = votes.map((v) =>
            ((v / total) * 100).toFixed(1)
          );

          const chartData = {
            labels: poll.options,
            datasets: [
              {
                label: '% of Votes',
                data: percentages,
                backgroundColor: ['#4CAF50', '#F44336', '#2196F3', '#FF9800'],
                borderWidth: 1,
              },
            ],
          };

          const chartOptions = {
            scales: {
              y: {
                beginAtZero: true,
                max: 100,
                ticks: {
                  callback: (value) => `${value}%`,
                },
              },
            },
          };

          return (
            <div className="poll-card" key={index}>
              <h4 className="poll-question">{poll.question}</h4>
              <Bar data={chartData} options={chartOptions} />
              <p className="poll-total">
                Total Votes: <strong>{total}</strong>
              </p>
              <p className="poll-status">
                Status: <strong>{poll.published ? 'Published' : 'Unpublished'}</strong>
              </p>
              <button
                className="publish-btn"
                onClick={() => togglePublish(index)}
              >
                {poll.published ? 'Unpublish' : 'Publish'} Result
              </button>
            </div>
          );
        })
      )}
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default PollResults;
