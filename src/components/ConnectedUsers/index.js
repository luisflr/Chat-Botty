import React from "react";

function ConnectedUsers() {
  return (
    <div className="col-12 col-lg-5 col-xl-3 border-right">
      <div className="px-4 d-none d-md-block">
        <div className="d-flex align-items-center">
          <div className="flex-grow-1">
            <input
              type="text"
              className="form-control my-3"
              placeholder="Search..."
            />
          </div>
        </div>
      </div>

      <a href="#" className="list-group-item list-group-item-action border-0">
        <div className="d-flex align-items-start">
          <img
            src="https://bootdey.com/img/Content/avatar/avatar5.png"
            className="rounded-circle mr-1"
            alt="Botty"
            width="40"
            height="40"
          />
          <div className="flex-grow-1 ml-3">
            Botty
            <div className="small">
              <span className="fas fa-circle chat-online"></span> Online
            </div>
          </div>
        </div>
      </a>

      <hr className="d-block d-lg-none mt-1 mb-0" />
    </div>
  );
}

export default ConnectedUsers;
