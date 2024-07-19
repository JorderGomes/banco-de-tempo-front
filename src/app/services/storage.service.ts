import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() { }

    // Salvar objeto no localStorage
    setItem(key: string, value: any): void {
      if (typeof localStorage !== 'undefined') {
        const jsonString = JSON.stringify(value);
        localStorage.setItem(key, jsonString);
      } else {
        console.error('localStorage is not available.');
      }
    }
  
    // Recuperar objeto do localStorage
    getItem<T>(key: string): T | null {
      if (typeof localStorage !== 'undefined') {
        const jsonString = localStorage.getItem(key);
        return jsonString ? JSON.parse(jsonString) : null;
      } else {
        // console.error('localStorage is not available.');
        return null;
      }
    }
  
    // Remover item do localStorage
    removeItem(key: string): void {
      localStorage.removeItem(key);
    }

}
