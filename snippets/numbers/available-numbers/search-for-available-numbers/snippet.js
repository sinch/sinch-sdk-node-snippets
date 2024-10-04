// eslint-disable-next-line no-unused-vars
import { Numbers, NumbersService } from '@sinch/sdk-core';

/** @param {NumbersService} numbersService */
export const execute = async (numbersService) => {

  /** @type {Numbers.ListAvailableNumbersRequestData} */
  const requestData = {
    regionCode: 'US',
    type: 'LOCAL',
    capabilities: ['SMS', 'VOICE'],
  };

  const response = await numbersService.searchForAvailableNumbers(requestData);

  console.log(`Available numbers to rent:\n${JSON.stringify(response, null, 2)}`);
};
