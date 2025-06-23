import apiClient from './apiClient';
import { CreateFormData } from '../types/formTypes';

export const FormService = {
  async submitForm(data: CreateFormData): Promise<void> {
    try {
      await apiClient.post('/formulario/createData', data);
    } catch (error) {
      console.error('Error submitting form:', error);
      throw error;
    }
  },
};