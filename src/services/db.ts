const handleGetUsers: ExportedHandler<Env> = {
  fetch: async (request, env, ctx) => {
    const url = new URL(request.url);
    const username = url.searchParams.get("u");
    if (!username) {
      return new Response(
        "No username provided",
        {
          status: 400,
          statusText: "No username provided"
        }
      );
    }
    const { results } = await env.DB
      .prepare("SELECT * FROM Users WHERE UserName = ?")
      .bind(username)
      .all();
    return Response.json(results);
  }
};

export default handleGetUsers;