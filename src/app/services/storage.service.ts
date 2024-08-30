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
        return null;
      }
    }
    
    

    // getItem<T>(key: string): T | null {
    //   // Timeout em milissegundos para evitar um loop infinito
    //   const maxWaitTime = 5000;
    //   const intervalTime = 50;
    //   const startTime = Date.now();
    
    //   // Loop até que localStorage esteja disponível ou o tempo máximo tenha sido atingido
    //   while (typeof localStorage === 'undefined') {
    //     if (Date.now() - startTime > maxWaitTime) {
    //       console.log('localStorage is not available.');
    //       return null;
    //     }
    //     // Pausar o loop por um curto período para evitar um loop de alta CPU
    //     const endTime = Date.now() + intervalTime;
    //     while (Date.now() < endTime) {}
    //   }
    
    //   // Após confirmar que localStorage está disponível, obtenha o item
    //   const jsonString = localStorage.getItem(key);
    //   return jsonString ? JSON.parse(jsonString) : null;
    // }
    
  
    // Remover item do localStorage
    removeItem(key: string): void {
      localStorage.removeItem(key);
    }

}
