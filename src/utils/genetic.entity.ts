import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class Genetic {
  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP', type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ default: () => 'CURRENT_TIMESTAMP', type: 'timestamp' })
  updated_at: Date;
}
