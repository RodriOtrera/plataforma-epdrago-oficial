import { router, publicProcedure, protectedProcedure, protectedForProfessorOrAdmin } from '../trpc';
import z, { string } from "zod"
export const coursesRouter = router({
    getCourses: publicProcedure.query(async ({ ctx }) => {
        const courses = await ctx.prisma.course.findMany({
            include: {
                _count: {
                    select: {
                        modules: true
                    },

                },
                ratings: true
            },
        });
        return courses
    }),
    addRating: protectedProcedure
        .input(z.object({
            rating: z.number().min(0).max(5),
            courseId: z.string()
        }))
        .mutation(async ({ ctx, input }) => {

            const { session, prisma } = ctx

            const newRating = await prisma.ratings.create({
                data: {
                    rating: input.rating,
                    user: { connect: { id: session.user.id } },
                    course: { connect: { id: input.courseId } }
                }
            });
            return newRating;
        }),
    addModule: protectedProcedure
        .input(z.object({
            courseId: z.string(),
            order: z.number(),
            name: z.string(),
            isVideo: z.boolean().default(false),
            isQuizExam: z.boolean().default(false),
            isContent: z.boolean().default(false),
            moduleContent: z.object({
                title: z.string(),
                urlContent: z.string(),

            }).nullish(),
            moduleVideo: z.object({
                url: z.string(),
                title: z.string(),
            }),
            moduleQuizExam: z.object({
                isExam: z.boolean(),
                examTime: z.number().default(0),

            })

        }))
        .mutation(async ({ ctx, input }) => {

            const { courseId, isContent, isQuizExam, isVideo, name, order, moduleContent, moduleVideo, moduleQuizExam } = input;

            const newModule = await ctx.prisma.modules.create({
                data: {
                    name: name,
                    isVideo: isVideo,
                    isQuizExam: isQuizExam,
                    isContent: isContent,
                    order: order,
                    course: { connect: { id: courseId } },
                    moduleContent: isContent && moduleContent ? {
                        create: {
                            title: moduleContent.title,
                            urlContent: moduleContent.urlContent
                        }
                    } : undefined,
                    moduleVideo: isVideo && moduleVideo ? {
                        create: { title: moduleVideo.title, url: moduleVideo.url }
                    } : undefined,
                    moduleQuizExam: isQuizExam && moduleQuizExam ? {
                        create: { isExam: moduleQuizExam.isExam, examTime: moduleQuizExam.examTime }
                    } : undefined
                }
            });

            return newModule;
        }),
    createCourse: protectedProcedure
        .input(z.object({
            name: z.string(),
            price: z.number(),
            imgUrl: z.string().nullable()
        }))
        .mutation(async ({ ctx, input }) => {

            const { imgUrl, name, price } = input;
            const newCourse = await ctx.prisma.course.create({
                data: {
                    name,
                    price,
                    imgUrl
                },
            });
            return newCourse;
        }),
    updateCourse: protectedProcedure
        .input(z.object({
            courseId: z.string(),
            newUrl: z.string().nullish(),
            name: z.string(),
            price: z.number(),
            description: z.string()
        }))
        .mutation(async ({ ctx, input }) => {

            const { courseId, name, price, newUrl, description } = input;
            const updatedCourse = await ctx.prisma.course.update({
                where: { id: courseId },
                data: {
                    imgUrl: newUrl,
                    name: name,
                    price: price,
                    courseDescription: description
                }
            });
            return updatedCourse;
        }),
    addTestimonial: protectedProcedure
        .input(z.object({
            courseId: z.string(),
            title: z.string(),
            content: z.string()
        }))
        .mutation(async ({ ctx, input }) => {
            const { content, courseId, title } = input;
            const { prisma, session } = ctx

            const newTestimonial = await prisma.testimonials.create({
                data: {
                    content,
                    title,
                    course: { connect: { id: courseId } },
                    user: { connect: { id: session.user.id } }
                }
            });
            return newTestimonial;

        }),

    addFrequentlyAskedQuestions: protectedProcedure
        .input(z.object({
            title: z.string(),
            response: z.string(),
            courseId: z.string()
        }))
        .mutation(async ({ ctx, input }) => {

            const { courseId, response, title } = input
            return await ctx.prisma.frequentlyAskedQuestions.create({
                data: {
                    title: title,
                    response: response,
                    course: { connect: { id: courseId } }
                }
            })
        }),
    deleteFrequentlyAskedQuestion: protectedProcedure
        .input(
            z.string()
        )
        .mutation(async ({ ctx, input: questionId }) => {
            return await ctx.prisma.frequentlyAskedQuestions.delete({ where: { id: questionId } })
        }),
  
})