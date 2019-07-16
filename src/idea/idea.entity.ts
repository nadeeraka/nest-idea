import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class IdeaEntity {
  @PrimaryGeneratedColumn('uuid') id: string;

  // @CreateDateColumn() created: Date;

  @Column('text') idea: string;

  @Column('text') data: string;
}
