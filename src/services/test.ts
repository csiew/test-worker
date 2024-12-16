const handleTest: ExportedHandler<Env> = {
  fetch: async (request, env, ctx) => {
    return new Response("This is a test response.");
  }
};

export default handleTest;
