/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import React from 'react';

function CardDataContinent(props) {
  console.log(props);
  return (
    <div className="card">
      <div className="card-body p-3">
        <table className="table">
          <tbody>
            <tr>
              <td style={{ width: '250px' }} className="text-muted">
                Country
              </td>
              <td className="text-muted">Confirmed</td>
              <td className="text-muted">Recovered</td>
              <td className="text-muted">Deaths</td>
            </tr>
            {props.country.map((item, index) => (
              <tr key={index.toString()}>
                <td>{item}</td>
                <td className="text-center">25</td>
                <td className="text-center">345</td>
                <td className="text-center">345</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="card-footer bg-white">
        <div className="row">
          <div className="col-12 d-flex justify-content-between">
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
                  <button className="dropdown-item">Last Week</button>
                </li>
              </ul>
            </div>
            <div className="d-flex justify-content-end align-items-center text-success">
              DATA REPORT
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
    </div>
  );
}

export default CardDataContinent;
