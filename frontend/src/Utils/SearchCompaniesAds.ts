import axios, { AxiosResponse } from "axios";
import { searchData } from "./CommonTypes";

export const SearchCompaniesAds = async (query: string) => {
  try {
    if (query.length > 0) {
      let res: AxiosResponse<searchData[]> = await axios.get(
        `http://localhost:8001/company/companyAds?q=${query}`
      );
      return res.data;
    }
  } catch (error) {
    console.error(error);
  }
};
