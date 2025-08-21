export interface HttpAdapter {
  get<T>(url: string): Promise<T>;
  post(url: string, data: any, options?: any): Promise<any>;
  put(url: string, data: any, options?: any): Promise<any>;
  delete(url: string, options?: any): Promise<any>;
}
