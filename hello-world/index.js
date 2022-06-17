let response;

exports.lambdaHandler = async (event, context) => {
  response = {
    statusCode: 200,
    body: JSON.stringify({
      event: event,
      message: "hello world",
    }),
  };

  return response;
};
