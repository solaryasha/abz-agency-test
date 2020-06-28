/* eslint-disable max-len */

export const validateForm = (object) => {
  // const nameRegex
  const errorFields = {

  };

  const nameValidation = (field) => {
    if (typeof object[field] === 'string') {
      if (object[field].length < 2) {
        errorFields[field] = 'The name must be at least 2 characters.';
      } else if (object[field].length > 60) {
        errorFields[field] = 'The name may not be greater than 60 characters.';
      }
    }
  };

  const emailValidation = (field) => {
    // eslint-disable-next-line no-control-regex
    const emailRegex = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

    if (!emailRegex.test(object[field])) {
      errorFields[field] = 'The email must be a valid email address.';
    }
  };

  const phoneValidation = (field) => {
    const phoneRegex = /^[+]{0,1}380([0-9]{9})$/;

    if (!phoneRegex.test(object[field])) {
      errorFields[field] = 'The phone format is invalid.';
    }
  };

  const photoValidation = (field) => {
    const maximumImageSize = 5 * 1024 * 1024;

    if (object[field].type !== 'image/jpeg') {
      errorFields[field] = 'The photo must be jpeg/jpg type.';
    } else if (object[field].size > maximumImageSize) {
      errorFields[field] = 'The photo may not be greater than 5 Mb.';
    }
  };

  // eslint-disable-next-line no-control-regex
  Object.keys(object).forEach((field) => {
    switch (field) {
      case 'name':
        nameValidation(field);
        break;
      case 'email':
        emailValidation(field);
        break;
      case 'phone':
        phoneValidation(field);
        break;
      case 'photo':
        photoValidation(field);
        break;
      default:
        break;
    }
  });

  return errorFields;
};

// email: ["The email field is required."]
// name: ["The name field is required."]
// phone: ["The phone field is required."]
// photo: ["The photo field is required."]
// position_id: ["The position id field is required."]
