// eslint-disable-next-line no-unused-vars
import { Numbers, NumbersService } from '@sinch/sdk-core';

/** @param {NumbersService} numbersService */
export const execute = async (numbersService) => {

  const phoneNumber = 'YOUR_phone_number_to_be_released';

  /** @type {Numbers.ReleaseNumberRequestData} */
  const requestData = {
    phoneNumber,
  };

  const response = await numbersService.activeNumber.release(requestData);

  console.log(`Released number:\n${JSON.stringify(response, null, 2)}`);
};
