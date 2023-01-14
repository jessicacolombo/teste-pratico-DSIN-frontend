import * as yup from "yup";

export const scheduleRegisterSchema = yup.object({
  date: yup.string().required("A data é obrigatória"),
  time: yup.string().required("A hora é obrigatória"),
  service: yup.string().required("O tipo do serviço agendado é obrigatório"),
});

export const scheduleUpdateSchema = yup.object({
  date: yup.string().required("A data é obrigatória"),
  time: yup.string().required("A hora é obrigatória"),
});
