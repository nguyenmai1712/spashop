import { apiBase } from './instance-mock';

const getProducts = () => {
    return apiBase({
        url: '/products',
        method: 'get'
    })
}

const addProduct = (data) => {
    return apiBase({
        url: '/products',
        method: 'post',
        data,
    })
}

const deleteProductById = (id) => {
    return apiBase({
        url: `/products/${id}`,
        method: 'delete',
    })
}

const getproductsById = (id) => {
    return apiBase({
        url: `/products/?id=${id}`,
        method: 'get',
    })
}

const updateProduct = (product) => {
    return apiBase({
        url: `/products/${product.id}`,
        method: 'put',
        data: product,
    })
}

export const productService = {
    getProducts,
    addProduct,
    deleteProductById,
    getproductsById,
    updateProduct,
}