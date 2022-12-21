import React from "react";
import "./hours.css";
import Buttons from "./buttons";

const Hours = () => {
  return (
    <div>
      <h1 className="title"> Hours of Operation</h1>
      <table className="tg">
        <thead>
          <tr>
            <th className="tg-0lax">Day</th>
            <th className="tg-0lax">Open</th>
            <th className="tg-0lax">Close</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="tg-0lax">Monday</td>
            <td className="tg-0lax">8:00 AM</td>
            <td className="tg-0lax">6:00 PM</td>
            <Buttons></Buttons>
          </tr>

          <tr>
            <td className="tg-0lax">Tuesday</td>
            <td className="tg-0lax">8:00 AM</td>
            <td className="tg-0lax">6:00 PM</td>
            <Buttons></Buttons>
          </tr>
          <tr>
            <td className="tg-0lax">Wednesday</td>
            <td className="tg-0lax">12:00 PM</td>
            <td className="tg-0lax">8:00 PM</td>
            <Buttons></Buttons>
          </tr>
          <tr>
            <td className="tg-0lax">Thursday</td>
            <td className="tg-0lax">10:00 AM</td>
            <td className="tg-0lax">8:00 PM</td>
            <Buttons></Buttons>
          </tr>
          <tr>
            <td className="tg-0lax">Friday</td>
            <td className="tg-0lax">9:00AM</td>
            <td className="tg-0lax">10:00 PM</td>
            <Buttons></Buttons>
          </tr>
          <tr>
            <td className="tg-0lax">Saturday</td>
            <td className="tg-0lax">10:00 AM</td>
            <td className="tg-0lax">5:00 PM</td>
            <Buttons></Buttons>
          </tr>
          <tr>
            <td className="tg-0lax">Sunday</td>
            <td className="tg-0lax">Closed</td>
            <td className="tg-0lax">Closed</td>
            <Buttons></Buttons>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Hours;
