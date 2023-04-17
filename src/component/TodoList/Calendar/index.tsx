import styled from "styled-components";
import TitleCompoent from "../../Common/Title";
import CalendarForm from "./CalendarForm";

const Calendar = (): JSX.Element => {
  return (
    <CalendarBody>
      <TitleCompoent title={"Monthly Calenadr"} />
      <CalendarWrap>
        <CalendarForm />
      </CalendarWrap>
    </CalendarBody>
  );
};

export default Calendar;

const CalendarBody = styled.div`
  width: 100%;
  height: 65%;
  padding: 20px;
`;
const CalendarWrap = styled.div`
  margin-top: 40px;
`;
