import { rest } from 'msw'
import { core } from "../core/config";

export const handlers = [

  rest.post<{}, { userData: string }, {}>(
    `${core.apiHost}/users`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.status(200),
      );
    }
  ),
]