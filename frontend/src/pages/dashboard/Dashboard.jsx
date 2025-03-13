import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Loading from '../../components/Loading';
import getBaseUrl from '../../utils/baseURL';
import RevenueChart from './RevenueChart';
import { MdIncompleteCircle } from 'react-icons/md';

import './css/Dashboard.css'

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${getBaseUrl()}/api/admin`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
        });

        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Loading />;

  return (
    <>
      <section className="section-grid">
        <div className="dashboard-item">
          <div className="icon-container purple-icon">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="icon">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
          <div>
            <span className="data-value">{data?.totalBooks}</span>
            <span className="data-label">Products</span>
          </div>
        </div>

        {/* Add other dashboard items similarly */}

        {/* Revenue Chart Section */}
        <div className="chart-container">
          <div className="chart-header">Revenue Chart</div>
          <div className="chart-content">
            <RevenueChart />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="footer-text">
        <a href="#" className="purple-link">Recreated on Codepen</a> with{' '}
        <a href="https://tailwindcss.com/" className="teal-link">Tailwind CSS</a> by Azri Kahar,{' '}
        <a href="#" className="purple-link">original design</a> made by Chili Labs
      </section>
    </>
  );
};

export default Dashboard;
