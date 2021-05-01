import React from 'react';
import ChartUserActive from './ChartUserActive';

function CardUserActive() {
  return (
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
        <div className="row">
          <div className="col-12 d-flex justify-content-between border-bottom-hair pb-2">
            <span>Top Active Pages</span>
            <span>Active Users</span>
          </div>
          <div className="col-12 d-flex justify-content-between border-bottom-hair py-2">
            <span>/</span>
            <span>34</span>
          </div>
          <div className="col-12 d-flex justify-content-between border-bottom-hair py-2">
            <span>/confirmed</span>
            <span>75</span>
          </div>
          <div className="col-12 d-flex justify-content-between border-bottom-hair py-2">
            <span>/recovered</span>
            <span>25</span>
          </div>
          <div className="col-12 d-flex justify-content-between border-bottom-hair py-2">
            <span>/deaths</span>
            <span>342</span>
          </div>
          <div className="col-12 d-flex justify-content-between py-2">
            <span>/login</span>
            <span>32</span>
          </div>
        </div>
      </div>
      <div className="card-footer card-user-active border-white">
        <div className="row">
          <div className="col-12 d-flex justify-content-end align-items-center">
            REAL-TIME REPORT
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-8 -5 24 24"
              width="24"
              height="24"
              preserveAspectRatio="xMinYMin"
              className="icon__icon ms-2"
            >
              <path d="M5.314 7.071l-4.95-4.95A1 1 0 0 1 1.778.707l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-1.414-1.414l4.95-4.95z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardUserActive;
