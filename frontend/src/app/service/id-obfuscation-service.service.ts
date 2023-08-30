import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5';

@Injectable({
  providedIn: 'root',
})
export class IdObfuscationService {
  private secretKey = 'your-secret-key'; // Replace with your secret key

  constructor() {}

  obfuscateId(id: string): string {
    const hashedId = Md5.hashStr(id + this.secretKey).toString();
    return hashedId;
  }

  deobfuscateId(obfuscatedId: string): string {
    throw new Error('Deobfuscation is not possible.');
    // Since hashing is one-way, deobfuscation is not possible.
    // You can throw an error or return null to indicate this.
  }
}
