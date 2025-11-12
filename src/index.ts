export default {
      async fetch(req, env, ctx): Promise<Response> {
          const url = new URL(req.url)

              // API 例
                  if (url.pathname === "/api/health") {
                        return Response.json({ ok: true, ts: Date.now() })
                            }

                                // 静的資産（/ , /style.css , /app.js など）は assets で配信
                                    // 404 になる環境ではフォールバックとして以下を有効化
                                        // return (env as any).ASSETS.fetch(req)
                                            return new Response("Not Found", { status: 404 })
                                              }
                                              }
}