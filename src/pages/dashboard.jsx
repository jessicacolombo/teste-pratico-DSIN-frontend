import { useContext } from "react";
import { Header } from "../components/header";
import { ModalAddSchedule, ModalEditSchedule } from "../components/modal";
import { ScheduleCard } from "../components/scheduleCard";
import { SchedulesContext } from "../contexts/schedulesContext";
import { UserContext } from "../contexts/userContext";
import { BackgroundDash } from "../styles/dashboard";

export const Dashboard = () => {
  const { schedules } = useContext(UserContext);
  const { openCreateModal, openEditModal } = useContext(SchedulesContext);

  return (
    <BackgroundDash>
      <Header />
      <div className="schedules-container">
        {schedules.length === 0 ? (
          <div className="no-content">
            <p>Ainda nao existem agendamentos cadastrados.</p>
            <span>🔎</span>
          </div>
        ) : (
          <ul>
            {schedules.map((schedule) => {
              return (
                <ScheduleCard
                  key={schedule.id}
                  id={schedule.id}
                  service={schedule.service}
                  time={schedule.time}
                  date={schedule.date}
                />
              );
            })}
          </ul>
        )}
      </div>
      {openCreateModal && <ModalAddSchedule />}
      {openEditModal && <ModalEditSchedule />}
    </BackgroundDash>
  );
};
