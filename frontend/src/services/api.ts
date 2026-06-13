import axios from 'axios';

export interface EnquiryPayload {
  name: string;
  email: string;
  phone: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
}

const api = axios.create({ baseURL: import.meta.env.VITE_API_URL });

export const submitEnquiry = (data: EnquiryPayload) =>
  api.post<ApiResponse>('/enquiry', data);
