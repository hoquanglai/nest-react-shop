import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {

    return `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`;
  }
}
