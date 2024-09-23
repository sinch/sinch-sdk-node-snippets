// eslint-disable-next-line no-unused-vars
import { Numbers, NumbersService } from '@sinch/sdk-core';

/** @param {NumbersService} numbersService */
export const execute = async (numbersService) => {

  const response = await numbersService.callbacks.get({});

  console.log(`Callback configuration:\n${JSON.stringify(response, null, 2)}`);
};
