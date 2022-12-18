import { apiBase } from './instance-mock';

const getOrders = () => {
    return apiBase({
        url: '/order',
        method: 'get'
    })
}

const addOrder = (data) => {
    return apiBase({
        url: '/order',
        method: 'post',
        data,
    })
}

const deleteOrderById = (id) => {
    return apiBase({
        url: `/order/${id}`,
        method: 'delete',
    })
}

const getOrderById = (id) => {
    return apiBase({
        url: `/order/?id=${id}`,
        method: 'get',
    })
}

const updateOrders = (product) => {
    return apiBase({
        url: `/order/${product.id}`,
        method: 'put',
        data: product,
    })
}

export const orderService = {
    getOrders,
    addOrder,
    deleteOrderById,
    getOrderById,
    updateOrders,
}