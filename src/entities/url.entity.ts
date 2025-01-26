import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'url', schema: 'public' })
export class URLEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  hash: string;

  @Column({ name: 'origin_url', nullable: false })
  originURL: string;

  @Column({ name: 'short_url' })
  shortURL: string;
}
