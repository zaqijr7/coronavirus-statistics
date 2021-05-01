/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from 'react';
import Charts from './Charts';
import RowDown from './RowDown';
import RowUp from './RowUp';

function CardChart(props) {
  return (
    <div className="card">
      <div className="card-header bg-white m-0 px-0 py-0">
        <div className="row m-0 p-0 d-flex">
          <div
            className={`col-4 ${
              props.location === '/' ? 'border-top border-3 border-success' : ''
            } `}
          >
            <div className="col-12 p-3">
              <div className="row">
                <small
                  className={`fw-bold ${
                    props.location === '/' ? 'text-dark' : 'text-muted'
                  }`}
                >
                  Confirmed
                </small>
              </div>
              <div className="row">
                <span
                  className={`fw-bold fs-3 ${
                    props.location === '/' ? 'text-dark' : 'text-muted'
                  }`}
                >
                  52k
                </span>
              </div>
              <RowUp />
            </div>
          </div>
          <div
            className={`col-4 ${
              props.location === '/recovered'
                ? 'border-top border-3 border-success'
                : ''
            } `}
          >
            <div className="col-12 p-3">
              <div className="row">
                <small
                  className={`fw-bold ${
                    props.location === '/recovered' ? 'text-dark' : 'text-muted'
                  }`}
                >
                  Recovered
                </small>
              </div>
              <div className="row">
                <span
                  className={`fw-bold fs-3 ${
                    props.location === '/recovered' ? 'text-dark' : 'text-muted'
                  }`}
                >
                  33k
                </span>
              </div>
              <RowUp />
            </div>
          </div>
          <div
            className={`col-4 ${
              props.location === '/deaths'
                ? 'border-top border-3 border-success'
                : ''
            } `}
          >
            <div className="col-12 p-3">
              <div className="row">
                <small
                  className={`fw-bold ${
                    props.location === '/deaths' ? 'text-dark' : 'text-muted'
                  }`}
                >
                  Deaths
                </small>
              </div>
              <div className="row">
                <span
                  className={`fw-bold fs-3 ${
                    props.location === '/deaths' ? 'text-dark' : 'text-muted'
                  }`}
                >
                  78k
                </span>
              </div>
              <RowDown />
            </div>
          </div>
        </div>
        <div className="row">
          <span className="text-muted ms-3 mb-3">The last 4 months</span>
        </div>
      </div>
      <div className="card-body">
        <Charts />
      </div>
      <div className="card-footer bg-white">
        <div className="btn-group my-0 py-0">
          <button
            className="btn btn-sm dropdown-toggle my-0 py-0"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Last 4 months
          </button>
          <ul className="dropdown-menu">
            <li>
              <button className="dropdown-item">Last Week</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardChart;
