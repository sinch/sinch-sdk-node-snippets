// eslint-disable-next-line no-unused-vars
import { Verification, VerificationService } from '@sinch/sdk-core';

/** @param {VerificationService} verificationService */
export const execute = async (verificationService) => {

  const verificationID = 'the_verification_ID';

  /** @type {Verification.VerificationStatusByIdRequestData} */
  const requestData = {
    id: verificationID,
  };

  const response = await verificationService.verificationStatus.getById(requestData);

  console.log(`Verification status:\n${JSON.stringify(response, null, 2)}`);
};
