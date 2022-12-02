import { apiBase } from './instance';

const getAppointments = () => {
    return apiBase({
        url: '/appointments',
        method: 'get'
    })
}

const addAppointment = (data) => {
    return apiBase({
        url: '/appointments',
        method: 'post',
        data,
    })
}

const deleteAppointmentById = (id) => {
    return apiBase({
        url: `/appointments/${id}`,
        method: 'delete',
    })
}

const getAppointmentById = (id) => {
    return apiBase({
        url: `/appointments/?id=${id}`,
        method: 'get',
    })
}

const updateAppointment = (data) => {
    return apiBase({
        url: `/appointments/${data.id}`,
        method: 'put',
        data,
    })
}

export const appointmentService = {
    getAppointments,
    addAppointment,
    deleteAppointmentById,
    getAppointmentById,
    updateAppointment,
}