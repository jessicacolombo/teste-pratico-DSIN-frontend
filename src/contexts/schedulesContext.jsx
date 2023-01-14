import { yupResolver } from "@hookform/resolvers/yup";
import { createContext, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { api } from "../services/api";
import {
  scheduleRegisterSchema,
  scheduleUpdateSchema,
} from "../validations/schedule";
import { UserContext } from "./userContext";

export const SchedulesContext = createContext();

export const SchedulesProvider = ({ children }) => {
  const { user, schedules, setSchedules } = useContext(UserContext);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [editedSchedule, setEditedSchedule] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(scheduleRegisterSchema) });

  const onSubmit = async ({ service, date, time }) => {
    const newSchedule = {
      service: service,
      date: date,
      time: time,
      userId: user.id,
    };

    try {
      api.defaults.headers.authorization = `Bearer ${localStorage.getItem(
        "@TOKEN"
      )}`;
      const { data } = await api.post("/schedules", newSchedule);
      toast.success("O horário foi reservado com sucesso! ✨", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setSchedules((schedules) => [...schedules, data]);
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        toast.error(
          "O horário já foi reservado por outro cliente. Escolha outro horario ou entre em contato com a Cabeleileila Leila",
          {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
      } else {
        toast.error(
          "Só podem ser reservados horários no futuro. Escolha outro horario ou entre em contato com a Cabeleileila Leila",
          {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
      }
    }
    reset();
  };

  const {
    register: editRegister,
    handleSubmit: editHandleSubmit,
    reset: editReset,
    formState: { errors: editErrors },
  } = useForm({ resolver: yupResolver(scheduleUpdateSchema) });

  const onSubmitEdit = async ({ date, time }) => {
    const newScheduleData = {
      date: date,
      time: time,
    };

    try {
      api.defaults.headers.authorization = `Bearer ${localStorage.getItem(
        "@TOKEN"
      )}`;
      const { data } = await api.patch(
        `/schedules/${editedSchedule}`,
        newScheduleData
      );
      toast.success("O horário foi reservado com sucesso! ✨", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      const withEditedSchedule = [...schedules].map((elem) =>
        elem.id !== editedSchedule.id ? elem : (elem = data)
      );
      setSchedules(withEditedSchedule);
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        toast.error(
          "O horário já foi reservado por outro cliente. Escolha outro horario ou entre em contato com a Cabeleileila Leila",
          {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
      } else {
        toast.error(
          "As alterações no agentamento só podem ser feitas até dois dias antes. Entre em contato com a Cabeleileila Leila",
          {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
      }
    }
    editReset();
  };

  return (
    <SchedulesContext.Provider
      value={{
        schedules,
        setSchedules,
        openCreateModal,
        setOpenCreateModal,
        openEditModal,
        setOpenEditModal,
        register,
        handleSubmit,
        reset,
        errors,
        onSubmit,
        editRegister,
        editErrors,
        editHandleSubmit,
        editReset,
        onSubmitEdit,
        editedSchedule,
        setEditedSchedule,
      }}
    >
      {children}
    </SchedulesContext.Provider>
  );
};
