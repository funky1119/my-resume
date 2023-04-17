import React, { useState } from "react";

const CalendarForm = (): JSX.Element => {
  const days = ["Sun", "Mon", "Tue", "Web", "Thu", "Fri", "Sat"];
  const [calendar, setCalendar] = useState([]);

  return (
    <table
      style={{
        width: "100%",
        height: "100%",
        textAlign: "center",
        border: "1px solid #7b2ed4",
        color: "#7b2ed4",
        fontWeight: "700",
        fontSize: 14,
      }}
    >
      <tr style={{ background: "#e9ddf9", border: "1px solid #7b2ed4" }}>
        {days.map((item) => (
          <td style={{ padding: 15, border: "1px solid #7b2ed4" }}>{item}</td>
        ))}
      </tr>
    </table>
  );
};

export default CalendarForm;
