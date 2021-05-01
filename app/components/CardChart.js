import React from 'react';
import Charts from './Charts';
import RowDown from './RowDown';
import RowUp from './RowUp';

function CardChart() {
  return (
    <div className="card">
      <div className="card-header bg-white m-0 px-0 py-0">
        <div className="row m-0 p-0 d-flex">
          <div className="col-4 border-top border-3 border-success">
            <div className="col-12 p-3">
              <div className="row">
                <small className="fw-bold">Confirmed</small>
              </div>
              <div className="row">
                <span className="fw-bold fs-3">52k</span>
              </div>
              <RowUp />
            </div>
          </div>
          <div className="col-4">
            <div className="col-12 p-3">
              <div className="row">
                <small className="fw-bold text-muted">Recovered</small>
              </div>
              <div className="row">
                <span className="fw-bold fs-3 text-muted">33k</span>
              </div>
              <RowUp />
            </div>
          </div>
          <div className="col-4">
            <div className="col-12 p-3">
              <div className="row">
                <small className="fw-bold text-muted">Deaths</small>
              </div>
              <div className="row">
                <span className="fw-bold fs-3 text-muted">78k</span>
              </div>
              <RowDown />
            </div>
          </div>
        </div>
        <div className="row">
          <span className="text-muted ms-3 my-3">The last 4 months</span>
        </div>
      </div>
      <div className="card-body">
        <Charts />
      </div>
    </div>
  );
}

export default CardChart;
