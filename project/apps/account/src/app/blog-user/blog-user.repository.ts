import { Injectable } from '@nestjs/common';
import { BaseMemoryRepository } from '@project/shared/core';
import { BlogUserEntity } from './blog-user.entity';

@Injectable()
export class BlogUserRepository extends BaseMemoryRepository<BlogUserEntity> {}
