const { yup, errors } = require('@strapi/utils');
const { YupValidationError } = errors;

const PHONE_REGEX =
  /^(\+1\s?)?(\([0-9]{3}\)|[0-9]{3})[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}$/;

const PHONE_ERROR_MESSAGE =
  'Please enter a valid US phone number (e.g. +1 123 456 7890 or 123-456-7890).';

const validateFooterPhone = (data) => {
  const phone = data?.footer?.phone;

  if (phone && !PHONE_REGEX.test(phone)) {
    throw new YupValidationError(
      new yup.ValidationError(PHONE_ERROR_MESSAGE, phone, 'footer.phone')
    );
  }
};

module.exports = { validateFooterPhone };
