import axios, { AxiosInstance } from 'axios';
import { HttpAdapter } from '../interfaces/http-adapter.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AxiosAdapter implements HttpAdapter {
  private axios: AxiosInstance = axios;

  async get<T>(url: string): Promise<T> {
    try {
      const { data } = await this.axios.get<T>(url);
      return data;
    } catch (error) {
      throw new Error('this is an error - check logs');
    }
  }
  post(url: string, data: any, options?: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
  put(url: string, data: any, options?: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
  delete(url: string, options?: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
