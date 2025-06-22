import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyController } from './modules/company/company.controller';
import { CompanyService } from './modules/company/get-company-data.service';
import { ODataService } from './modules/odata/odata.service';
import { HttpModule } from '@nestjs/axios';
import { CompanyCodeModule } from './modules/company/companycode.module';

@Module({
  imports: [HttpModule,CompanyCodeModule],
  controllers: [AppController,
                CompanyController
  ],
  providers: [AppService, ODataService],
})
export class AppModule {}
