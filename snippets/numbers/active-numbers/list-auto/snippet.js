// eslint-disable-next-line no-unused-vars
import { Numbers, NumbersService } from '@sinch/sdk-core';

/** @param {NumbersService} numbersService */
export const execute = async (numbersService) => {

  /** @type Numbers.ListActiveNumbersRequestData */
  const requestData = {
    regionCode: 'US',
    type: 'LOCAL',
  };

  console.log('List of numbers printed one by one:');
  // Use the iterator and fetch data from all the pages automatically
  for await (const rentedNumber of numbersService.list(requestData)) {
    console.log(JSON.stringify(rentedNumber, null, 2));
  }

};
