// eslint-disable-next-line no-unused-vars
import { Numbers, NumbersService } from '@sinch/sdk-core';

/** @param {NumbersService} numbersService */
export const execute = async (numbersService) => {

  /** @type {Numbers.ListAvailableRegionsRequestData} */
  const requestData = {
    types: ['LOCAL', 'MOBILE'],
  };

  const response = await numbersService.availableRegions.list(requestData);

  console.log(`Available regions:\n${JSON.stringify(response, null, 2)}`);
};
