import { Controller, Get, HttpException } from '@nestjs/common';
import { CompanyCode } from 'services/API_COMPANYCODE_SRV';
import { CompanyService } from 'src/modules/company/get-company-data.service';

@Controller('company')
export class CompanyController 
{
  constructor(private companyService: CompanyService) {}

  @Get()
  findAll(): string {
    return 'This action returns all company';
  }

  @Get('code')
  async getCompanyData(): Promise<CompanyCode[]> {
    return await this.companyService
      .getAllCompany()
      .catch(error => {
        throw new HttpException(
          `Failed to get company data - ${error.message}`,
          500
        );
      });
  }
}
