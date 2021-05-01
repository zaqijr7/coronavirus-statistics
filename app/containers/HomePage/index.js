/* eslint-disable react/button-has-type */
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
import CardDataContinent from '../../components/CardDataContinent';
import CardUserActive from '../../components/CardUserActive';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

export default function HomePage(props) {
  const location = props.location.pathname.split('/');
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
                <CardChart location={props.location.pathname} />
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
                    <CardDataContinent />
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
                    <CardDataContinent />
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
