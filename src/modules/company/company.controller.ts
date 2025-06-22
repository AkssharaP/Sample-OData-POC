import { Controller, Get, HttpException, Query } from '@nestjs/common';
import { CompanyCode } from 'services/API_COMPANYCODE_SRV';
import { CompanyService } from 'src/modules/company/get-company-data.service';
import { ODataService } from 'src/modules/odata/odata.service';

@Controller('company')
export class CompanyController 
{
  constructor(private companyService: CompanyService,
    private readonly odataService: ODataService
  ) {}

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

  @Get('code/id')
  async getCompanyCodesByCountry(@Query('$filter') filter: string): Promise<CompanyCode[]> {
    return await this.companyService
      .getCompanyCodesByCountry(filter)
      .catch(error => {
        throw new HttpException(
          `Failed to get company data - ${error.message}`,
          500
        );
      });
  }
}
