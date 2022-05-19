import React from 'react'

function ConnectedUsers() {
  return (
    <div class="col-12 col-lg-5 col-xl-3 border-right">
        <div class="px-4 d-none d-md-block">
            <div class="d-flex align-items-center">
                <div class="flex-grow-1">
                    <input type="text" class="form-control my-3" placeholder="Search..."/>
                </div>
            </div>
        </div>

        <a href="#" class="list-group-item list-group-item-action border-0">
            
            <div class="d-flex align-items-start">
                <img src="https://bootdey.com/img/Content/avatar/avatar5.png" class="rounded-circle mr-1" alt="Botty" width="40" height="40" />
                <div class="flex-grow-1 ml-3">
                    Botty
                    <div class="small"><span class="fas fa-circle chat-online"></span> Online</div>
                </div>
            </div>
        </a>

        <hr class="d-block d-lg-none mt-1 mb-0" />
    </div>
  )
}

export default ConnectedUsers