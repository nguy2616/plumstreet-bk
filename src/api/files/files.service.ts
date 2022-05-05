import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { S3 } from 'aws-sdk';
import { Repository } from 'typeorm';
import { UpdateFileDto } from './dto/update-file.dto';
import { File } from './entities/file.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class FilesService {
  constructor(
    @InjectRepository(File)
    private filesRepository: Repository<File>,
  ) {}

  async uploadFile(dataBuffer: Buffer, filename: string) {
    const s3 = new S3({
      accessKeyId: 'AKIAU6D4EWUS2JHQEGUO',
      secretAccessKey: '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',
      region: 'us-east-1',
    });
    const uploadResult = await s3
      .upload({
        Bucket: 'plumstreet',
        Body: dataBuffer,
        Key: `${uuid()}-${filename}`,
      })
      .promise();

    const newFile = this.filesRepository.create({
      key: uploadResult.Key,
      url: uploadResult.Location,
    });

    await this.filesRepository.save(newFile);
    return newFile;
  }

  findAll() {
    return `This action returns all files`;
  }

  findOne(id: number) {
    return `This action returns a #${id} file`;
  }

  update(id: number, updateFileDto: UpdateFileDto) {
    return `This action updates a #${id} file`;
  }

  async remove(id: number) {
    const file = await this.filesRepository.findOne({ id: id });
    const s3 = new S3({
      accessKeyId: 'AKIAU6D4EWUS2JHQEGUO',
      secretAccessKey: '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',
      region: 'us-east-1',
    });
    await s3
      .deleteObject({
        Bucket: 'plumstreet',
        Key: file.key,
      })
      .promise();
    await this.filesRepository.delete(id);
  }
}
