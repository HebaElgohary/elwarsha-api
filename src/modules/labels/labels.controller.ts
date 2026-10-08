import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { LabelsService } from './labels.service.js';
import { CreateLabelDto } from './dto/create-label.dto.js';
import { UpdateLabelDto } from './dto/update-label.dto.js';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard, RequireCapability } from '../identity/auth.guard.js';

@ApiTags("labels")

@Controller("api/v1")
@UseGuards(AuthGuard)

export class LabelsController {
  constructor(private readonly labelsService: LabelsService) {}


  @Get('labels')
  @RequireCapability("assignments.read")

 listLabels() {
    return this.labelsService.listLabels();

}
}