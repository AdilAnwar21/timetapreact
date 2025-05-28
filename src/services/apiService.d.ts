// Type definitions for apiService.js
import { AxiosInstance, AxiosResponse } from 'axios';

// Define any response types you might need
interface ApiResponse<T = any> {
  data: T;
  message?: string;
  status?: number;
}

// Define travel type interface if needed
interface TravelType {
  id: number;
  name: string;
  // Add other properties as needed
}

// Declare the main functions and variables exported
declare const apiClient: AxiosInstance;
declare function getAccessToken(): string | null;
declare function getHeaders(isFormData?: boolean, propagation?: number): Record<string, string>;
declare function handleAuthError(): void;

// Declare the API methods
declare function get<T = any>(url: string, propagation?: number): Promise<T>;
declare function post<T = any>(url: string, data: any, isFormData?: boolean): Promise<T>;
declare function put<T = any>(url: string, data: any): Promise<T>;
declare function deleteRequest<T = any>(url: string, propagation?: number): Promise<T>;

// Declare specific API endpoints
declare function getTravelType(): Promise<TravelType[]>;

// Export everything
export {
  apiClient,
  getAccessToken,
  getHeaders,
  handleAuthError,
  get,
  post,
  put,
  deleteRequest,
  getTravelType
};