import { useContext } from "react";
import { SchedulesContext } from "../../contexts/schedulesContext";
import { ContainerModal, ModalContent } from "../../styles/modal";

export const ModalAddSchedule = () => {
  const { setOpenCreateModal, register, handleSubmit, onSubmit } =
    useContext(SchedulesContext);

  return (
    <ContainerModal onClick={() => setOpenCreateModal(false)}>
      <ModalContent onClick={(event) => event.stopPropagation()}>
        <div className="modal__header">
          <h2>Agendamento: </h2>
          <button onClick={() => setOpenCreateModal(false)}>X</button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Tipo do Serviço:
            <input
              type="text"
              placeholder="Insira o tipo de serviço que deseja agendar"
              id="service"
              {...register("service")}
            />
          </label>
          <label>
            Data:
            <input type="date" id="date" {...register("date")} />
          </label>
          <label>
            Hora:
            <input
              type="time"
              min="09:00"
              max="18:00"
              step="1800"
              id="time"
              {...register("time")}
            />
          </label>
          <button type="submit">Agendar</button>
        </form>
      </ModalContent>
    </ContainerModal>
  );
};

export const ModalEditSchedule = () => {
  const {
    setOpenEditModal,
    editRegister,
    editHandleSubmit,
    onSubmitEdit,
    setEditedSchedule,
  } = useContext(SchedulesContext);

  let today = new Date().toISOString().split("T")[0];

  return (
    <ContainerModal
      onClick={() => {
        setOpenEditModal(false);
        setEditedSchedule(null);
      }}
    >
      <ModalContent onClick={(event) => event.stopPropagation()}>
        <div className="modal__header">
          <h2>Reagendamento: </h2>
          <button
            onClick={() => {
              setOpenEditModal(false);
              setEditedSchedule(null);
            }}
          >
            X
          </button>
        </div>
        <form onSubmit={editHandleSubmit(onSubmitEdit)}>
          <label>
            Nova data:
            <input
              type="date"
              id="date"
              min={today}
              {...editRegister("date")}
            />
          </label>
          <label>
            Nova hora:
            <input
              type="time"
              min="09:00"
              max="18:00"
              step="1800"
              id="time"
              {...editRegister("time")}
            />
          </label>
          <button type="submit">Agendar</button>
        </form>
      </ModalContent>
    </ContainerModal>
  );
};
