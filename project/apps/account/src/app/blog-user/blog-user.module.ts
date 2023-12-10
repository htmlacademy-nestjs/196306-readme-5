import { Module } from '@nestjs/common';
import { BlogUserRepository } from './blog-user.repository';

@Module({
  providers: [BlogUserRepository],
  exports: [BlogUserRepository],
})
export class BlogUserModule {}
