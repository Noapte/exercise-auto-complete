import {URL} from './urls'

interface Entry {
  API: string;
  Auth: string;
  Category: string;
  Cors: string;
  Description: string;
  HTTPS: Boolean;
  Link: string;
}

export const fetchData = async () => {
    try {
      const data = await fetch(URL).then(
        (response) => response.json()
      );
      return data?.entries?.map((elem: Entry) => elem?.Description);
    } catch (err) {
      console.log(err);
    }
  };