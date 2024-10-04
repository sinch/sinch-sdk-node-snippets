// eslint-disable-next-line no-unused-vars
import { Numbers, NumbersService } from '@sinch/sdk-core';

/** @param {NumbersService} numbersService */
export const execute = async (numbersService) => {

  const phoneNumber = 'YOUR_rented_phoneNumber';

  /** @type {Numbers.GetActiveNumberRequestData} */
  const requestData = {
    phoneNumber,
  };

  const response = await numbersService.get(requestData);

  console.log(`Rented number details:\n${JSON.stringify(response, null, 2)}`);
};
