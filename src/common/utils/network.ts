import axios, { AxiosError } from 'axios';
import { ICategory } from '../types/ICategory';
import { IComment } from '../types/IComment';
import { IPublication } from '../types/IPublication';
import { IUser } from '../types/IUser';

export const network = {
    delete: {
        category: async (categoryId: number) => {
            try {
                const response = await axios.delete(`/api/deleteCategory?id=${categoryId}`);
                return response.data;
            } catch (error: any) {
                // Handle error, e.g., by returning an error object or throwing an exception
                throw new Error(`Failed to delete category: ${error.message}`);
            }
        }, publication: async (publicationId: number) => {
            try {
                const response = await axios.delete(`/api/deletePublication?id=${publicationId}`);
                return response.data;
            } catch (error: any) {
                throw new Error(`Failed to delete publication: ${error.message}`);
            }
        },
    },
    get: {
        categories: async () => {
            try {
                const response = await axios.get('/api/getCategories'); 
                return response.data;
            } catch (error: any) {
                throw new Error(`Failed to fetch categories: ${error.message}`);
            }
        },
        publicationById: async (publicationId: number) => {
            try {
                const response = await axios.get(`/api/getPublicationById?id=${publicationId}`); 
                return response.data;
            } catch (error: any) {
                throw new Error(`Failed to fetch publication: ${error.message}`);
            }
        },
        publications: async () => {
            try {
                const response = await axios.get('/api/getPublications'); 
                return response.data;
            } catch (error: any) {
                throw new Error(`Failed to fetch publications: ${error.message}`);
            }
        },
        publicationsByCategory: async (categoryId: number, value: number) => {
            try {
                const response = await axios.get(`/api/getPublicationsByCategory?categoryId=${categoryId}&value=${value}`);
                return response.data;
            } catch (error: any) {
                throw new Error(`Failed to fetch publications by category: ${error.message}`);
            }
        },
        publicationsByCategoryByViews: async (categoryId: number, value: number) => {
            try {
                const response = await axios.get(`/api/getPublicationsByCategoryByViews?categoryId=${categoryId}&value=${value}`);
                return response.data;
            } catch (error: any) {
                throw new Error(`Failed to fetch publications by category and views: ${error.message}`);
            }
        },
        publicationsByViews: async (value: number) => {
            try {
                const response = await axios.get(`/api/getPublicationsByViews?value=${value}`);
                return response.data;
            } catch (error: any) {
                throw new Error(`Failed to fetch publications by views: ${error.message}`);
            }
        },
        users: async () => {
            try {
                const response = await axios.get('/api/getUsers'); 
                return response.data;
            } catch (error: any) {
                throw new Error(`Failed to fetch users: ${error.message}`);
            }
        },
        user: async () => {
            try {
                const response = await axios.get(`/api/getUserById=1`);
                return response.data;
            } catch (error: any) {
                throw new Error(`Failed to fetch user: ${error}`)
            }
        }
    },
    post: {
        category: async (categoryData: ICategory) => {
            try {
                const response = await axios.post('/api/addCategory', categoryData); 
                return response.data;
            } catch (error: any) {
                throw new Error(`Failed to add category: ${error.message}`);
            }
        },
        commentToPublication: async ({publicationId, commentData}: IComment) => {
            try {
                const response = await axios.post(`/api/addCommentToPublication?publicationId=${publicationId}`, commentData); 
                return response.data;
            } catch (error: any) {
                throw new Error(`Failed to add comment to publication: ${error.message}`);
            }
        },
        publication: async (publicationData: IPublication) => {
            try {
                const response = await axios.post('/api/addPublication', publicationData);
                return response.data;
            } catch (error: any) {
                throw new Error(`Failed to add publication: ${error.message}`);
            }
        },
        user: async (userData: IUser) => {
            try {
                const response = await axios.post('/api/addUser', userData);
                return response.data;
            } catch (error: any) {
                throw new Error(`Failed to add user: ${error.message}`);
            }
        },
    },
    put: {
        category: async (categoryId: number, updatedCategoryData: ICategory) => {
            try {
                const response = await axios.put(`/api/updateCategory?id=${categoryId}`, updatedCategoryData);
                return response.data;
            } catch (error: any) {
                throw new Error(`Failed to update category: ${error.message}`);
            }
        },
        publication: async (publicationId: number, updatedPublicationData: IPublication) => {
            try {
                const response = await axios.put(`/api/updatePublication?id=${publicationId}`, updatedPublicationData); // Замените '/api/updatePublication' на ваш фактический маршрут для обновления публикации
                return response.data;
            } catch (error: any) {
                throw new Error(`Failed to update publication: ${error.message}`);
            }
        },
    }
}