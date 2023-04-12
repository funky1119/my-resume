import styled from "styled-components";
import TitleCompoent from "../Common/Title";

const Calendar = (): JSX.Element => {
  return (
    <CalendarBdoy>
      <TitleCompoent title={"Monthly Calenadr"} />
    </CalendarBdoy>
  );
};

export default Calendar;

const CalendarBdoy = styled.div`
  width: 100%;
  height: 70%;
  padding: 20px;
`;
