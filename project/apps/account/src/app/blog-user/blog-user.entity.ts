import { compare, genSalt, hash } from 'bcrypt';
import { AuthUser } from '@project/shared/app/types';
import { Entity } from '@project/shared/core';
import { SALT_ROUNDS } from './blog-user.constant';

export class BlogUserEntity implements AuthUser, Entity<string> {
  public id?: string;
  public email: string;
  public name: string;
  public avatar?: string;
  public passwordHash: string;

  constructor(user: AuthUser) {
    this.populate(user)
  }

  public toPOJO() {
    return {
      id: this.id,
      email: this.email,
      name: this.name,
      avatar: this.avatar,
      passwordHash: this.passwordHash,
    };
  }

  public populate(data: AuthUser): void {
    this.email = data.email;
    this.name = data.name;
    this.avatar = data.avatar;
  }

  public async setPassword(password: string): Promise<BlogUserEntity> {
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);
    return this;
  }

  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }
}
