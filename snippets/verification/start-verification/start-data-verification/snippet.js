// eslint-disable-next-line no-unused-vars
import { Verification, VerificationService } from '@sinch/sdk-core';

/** @param {VerificationService} verificationService */
export const execute = async (verificationService) => {

  const phoneNumber = 'the_phone_number_to_verify';
  const reference = 'the_verification_reference';

  /** @type {Verification.StartDataVerificationRequestData} */
  const requestData = Verification.startVerificationHelper.buildDataRequest(
    phoneNumber,
    reference,
  );

  const response = await verificationService.verifications.startData(requestData);

  console.log(`Response:\n${JSON.stringify(response, null, 2)}`);
};
