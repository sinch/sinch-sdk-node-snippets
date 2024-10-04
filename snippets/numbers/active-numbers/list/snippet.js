// eslint-disable-next-line no-unused-vars
import { Numbers, NumbersService } from '@sinch/sdk-core';

/** @param {NumbersService} numbersService */
export const execute = async (numbersService) => {

  /** @type Numbers.ListActiveNumbersRequestData */
  const requestData = {
    regionCode: 'US',
    type: 'LOCAL',
  };

  /** @type {Numbers.ActiveNumber[]} */
  const activeNumbersList = [];
  // Fetch a page of Numbers
  let response = await numbersService.list(requestData);
  // Fetch the data page by page manually
  while (response.hasNextPage) {
    activeNumbersList.push(...response.data);
    response = await response.nextPage();
  }
  activeNumbersList.push(...response.data);

  console.log(`Full list of numbers printed at once (length = ${activeNumbersList.length}):\n${JSON.stringify(activeNumbersList, null, 2)}`);

};
