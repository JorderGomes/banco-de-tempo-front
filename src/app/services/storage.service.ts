import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() { }

    // Salvar objeto no localStorage
    setItem(key: string, value: any): void {
      const jsonString = JSON.stringify(value);
      localStorage.setItem(key, jsonString);
    }
  
    // Recuperar objeto do localStorage
    getItem<T>(key: string): T | null {
      const jsonString = localStorage.getItem(key);
      return jsonString ? JSON.parse(jsonString) : null;
    }
  
    // Remover item do localStorage
    removeItem(key: string): void {
      localStorage.removeItem(key);
    }

}
