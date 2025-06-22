import { Injectable } from '@nestjs/common';
import {
  apiCompanycodeSrv,
  CompanyCode
} from '../../../services/API_COMPANYCODE_SRV';
import axios from 'axios';
import { CompanyCodeEntity } from './dto/company-code.entity';


@Injectable()
export class CompanyService {
  private readonly baseUrl = 'https://sandbox.api.sap.com/s4hanacloud/sap/opu/odata/sap/API_COMPANYCODE_SRV';

async getAllCompany(): Promise<CompanyCode[]> {
 const response = await axios.get(`${this.baseUrl}/A_CompanyCode`, {
      headers: {
        'Accept': 'application/json',
        'APIKey': '2p14RPbIzs4nLME4Kl2Xsz9chjIUR45l', // Replace with your SAP API sandbox key
      },
      params: {
        '$top': 10,
        '$select': 'CompanyCode,Company,CompanyCodeName,Country,CityName,Currency',
      },
    });

    
     // Map OData response to entity class
    return response.data.d.results.map((item) => new CompanyCodeEntity({
      companyCode: item.CompanyCode,
      companyCodeName: item.CompanyCodeName,
      country: item.Country,
      cityName: item.CityName,
      currency: item.Currency
    }));
    
  }

  async getCompanyCodesByCountry(filter: string): Promise<CompanyCode[]> {
    const response = await axios.get(`${this.baseUrl}/A_CompanyCode
      ?$filter=${encodeURIComponent(filter)}`, {
      headers: {
        'Accept': 'application/json',
        'APIKey': '2p14RPbIzs4nLME4Kl2Xsz9chjIUR45l', // Replace with your SAP API sandbox key
      },
      params: {
        // '$filter': `CompanyCode eq '${companyCode}'`,
        '$top': 10,
        '$select': 'CompanyCode,Company,CompanyCodeName,Country,CityName,Currency',
      },
    });
    // return response.data.d.results as CompanyCode[];

    // Map OData response to entity class
    return response.data.d.results.map((item) => new CompanyCodeEntity({
      companyCode: item.CompanyCode,
      companyCodeName: item.CompanyCodeName,
      country: item.Country,
      cityName: item.CityName,
      currency: item.Currency
    }));
  }
}



