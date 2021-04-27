import { Kolor } from "./kolor";
import { ResponseModel } from "./responseModel";

export interface KolorResponseModel extends ResponseModel{
    data:Kolor[];
}