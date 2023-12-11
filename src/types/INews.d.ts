export interface INewsMarvelJSON {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: any[]; // Ou você pode criar uma interface específica para os resultados
  };
}

export interface INewsMarvel {
  id: number;
  thumbnail: {
    extension: string;
    path: string;
  };
  title: string;
  description: string;
  urls: {
    type: string;
    url: string;
  };
  previous: {
    name: string;
    resourceURI: string;
  };
}
