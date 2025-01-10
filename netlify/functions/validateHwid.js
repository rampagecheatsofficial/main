// netlify/functions/validateHwid.js
exports.handler = async (event, context) => {
  // Get HWID from query parameter
  const { hwid } = event.queryStringParameters;

  // Example logic to check the HWID
  const validHwids = ['12345abcdef', '67890ghijk']; // Replace with your actual valid HWIDs
  const isValid = validHwids.includes(hwid);

  if (isValid) {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'valid' })
    };
  } else {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'invalid' })
    };
  }
};
