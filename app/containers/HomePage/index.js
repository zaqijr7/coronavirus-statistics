/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';

// import component
import CardChart from '../../components/CardChart';
import ChartUserActive from '../../components/ChartUserActive';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

export default function HomePage(props) {
  console.log(props.location);
  return (
    <>
      <Navbar />
      <div className="container-fluid m-0 p-0">
        <div className="row m-0">
          <Sidebar />
          <div className="col-12 col-md-10 body-section">
            <div className="row">
              <div className="col-12 mt-4 px-3">
                <span className="fw-bold fs-5">
                  Data Confirmed Corona Virus
                </span>
              </div>
            </div>
            <div className="row my-4">
              <div className="col-12 col-md-7">
                <CardChart />
              </div>
              <div className="col-12 col-md-5 mt-md-0 mt-4">
                <div className="card">
                  <div className="card-body card-user-active">
                    <div className="row">
                      <p>Active user right now</p> <br />
                      <span className="fs-2">479</span>
                    </div>
                    <div className="row">
                      <small className="my-3">Page views per minute</small>
                      <hr />
                    </div>
                    <div className="row">
                      <ChartUserActive />
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
