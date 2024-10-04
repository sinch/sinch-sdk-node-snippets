// eslint-disable-next-line no-unused-vars
import { Verification, VerificationService } from '@sinch/sdk-core';

/** @param {VerificationService} verificationService */
export const execute = async (verificationService) => {

  const phoneNumber = 'the_phone_number_to_verify';
  const reference = 'the_verification_reference';

  /** @type {Verification.StartPhoneCallVerificationRequestData} */
  const requestData = Verification.startVerificationHelper.buildPhoneCallRequest(
    phoneNumber,
    reference,
    'fr-FR',
  );

  const response = await verificationService.verifications.startPhoneCall(requestData);

  console.log(`Response:\n${JSON.stringify(response, null, 2)}`);
};
