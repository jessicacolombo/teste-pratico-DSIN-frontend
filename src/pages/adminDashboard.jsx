import { useContext } from "react";
import { Header } from "../components/header";
import { ModalEditSchedule } from "../components/modal";
import { ScheduleCardAdminView } from "../components/scheduleCard";
import { UserContext } from "../contexts/userContext";
import { BackgroundDash } from "../styles/dashboard";

export const AdminDashboard = () => {
  const { schedules } = useContext(UserContext);

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
                <ScheduleCardAdminView
                  key={schedule.id}
                  service={schedule.service}
                  time={schedule.time}
                  date={schedule.date}
                  user={schedule.user}
                />
              );
            })}
          </ul>
        )}
      </div>
    </BackgroundDash>
  );
};
