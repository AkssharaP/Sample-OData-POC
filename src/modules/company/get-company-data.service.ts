import { Injectable } from '@nestjs/common';
import {
  apiCompanycodeSrv,
  CompanyCode
} from '../../../services/API_COMPANYCODE_SRV';

@Injectable()
export class CompanyService {

async getAllCompany(): Promise<CompanyCode[]> {
  const { companyCodeApi } = apiCompanycodeSrv();
  return await companyCodeApi.requestBuilder().getAll().execute({
    url: 'http://localhost:3000/',
  });
}

}