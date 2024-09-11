import axios from 'axios';
import { Images } from '../types';

axios.defaults.baseURL =
  'https://api.unsplash.com/search/photos?client_id=dK4U751t746RMEKhHobdZsagkm8tZHVF6ixL84Bktvg';

interface FetchResponse {
  total: number;
  total_pages: number;
  results: Images[];
}

export async function fetchImages(
  searchRequest: string,
  currentPage: number
): Promise<FetchResponse> {
  const params = {
    page: currentPage,
    query: searchRequest,
    orientation: 'squarish',
    per_page: 20,
  };
  const { data } = await axios.get<FetchResponse>('', {
    params,
    headers: {
      'Accept-Version': 'v1',
    },
  });

  return data;
}
