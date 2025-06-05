import type { inferRouterOutputs } from '@trpc/server';
import type { AppRouter } from '@tradoora/shared';

type RouterOutputs = inferRouterOutputs<AppRouter>;

export type CreateReview = RouterOutputs['review']['create'];

export type GetReviewByProduct = RouterOutputs['review']['getByProductId'];

export type ListReview = RouterOutputs['review']['listAll'];