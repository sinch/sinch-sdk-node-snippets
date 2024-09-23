// eslint-disable-next-line no-unused-vars
import { Numbers, NumbersService } from '@sinch/sdk-core';

/** @param {NumbersService} numbersService */
export const execute = async (numbersService) => {

  const hmacSecret = 'New_HMAC_secret';

  /** @type {Numbers.UpdateCallbackConfigurationRequestData} */
  const requestData = {
    updateCallbackConfigurationRequestBody: {
      hmacSecret,
    },
  };

  const response = await numbersService.callbacks.update(requestData);

  console.log(`Updated callback configuration:\n${JSON.stringify(response, null, 2)}`);
};
