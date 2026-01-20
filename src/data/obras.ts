export interface Work {
  id: string;
  name: string;
  category: string;
  location: string;
  images: string[];
  galleryPath?: string;
}

export const obras: Work[] = [
  {
    id: "arcelormittal-itatiaiuçu",
    name: "ArcelorMittal - Itatiaiuçu - MG",
    category: "Mineração",
    location: "Itatiaiuçu - MG",
    images: [
      "DJI_20240516124352_0002_V.JPG",
      "DJI_20240516124407_0003_V.JPG",
      "DJI_20240516124623_0007_V.JPG",
      "DJI_20240517072603_0003_V.JPG",
      "DJI_20240517072641_0006_V.JPG",
      "DJI_20240517073006_0008_V.JPG",
      "DJI_20240517073222_0009_V.JPG",
      "DJI_20240517073249_0011_V.JPG",
      "IMG-20240207-WA0127.jpg",
      "IMG-20240518-WA0000.jpg",
      "IMG-20240518-WA0008.jpg"
    ]
  },
  {
    id: "codelco-tucuma",
    name: "CODELCO - CBE - Consórcio Boa Esperança - Tucumã - PA",
    category: "Mineração",
    location: "Tucumã - PA",
    images: [
      "IMG-20230805-WA0096.jpg",
      "IMG-20230805-WA0097.jpg",
      "IMG-20230805-WA0098.jpg",
      "IMG-20230805-WA0099.jpg",
      "IMG-20230805-WA0104.jpg",
      "IMG-20230805-WA0107.jpg",
      "IMG-20230805-WA0110.jpg",
      "IMG-20231004-WA0116.jpg",
      "IMG-20231004-WA0117.jpg",
      "IMG-20231004-WA0118.jpg",
      "IMG-20231004-WA0119.jpg",
      "IMG-20231004-WA0120.jpg",
      "IMG-20231004-WA0121.jpg",
      "IMG-20231004-WA0122.jpg",
      "IMG-20231004-WA0123.jpg",
      "IMG-20231004-WA0124.jpg",
      "IMG-20231004-WA0125.jpg",
      "IMG-20231004-WA0126.jpg",
      "IMG-20231004-WA0127.jpg",
      "IMG-20231004-WA0128.jpg",
      "IMG-20231004-WA0129.jpg",
      "IMG-20231004-WA0130.jpg"
    ]
  },
  {
    id: "correios-contagem",
    name: "Correios - BII - Contagem - MG",
    category: "Logística",
    location: "Contagem - MG",
    images: [
      "20190308_080948.jpg",
      "DJI_0001.JPG",
      "DJI_0002.JPG",
      "DJI_0003(1).JPG",
      "DJI_0003.JPG",
      "DJI_0004.JPG",
      "DJI_0006.JPG",
      "DJI_0007.JPG",
      "DJI_0015.JPG",
      "DJI_0016.JPG",
      "DJI_0017(1).JPG",
      "DJI_0017.JPG",
      "DJI_0028(1).JPG",
      "DJI_0028.JPG",
      "DJI_0029(1).JPG",
      "DJI_0029.JPG",
      "DJI_0030.JPG",
      "DJI_0031(1).JPG",
      "DJI_0031.JPG",
      "IMG-20200124-WA0090.jpg",
      "IMG-20251002-WA0070.jpg",
      "IMG-20251002-WA0071.jpg",
      "IMG-20251002-WA0072.jpg",
      "IMG-20251002-WA0073.jpg",
      "IMG-20251002-WA0074.jpg",
      "IMG-20251002-WA0075.jpg",
      "IMG-20251002-WA0076.jpg",
      "IMG-20251002-WA0077.jpg",
      "IMG-20251002-WA0078.jpg"
    ]
  },
  {
    id: "ellenco-guarapi",
    name: "ELLENCO - BR-101 - GUARAPI - ES",
    category: "Infraestrutura Rodoviária",
    location: "Guarapi - ES",
    images: [
      "IMG-20250311-WA0172.jpg",
      "IMG-20250617-WA0244.jpg",
      "IMG-20250617-WA0245.jpg",
      "IMG-20250617-WA0246.jpg",
      "IMG-20250617-WA0247.jpg",
      "IMG-20250617-WA0248.jpg",
      "IMG-20250617-WA0249.jpg",
      "IMG-20250617-WA0250.jpg",
      "IMG-20250617-WA0251.jpg",
      "IMG-20251128-WA0195.jpg",
      "IMG-20251128-WA0196.jpg",
      "IMG-20251128-WA0197.jpg"
    ]
  },
  {
    id: "gerdau-ouro-branco",
    name: "Gerdau - Miguel Burnier - Ouro Branco - MG",
    category: "Mineração",
    location: "Ouro Branco - MG",
    images: [
      "IMG-20240604-WA0040.jpg",
      "IMG-20240605-WA0029.jpg",
      "IMG-20240605-WA0127.jpg",
      "IMG-20240605-WA0163.jpg",
      "IMG-20240605-WA0165.jpg",
      "IMG-20240704-WA0162.jpg"
    ]
  },
  {
    id: "mse-nova-nordisk",
    name: "MSE - NOVA NORDISK - MONTES CLAROS - MG",
    category: "Indústria",
    location: "Montes Claros - MG",
    images: [
      "IMG-20250701-WA0113.jpg",
      "IMG-20250701-WA0114.jpg",
      "IMG-20250701-WA0118.jpg"
    ]
  },
  {
    id: "oec-lajeado",
    name: "OEC - BR-376 - LAJEADO - RS",
    category: "Infraestrutura Rodoviária",
    location: "Lajeado - RS",
    images: [
      "IMG-20250801-WA0188.jpg",
      "IMG-20250801-WA0189.jpg",
      "IMG-20250801-WA0190.jpg",
      "IMG-20250801-WA0191.jpg",
      "IMG-20250801-WA0192.jpg",
      "IMG-20250801-WA0193.jpg"
    ]
  },
  {
    id: "salum-britagem",
    name: "SALUM - BRITAGEM - MG",
    category: "Mineração",
    location: "MG",
    images: [
      "IMG-20250708-WA0217.jpg",
      "IMG-20250708-WA0218.jpg",
      "IMG-20250708-WA0220.jpg",
      "IMG-20250708-WA0221.jpg",
      "IMG-20250708-WA0222.jpg",
      "IMG-20250708-WA0224.jpg",
      "IMG-20250708-WA0225.jpg",
      "IMG-20250708-WA0226.jpg",
      "IMG-20250708-WA0227.jpg",
      "IMG-20250708-WA0228.jpg",
      "IMG-20250708-WA0229.jpg",
      "IMG-20250708-WA0230.jpg",
      "IMG-20250708-WA0231.jpg",
      "IMG-20250708-WA0232.jpg",
      "IMG-20250708-WA0233.jpg",
      "IMG-20250708-WA0238.jpg"
    ]
  },
  {
    id: "samarco-mariana",
    name: "Samarco - Filtragem - Mariana - MG",
    category: "Mineração",
    location: "Mariana - MG",
    images: [
      "IMG-20200116-WA0037.jpg",
      "IMG-20200116-WA0038.jpg",
      "IMG-20200116-WA0039.jpg",
      "IMG-20200116-WA0040.jpg",
      "IMG-20200920-WA0111.jpg",
      "IMG-20200920-WA0112.jpg",
      "IMG-20200920-WA0113.jpg",
      "IMG-20200920-WA0114.jpg",
      "IMG-20200920-WA0116.jpg"
    ]
  },
  {
    id: "sandra-mineracao",
    name: "Sandra Mineração",
    category: "Mineração",
    location: "MG",
    images: [
      "20240528_093240.jpg",
      "20240528_093248.jpg",
      "20240528_094103.jpg",
      "20240528_094908.jpg",
      "20240528_094925.jpg",
      "20240528_095523.jpg",
      "20240528_095937.jpg",
      "20240528_100008.jpg",
      "20240528_100011.jpg",
      "20240528_100033.jpg",
      "20240528_100036.jpg",
      "20240528_100105.jpg",
      "20240528_100110.jpg",
      "20240528_100131.jpg",
      "20240528_100143.jpg",
      "20240528_100148.jpg",
      "20240528_100351.jpg",
      "20240528_100535.jpg",
      "20240528_100543.jpg"
    ]
  },
  {
    id: "vale-catas-altas",
    name: "VALE - Mina Fazendão - Catas Altas - MG",
    category: "Mineração",
    location: "Catas Altas - MG",
    images: [
      "IMG-20231214-WA0058.jpg",
      "IMG-20231214-WA0059.jpg",
      "IMG-20231214-WA0060.jpg",
      "IMG-20231214-WA0061.jpg",
      "IMG-20231214-WA0062.jpg",
      "IMG-20231214-WA0063.jpg",
      "IMG-20231214-WA0064.jpg",
      "IMG-20231214-WA0065.jpg",
      "IMG-20231214-WA0066.jpg"
    ]
  },
  {
    id: "votorantim-primavera",
    name: "Votorantim - Primavera - PA",
    category: "Mineração",
    location: "Primavera - PA",
    images: [
      "primavera1.jpg",
      "primavera2.jpg",
      "primavera3.jpg",
      "primavera4.jpg",
      "primavera5.jpg",
      "primavera6.jpg",
      "primavera7.jpg",
      "primavera8.jpg"
    ]
  },
  {
    id: "barreiras-new-jersey",
    name: "Barreiras de Proteção New Jersey",
    category: "Infraestrutura Rodoviária",
    location: "Diversas Localidades",
    images: [
      "IMG-20230725-WA0093.jpg",
      "IMG-20230725-WA0094.jpg",
      "IMG-20230725-WA0095.jpg",
      "IMG-20230725-WA0096.jpg",
      "IMG-20230725-WA0097.jpg",
      "IMG-20241017-WA0169.jpg",
      "IMG-20241017-WA0195.jpg",
      "IMG-20241017-WA0201.jpg",
      "IMG-20241021-WA0061.jpg",
      "IMG-20241021-WA0064.jpg"
    ],
    galleryPath: "new jersey"
  },
  {
    id: "muros-a-flexao",
    name: "Muros a Flexão",
    category: "Contenção",
    location: "Diversas Localidades",
    images: [
      "IMG-20250709-WA0192.jpg",
      "IMG-20250710-WA0242.jpg",
      "IMG-20250711-WA0003.jpg",
      "IMG-20250712-WA0011.jpg",
      "IMG-20250713-WA0039.jpg",
      "IMG-20250713-WA0083.jpg",
      "IMG-20250716-WA0119.jpg",
      "IMG-20250717-WA0104.jpg",
      "IMG-20250718-WA0034.jpg",
      "IMG-20250721-WA0013.jpg",
      "IMG-20250721-WA0022.jpg",
      "IMG-20250721-WA0037.jpg",
      "IMG-20250721-WA0088.jpg",
      "IMG-20250722-WA0083.jpg",
      "IMG-20250723-WA0020.jpg",
      "IMG-20250724-WA0081.jpg",
      "IMG-20250725-WA0106.jpg",
      "IMG-20250728-WA0013.jpg",
      "IMG-20250801-WA0010.jpg",
      "IMG-20250804-WA0007.jpg",
      "IMG-20250804-WA0122.jpg"
    ],
    galleryPath: "muros a flexao"
  }
];
