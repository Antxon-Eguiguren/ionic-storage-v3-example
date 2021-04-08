import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private storage: Storage | null = null;

  constructor(private stg: Storage) {
    this.initStorage();
  }

  // Configure and create the Storage instance
  async initStorage(): Promise<void> {
    this.storage = await this.stg.create();
  }

  // Set value in Storage
  async set(key: string, value: any): Promise<void> {
    await this.storage?.set(key, value);
  }

  // Get value from Storage
  async get(key: string): Promise<any> {
    return await this.storage?.get(key);
  }

  // Remove item from Storage
  async removeItem(key: string): Promise<void> {
    await this.storage?.remove(key);
  }

  // Clear all items from Storage
  async clearStorage(): Promise<void> {
    await this.storage?.clear();
  }

  // Get all keys from Storage
  async getKeys(): Promise<any> {
    return await this.storage?.keys();
  }

  // Get number of key/value pairs from Storage
  async getStorageLength(): Promise<number> {
    return await this.storage?.length();
  }
}
