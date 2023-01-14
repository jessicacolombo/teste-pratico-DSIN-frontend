import { useContext } from "react";
import { SchedulesContext } from "../../contexts/schedulesContext";
import { StyledLiAdmin } from "../../styles/schedule-card";

export const ScheduleCardAdminView = ({ id, service, time, date, user }) => {
  return (
    <StyledLiAdmin>
      <p>Serviço: {service}</p>
      <p>Agendado para: {`${date}, ${time}`}</p>
      <p>Cliente: {user.name}</p>
      <p>Celular: {user.cellphone}</p>
    </StyledLiAdmin>
  );
};

export const ScheduleCard = ({ id, service, date, time }) => {
  const { setOpenEditModal, setEditedSchedule } = useContext(SchedulesContext);

  return (
    <StyledLiAdmin
      onClick={() => {
        setOpenEditModal(true);
        setEditedSchedule(id);
      }}
    >
      <p>Serviço: {service}</p>
      <p>Agendado para: {`${date}, ${time}`}</p>
    </StyledLiAdmin>
  );
};
