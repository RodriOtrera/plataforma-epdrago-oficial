import { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import { router } from "../trpc";
import { authRouter } from "./auth";
import { coursesRouter } from './courses';
import { instructorsRouter } from './instructors';
import { RouterInputs, RouterOutputs } from '../../../utils/trpc';

export const appRouter = router({
  auth: authRouter,
  courses: coursesRouter,
  instructors: instructorsRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
type RouterInput = inferRouterInputs<AppRouter>;
type RouterOutput = inferRouterOutputs<AppRouter>;

