const handleJson: ExportedHandler<Env> = {
  fetch: async (request, env, ctx) => {
    return new Response(
      JSON.stringify({ "message": "This is a test JSON message." }),
      {
        headers: {
          "content-type": "application/json"
        }
      }
    );
  }
};

export default handleJson;
