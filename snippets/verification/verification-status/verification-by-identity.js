// eslint-disable-next-line no-unused-vars
import { Verification, VerificationService } from '@sinch/sdk-core';

/** @param {VerificationService} verificationService */
export const execute = async (verificationService) => {

  const phoneNumber = 'the_phone_number_to_verify';

  /** @type {Verification.VerificationStatusByIdentityRequestData} */
  const requestData = {
    method: 'sms',
    endpoint: phoneNumber,
  };

  const response = await verificationService.verificationStatus.getByIdentity(requestData);

  console.log(`Verification status:\n${JSON.stringify(response, null, 2)}`);
};
