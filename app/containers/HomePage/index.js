/* eslint-disable no-plusplus */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import axios from 'axios';
import React, { useEffect, useState } from 'react';

// import component
import CardChart from '../../components/CardChart';
import CardDataContinent from '../../components/CardDataContinent';
import CardUserActive from '../../components/CardUserActive';
import ChartActivity from '../../components/ChartActivity';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

// import data dummy
import { asia, europe } from '../../helpers/dummy';

export default function HomePage(props) {
  const location = props.location.pathname.split('/');
  const [dataSummary, setDataSummary] = useState([]);

  const getDataCountry = async () => {
    try {
      const response = await axios.get('https://covid19.mathdro.id/api/daily');
      const dataResponse = [];
      for (
        let index = response.data.length - 5;
        index < response.data.length;
        index++
      ) {
        dataResponse.push(response.data[index]);
      }
      setDataSummary(dataResponse);
    } catch (err) {
      setDataSummary(err.response.data);
    }
  };

  useEffect(() => {
    getDataCountry();
  }, []);
  return (
    <>
      <Navbar />
      <div className="container-fluid m-0 p-0">
        <div className="row m-0">
          <Sidebar location={props.location.pathname} />
          <div className="col-12 col-md-10 body-section">
            <div className="row">
              <div className="col-12 mt-4 px-3">
                <span className="fw-bold fs-5">{`Coronavirus ${
                  location[1] === '' ? 'confirmed' : location[1]
                } data`}</span>
              </div>
            </div>
            <div className="row my-4">
              <div className="col-12 col-md-7">
                <CardChart
                  location={props.location.pathname}
                  data={dataSummary}
                />
              </div>
              <div className="col-12 col-md-5 mt-md-0 mt-4">
                <CardUserActive />
              </div>
            </div>
            <div className="row my-4">
              <div className="col-12 col-md-6">
                <div className="row">
                  <span className="fw-bold fs-5m my-3">
                    Coronavirus in Asia
                  </span>
                </div>
                <div className="row">
                  <div className="col-12">
                    <CardDataContinent country={asia} />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="row">
                  <span className="fw-bold fs-5m my-3">
                    Coronavirus in Europe
                  </span>
                </div>
                <div className="row">
                  <div className="col-12">
                    <CardDataContinent country={europe} />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <span className="fw-bold fs-5m my-3">
                    Coronavirus in Europe
                  </span>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="card mb-4">
                      <div className="card-header m-0 p-0 bg-white">
                        <div className="row m-0 p-0">
                          <div className="col-2 py-3 border-top border-2 border-success">
                            <span className="fw-bold text-dark">Discusion</span>
                          </div>
                          <div className="col-2 py-3 ">
                            <span className="fw-bold text-muted">
                              Blog Post
                            </span>
                          </div>
                          <div className="col-8 py-3 ">
                            <span className="fw-bold text-muted">
                              Questions and Answers
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <ChartActivity />
                      </div>
                      <div className="card-footer bg-white">
                        <div className="btn-group my-0 py-0">
                          <button
                            className="btn btn-sm dropdown-toggle my-0 py-0"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Last 4 days
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <button className="dropdown-item">
                                Last Week
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
