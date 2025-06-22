import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CompanyService } from './get-company-data.service';

@Module({
  imports: [HttpModule],
  providers: [CompanyService],
  exports: [CompanyService],
})
export class CompanyCodeModule {}
