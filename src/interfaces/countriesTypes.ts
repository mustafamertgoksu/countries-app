export interface CountryProps {
  name: Name;
  tld?: string[];
  cca2: string;
  ccn3?: string;
  cca3: string;
  cioc?: string;
  independent?: boolean;
  status: Status;
  unMember: boolean;
  currencies?: Currencies;
  idd: Idd;
  capital?: string[];
  altSpellings: string[];
  region: Region;
  subregion?: string;
  languages?: { [key: string]: string };
  translations: { [key: string]: Translation };
  latlng: number[];
  landlocked: boolean;
  borders?: string[];
  area: number;
  demonyms?: Demonyms;
  flag?: string;
  maps: Maps;
  population: number;
  gini?: { [key: string]: number };
  fifa?: string;
  car: Car;
  timezones: string[];
  continents: Continent[];
  flags: CoatOfArms;
  coatOfArms: CoatOfArms;
  startOfWeek: StartOfWeek;
  capitalInfo: CapitalInfo;
  postalCode?: PostalCode;
}

export interface CapitalInfo {
  latlng?: number[];
}

export interface Car {
  signs?: string[];
  side: Side;
}

export enum Side {
  Left = 'left',
  Right = 'right',
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export enum Continent {
  Africa = 'Africa',
  Antarctica = 'Antarctica',
  Asia = 'Asia',
  Europe = 'Europe',
  NorthAmerica = 'North America',
  Oceania = 'Oceania',
  SouthAmerica = 'South America',
}

export interface Currencies {
  UYU?: TartuGecko;
  PYG?: TartuGecko;
  GMD?: TartuGecko;
  DJF?: TartuGecko;
  EUR?: TartuGecko;
  USD?: TartuGecko;
  GEL?: TartuGecko;
  BZD?: TartuGecko;
  MUR?: TartuGecko;
  LBP?: TartuGecko;
  SAR?: TartuGecko;
  BRL?: TartuGecko;
  UGX?: TartuGecko;
  QAR?: TartuGecko;
  MNT?: TartuGecko;
  CLP?: TartuGecko;
  LRD?: TartuGecko;
  AUD?: TartuGecko;
  XCD?: TartuGecko;
  TWD?: TartuGecko;
  ARS?: TartuGecko;
  XOF?: TartuGecko;
  DKK?: TartuGecko;
  FOK?: TartuGecko;
  MAD?: TartuGecko;
  MRU?: TartuGecko;
  UAH?: TartuGecko;
  CNY?: TartuGecko;
  LSL?: TartuGecko;
  ZAR?: TartuGecko;
  CDF?: TartuGecko;
  RUB?: TartuGecko;
  BDT?: TartuGecko;
  ANG?: TartuGecko;
  GTQ?: TartuGecko;
  ILS?: TartuGecko;
  GYD?: TartuGecko;
  KYD?: TartuGecko;
  HRK?: TartuGecko;
  ISK?: TartuGecko;
  NAD?: TartuGecko;
  GIP?: TartuGecko;
  OMR?: TartuGecko;
  KWD?: TartuGecko;
  GBP?: TartuGecko;
  HNL?: TartuGecko;
  SHP?: TartuGecko;
  KHR?: TartuGecko;
  MKD?: TartuGecko;
  IRR?: TartuGecko;
  PAB?: TartuGecko;
  CKD?: TartuGecko;
  NZD?: TartuGecko;
  BIF?: TartuGecko;
  TTD?: TartuGecko;
  KMF?: TartuGecko;
  NGN?: TartuGecko;
  PLN?: TartuGecko;
  XPF?: TartuGecko;
  ETB?: TartuGecko;
  AZN?: TartuGecko;
  NPR?: TartuGecko;
  BBD?: TartuGecko;
  JEP?: TartuGecko;
  INR?: TartuGecko;
  KGS?: TartuGecko;
  SSP?: TartuGecko;
  IQD?: TartuGecko;
  CUC?: TartuGecko;
  CUP?: TartuGecko;
  BTN?: TartuGecko;
  BSD?: TartuGecko;
  NOK?: TartuGecko;
  KES?: TartuGecko;
  SEK?: TartuGecko;
  XAF?: TartuGecko;
  MOP?: TartuGecko;
  GGP?: TartuGecko;
  RWF?: TartuGecko;
  SYP?: TartuGecko;
  CAD?: TartuGecko;
  DZD?: TartuGecko;
  IMP?: TartuGecko;
  BWP?: TartuGecko;
  KZT?: TartuGecko;
  VES?: TartuGecko;
  SDG?: BAM;
  SBD?: TartuGecko;
  JMD?: TartuGecko;
  AFN?: TartuGecko;
  RSD?: TartuGecko;
  TJS?: TartuGecko;
  TOP?: TartuGecko;
  KID?: TartuGecko;
  ERN?: TartuGecko;
  HTG?: TartuGecko;
  VUV?: TartuGecko;
  BAM?: BAM;
  WST?: TartuGecko;
  BOB?: TartuGecko;
  MGA?: TartuGecko;
  STN?: TartuGecko;
  BHD?: TartuGecko;
  PEN?: TartuGecko;
  SRD?: TartuGecko;
  THB?: TartuGecko;
  TVD?: TartuGecko;
  KPW?: TartuGecko;
  YER?: TartuGecko;
  AMD?: TartuGecko;
  PKR?: TartuGecko;
  MWK?: TartuGecko;
  PHP?: TartuGecko;
  CZK?: TartuGecko;
  MMK?: TartuGecko;
  RON?: TartuGecko;
  DOP?: TartuGecko;
  GHS?: TartuGecko;
  TRY?: TartuGecko;
  EGP?: TartuGecko;
  MZN?: TartuGecko;
  HUF?: TartuGecko;
  AED?: TartuGecko;
  ALL?: TartuGecko;
  FJD?: TartuGecko;
  MDL?: TartuGecko;
  BYN?: TartuGecko;
  LKR?: TartuGecko;
  BMD?: TartuGecko;
  NIO?: TartuGecko;
  SOS?: TartuGecko;
  JOD?: TartuGecko;
  TMT?: TartuGecko;
  CRC?: TartuGecko;
  VND?: TartuGecko;
  SZL?: TartuGecko;
  ZMW?: TartuGecko;
  CHF?: TartuGecko;
  UZS?: TartuGecko;
  AWG?: TartuGecko;
  JPY?: TartuGecko;
  CVE?: TartuGecko;
  HKD?: TartuGecko;
  BGN?: TartuGecko;
  LAK?: TartuGecko;
  KRW?: TartuGecko;
  TND?: TartuGecko;
  ZWL?: TartuGecko;
  MVR?: TartuGecko;
  SGD?: TartuGecko;
  AOA?: TartuGecko;
  MYR?: TartuGecko;
  GNF?: TartuGecko;
  LYD?: TartuGecko;
  IDR?: TartuGecko;
  SCR?: TartuGecko;
  BND?: TartuGecko;
  MXN?: TartuGecko;
  SLL?: TartuGecko;
  COP?: TartuGecko;
  PGK?: TartuGecko;
  FKP?: TartuGecko;
  TZS?: TartuGecko;
}

export interface TartuGecko {
  name: string;
  symbol: string;
}

export interface BAM {
  name: string;
}

export interface Demonyms {
  eng: Eng;
  fra?: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Idd {
  root?: string;
  suffixes?: string[];
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

export interface Name {
  common: string;
  official: string;
  nativeName?: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common: string;
}

export interface PostalCode {
  format: string;
  regex?: string;
}

export enum Region {
  Africa = 'Africa',
  Americas = 'Americas',
  Antarctic = 'Antarctic',
  Asia = 'Asia',
  Europe = 'Europe',
  Oceania = 'Oceania',
}

export enum StartOfWeek {
  Monday = 'monday',
  Sunday = 'sunday',
  Turday = 'turday',
}

export enum Status {
  OfficiallyAssigned = 'officially-assigned',
  UserAssigned = 'user-assigned',
}
