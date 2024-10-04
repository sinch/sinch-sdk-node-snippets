// eslint-disable-next-line no-unused-vars
import { Numbers, NumbersService } from '@sinch/sdk-core';

/** @param {NumbersService} numbersService */
export const execute = async (numbersService) => {

  const phoneNumber = 'a_phone_number';

  /** @type {Numbers.GetAvailableNumberRequestData} */
  const requestData = {
    phoneNumber,
  };

  try {
    const response = await numbersService.checkAvailability(requestData);
    console.log(`The phone number is available:\n${JSON.stringify(response, null, 2)}`);
  } catch (error) {
    console.error(`ERROR: the phone number ${requestData.phoneNumber} is not available`);
  }

};
