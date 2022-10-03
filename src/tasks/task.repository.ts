import { EntityRepository, Repository } from 'typeorm';
import { Task } from './task.entity';

/**
 * https://tsed.io/tutorials/typeorm.html#typeorm-v0-3-x
 */
@EntityRepository()
export class TaskRepository extends Repository<Task> {}
