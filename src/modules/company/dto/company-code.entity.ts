export class CompanyCodeEntity
{
  companyCode: string;
  companyCodeName: string;
  country: string;
  cityName: string;
  currency: string;

  constructor(partial: Partial<CompanyCodeEntity>) {
    Object.assign(this, partial);
  }
}
