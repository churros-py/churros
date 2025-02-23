import { FastifyReply, FastifyRequest } from "fastify";

export abstract class Controller {
  protected async handle(request: FastifyRequest, reply: FastifyReply, handler: (input: any) => Promise<any>) {
    try {
      const result = await handler(request.body);
      return reply.send(result);
    } catch (error) {
      console.error(`[Controller] Error in ${this.constructor.name}:`, error);
      return reply.status(500).send({ error: "Internal Server Error" });
    }
  }
}
