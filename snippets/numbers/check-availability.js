// eslint-disable-next-line no-unused-vars
import { Numbers, NumbersService } from '@sinch/sdk-core';

/** @param {NumbersService} numbersService */
export const execute = async (numbersService) => {

  const phoneNumber = 'a_phone_number';

  /** @type {Numbers.GetAvailableNumberRequestData} */
  const requestData = {
    phoneNumber,
  };

  let response;
  try {
    response = await numbersService.availableNumber.checkAvailability(requestData);
  } catch (error) {
    console.error(`ERROR: the phone number ${requestData.phoneNumber} is not available`);
  }

  if (response) {
    console.log(`The phone number is available:\n${JSON.stringify(response, null, 2)}`);
  }

};
