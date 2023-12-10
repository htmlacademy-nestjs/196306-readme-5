import { Injectable } from '@nestjs/common';
import { BlogUserRepository } from '../blog-user/blog-user.repository';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly blogUserRepository: BlogUserRepository
  ) {}
}
