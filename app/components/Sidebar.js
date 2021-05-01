import React from 'react';

function Sidebar() {
  return (
    <div className="col-md-2 sidebar bg-white shadow d-none d-md-block">
      <div className="row mt-4">
        <span className="fs-5 text-success mb-2 ms-3">HOME</span>
        <hr />
      </div>
      <div className="row">
        <span className="fs-5 text-dark mb-2 ms-3 mb-3">DATA</span>
        <div className="row m-0">
          <ul className="list-group px-3">
            <li className="list-group-item fs-6 ms-0 mb-3 border-0 p-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                fill="currentColor"
                className="bi bi-pencil-square me-3"
                viewBox="0 0 16 16"
              >
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path
                  fillRule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                />
              </svg>
              Confirmed
            </li>
            <li className="list-group-item fs-6 ms-0 mb-3 border-0 p-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                fill="currentColor"
                className="bi bi-shield-fill-plus me-3"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm-.5 5a.5.5 0 0 1 1 0v1.5H10a.5.5 0 0 1 0 1H8.5V9a.5.5 0 0 1-1 0V7.5H6a.5.5 0 0 1 0-1h1.5V5z"
                />
              </svg>
              Recovered
            </li>
            <li className="list-group-item fs-6 ms-0 mb-3 border-0 p-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-2 -2 24 24"
                width="24"
                height="24"
                preserveAspectRatio="xMinYMin"
                className="icon__icon me-3"
              >
                <path d="M11 18h2a1 1 0 0 0 1-1v-2.07l1.065-.563A5.498 5.498 0 0 0 18 9.5v-2A5.5 5.5 0 0 0 12.5 2h-5A5.5 5.5 0 0 0 2 7.5v2a5.498 5.498 0 0 0 2.935 4.867L6 14.93V17a1 1 0 0 0 1 1h2v-2a1 1 0 0 1 2 0v2zm5-1a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-.865A7.499 7.499 0 0 1 0 9.5v-2A7.5 7.5 0 0 1 7.5 0h5A7.5 7.5 0 0 1 20 7.5v2a7.499 7.499 0 0 1-4 6.635V17zM6 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm8 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
              </svg>
              Deaths
            </li>
          </ul>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Sidebar;
