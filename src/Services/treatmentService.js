import { apiBase } from './instance';

const getTreatments = () => {
    return apiBase({
        url: '/treatment',
        method: 'get'
    })
}

const addTreatment = (data) => {
    return apiBase({
        url: '/treatment',
        method: 'post',
        data,
    })
}

const deleteTreatmentById = (id) => {
    return apiBase({
        url: `/treatment/${id}`,
        method: 'delete',
    })
}

const getTreatmentById = (id) => {
    return apiBase({
        url: `/treatment/?id=${id}`,
        method: 'get',
    })
}

const updateTreatment = (treatment) => {
    return apiBase({
        url: `/treatment/${treatment.id}`,
        method: 'put',
        data: treatment,
    })
}

export const treatementService = {
    getTreatments,
    addTreatment,
    deleteTreatmentById,
    getTreatmentById,
    updateTreatment,
}