import React from "react";

export default function ElectionCard() {
  return (
    <div>
      <div>
        <img src="" alt="image" />
      </div>
      <div className="grid grid-cols-2">
        <p>Election Name:</p>
        <p>Test Election</p>
        <p>Description:</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut nulla
          distinctio illum laudantium voluptates vel voluptatum sequi ab natus.
          Ab aliquid incidunt, alias maxime temporibus ducimus laboriosam itaque
          adipisci deleniti.
        </p>
      </div>
      <div className="flex item-center justify-between">
        <button className="p-4 m-4 bg-blue-300 rounded-sm">Vote</button>
        <button className="p-4 m-4 bg-blue-300 rounded-sm">
          Apply for the post
        </button>
      </div>
    </div>
  );
}
