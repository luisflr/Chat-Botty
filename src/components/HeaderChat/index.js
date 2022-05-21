import React from "react";

function HeaderChat() {
  return (
    <div className="d-flex align-items-center py-1">
      <div className="position-relative">
        <img
          src="https://bootdey.com/img/Content/avatar/avatar5.png"
          className="rounded-circle mr-1"
          alt="Sharon Lessman"
          width="40"
          height="40"
        />
      </div>
      <div className="flex-grow-1 pl-3">
        <strong>Botty</strong>
        <div className="text-muted small">
          <em>Online</em>
        </div>
      </div>
    </div>
  );
}

export default HeaderChat;
