import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './entities/comment.entity';
export declare class CommentsService {
    private commentsRepository;
    constructor(commentsRepository: Repository<Comment>);
    create(createCommentDto: CreateCommentDto, user: User): Promise<Comment>;
    findAll(): Promise<Comment[]>;
    findOne(id: number): Promise<Comment>;
    update(id: number, updateCommentDto: UpdateCommentDto): Promise<Comment>;
    remove(id: number): Promise<string>;
}
