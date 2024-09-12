// eslint-disable-next-line no-unused-vars
import { Numbers, NumbersService } from '@sinch/sdk-core';

/** @param {NumbersService} numbersService */
export const execute = async (numbersService) => {

  /** @type Numbers.ListActiveNumbersRequestData */
  const requestData = {
    regionCode: 'US',
    type: 'LOCAL',
  };

  // Method 1: Fetch the data page by page manually
  /** @type {Numbers.ActiveNumber[]} */
  const activeNumbersList = [];
  let response = await numbersService.activeNumber.list(requestData);

  do {
    activeNumbersList.push(...response.data);
    response = response.hasNextPage ? await response.nextPage() : null;
  } while (response);
  console.log(`Full list of numbers printed at once (length = ${activeNumbersList.length}):\n${JSON.stringify(activeNumbersList, null, 2)}`);

  // Method 2: Use the iterator and fetch data from more pages automatically
  console.log('List of numbers printed one by one:');
  for await (const rentedNumber of numbersService.activeNumber.list(requestData)) {
    console.log(JSON.stringify(rentedNumber, null, 2));
  }

};
