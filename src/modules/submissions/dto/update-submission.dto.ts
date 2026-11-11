import { PartialType } from '@nestjs/swagger';
import { CreateSubmissionDto } from './create-submission.dto.js';

export class UpdateSubmissionDto extends PartialType(CreateSubmissionDto) {}
