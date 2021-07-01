import React from "react";
import { PencilFill } from "react-bootstrap-icons";
import { TrashFill } from "react-bootstrap-icons";

function Content() {
  return (
    <div className="content p-4 rounded">
      <div className="d-flex align-items-center">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button class="btn btn-warning" type="button" id="button-addon2">
            Add Task
          </button>
        </div>
      </div>

      {/* TASK 1 */}
      <div class="eachContent rounded my-2 px-3 py-2 d-flex align-items-center justify-content-between">
        {/* 1 */}
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <div class="taskName">Fix Bug in code</div>
        </div>

        {/* 2 */}
        <div class="d-flex">
          <div class="p-2">
            <PencilFill size={22} />
          </div>
          <div class="p-2">
            <TrashFill size={22} />
          </div>
        </div>
      </div>

      {/* TASK 2 */}
      <div class="eachContent rounded my-2 px-3 py-2 d-flex align-items-center justify-content-between">
        {/* 1 */}
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <div class="taskName">Buy Grocery</div>
        </div>

        {/* 2 */}
        <div class="d-flex">
          <div class="p-2">
            <PencilFill size={22} />
          </div>
          <div class="p-2">
            <TrashFill size={22} />
          </div>
        </div>
      </div>

      {/* TASK 3 */}
      <div class="eachContent rounded my-2 px-3 py-2 d-flex align-items-center justify-content-between">
        {/* 1 */}
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <div class="taskName">Client Zoom Meeting</div>
        </div>

        {/* 2 */}
        <div class="d-flex">
          <div class="p-2">
            <PencilFill size={22} />
          </div>
          <div class="p-2">
            <TrashFill size={22} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
