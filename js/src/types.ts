import { INSGeneric, ResponseBase } from "@zondax/ledger-js";

export interface TemplateIns extends INSGeneric {
  GET_VERSION: 0x00;
  GET_ADDR: 0x01;
  SIGN: 0x02;
}

export interface ResponseAddress extends ResponseBase {
  publicKey?: Buffer;
  address?: String;
}

export interface ResponseSign extends ResponseBase {
  signatureRSV?: Buffer;
  signatureDER?: Buffer;
}
