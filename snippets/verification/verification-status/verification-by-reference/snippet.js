// eslint-disable-next-line no-unused-vars
import { Verification, VerificationService } from '@sinch/sdk-core';

/** @param {VerificationService} verificationService */
export const execute = async (verificationService) => {

  const verificationReference = 'the_verification_reference';

  /** @type {Verification.VerificationStatusByReferenceRequestData} */
  const requestData = {
    reference: verificationReference,
  };

  const response = await verificationService.verificationStatus.getByReference(requestData);

  console.log(`Verification status:\n${JSON.stringify(response, null, 2)}`);
};
