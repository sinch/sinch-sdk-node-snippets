// eslint-disable-next-line no-unused-vars
import { Verification, VerificationService } from '@sinch/sdk-core';

/** @param {VerificationService} verificationService */
export const execute = async (verificationService) => {

  const verificationID = 'the_verification_ID';
  const verificationCLI = 'the_phone_number_calling_for_verification';

  /** @type {Verification.ReportFlashCallVerificationByIdRequestData} */
  const requestData = Verification.reportVerificationByIdHelper.buildFlashCallRequest(
    verificationID,
    verificationCLI,
  );

  const response = await verificationService.verifications.reportFlashCallById(requestData);

  console.log(`Response:\n${JSON.stringify(response, null, 2)}`);
};
