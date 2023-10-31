import { SortOptions, SortValues } from "../cypress/support/custom";

export enum SortingOrder {
  Ascending,
  Descending,
}

const isPriceString = (str: string): boolean => {
  return /^\$[\d.]+$/.test(str);
};

export const isSorted = (arr: string[], order: SortingOrder): boolean => {
  for (let i = 0; i < arr.length - 1; i++) {
    const a = isPriceString(arr[i])
      ? parseFloat(arr[i].replace("$", "").trim())
      : arr[i];
    const b = isPriceString(arr[i + 1])
      ? parseFloat(arr[i + 1].replace("$", "").trim())
      : arr[i + 1];

    if (order === SortingOrder.Ascending) {
      if (a > b) {
        return false;
      }
    } else {
      if (a < b) {
        return false;
      }
    }
  }
  return true;
};

export const mapSortOptionToValue = (option: SortOptions): SortValues => {
  switch (option) {
    case "PriceHighLow":
      return "hilo";
    case "PriceLowHigh":
      return "lohi";
    case "NameAtoZ":
      return "az";
    case "NameZtoA":
      return "za";
    default:
      throw new Error(`Invalid sort option: ${option}`);
  }
};
