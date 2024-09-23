// eslint-disable-next-line no-unused-vars
import { Numbers, NumbersService } from '@sinch/sdk-core';

/** @param {NumbersService} numbersService */
export const execute = async (numbersService) => {

  // Available numbers list can be retrieved by using list() function from available service, see:
  // https://developers.sinch.com/docs/numbers/getting-started/node-sdk/searchavailable/
  const phoneNumber = 'available_phone_number_to_be_rented';
  const servicePlanId = 'YOUR_service_plan_id';

  /** @type {Numbers.RentNumberRequestData} */
  const requestData = {
    phoneNumber,
    rentNumberRequestBody: {
      smsConfiguration: {
        servicePlanId,
      },
    },
  };

  const response = await numbersService.availableNumber.rent(requestData);

  console.log(`Rented number:\n${JSON.stringify(response, null, 2)}`);
};
