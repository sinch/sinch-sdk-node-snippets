// eslint-disable-next-line no-unused-vars
import { Verification, VerificationService } from '@sinch/sdk-core';

/** @param {VerificationService} verificationService */
export const execute = async (verificationService) => {

  const phoneNumber = 'the_phone_number_to_verify';
  const verificationCLI = 'the_phone_number_calling_for_verification';

  /** @type {Verification.ReportFlashCallVerificationByIdentityRequestData} */
  const requestData = Verification.reportVerificationByIdentityHelper.buildFlashCallRequest(
    phoneNumber,
    verificationCLI,
  );

  const response = await verificationService.verifications.reportFlashCallByIdentity(requestData);

  console.log(`Response:\n${JSON.stringify(response, null, 2)}`);
};
