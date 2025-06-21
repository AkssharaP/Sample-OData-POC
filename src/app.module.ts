import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyController } from './controllers/company/company.controller';
import { CompanyService } from './modules/company/get-company-data.service';

@Module({
  imports: [],
  controllers: [AppController,
                CompanyController
  ],
  providers: [AppService, CompanyService],
})
export class AppModule {}
