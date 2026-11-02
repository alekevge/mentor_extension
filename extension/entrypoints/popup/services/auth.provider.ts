import { Injectable } from '@angular/core';
import PocketBase from 'pocketbase';

@Injectable({ providedIn: 'root' })
export class PocketBaseService {
  private pb = new PocketBase('http://127.0.0.1:8090');


  async login(username: string, password: string) {
    return this.pb.collection('users').authWithPassword(username, password);
  }

  async getUsers() {
    return this.pb.collection('users').getFullList();
  }

  async createUser(username: string, password: string){
    const data = new FormData();
    data.set('username', username)
    data.set('password', password)
    data.set('passwordConfirm', password)
    data.set('name', 'ЯЯЯ')
    data.set('surname', 'ЯЯЯ')

    return await this.pb.collection('users').create(data);
  }
}