import { protectedForProfessorOrAdmin, router } from '../trpc';
import z from 'zod';

const instructorInput = z.object({
    name: z.string(),
    occupation: z.string(),
    instagram: z.string(),
    imgUrl: z.string(),
})

export const instructorsRouter = router({
    addInstructor: protectedForProfessorOrAdmin
        .input(z.object({
            courseId: z.string(),
            instructor: instructorInput
        }))
        .mutation(async ({ ctx, input }) => {
            const { instructor, courseId } = input;
            const newInstructor = await ctx.prisma.instructors.create({
                data: {
                    ...instructor,
                    course: { connect: { id: courseId } }
                }
            });
            return newInstructor;
        }),
    deleteInstructor: protectedForProfessorOrAdmin
        .input(z.string())
        .mutation(async ({ ctx, input: instructorId }) => {
            return await ctx.prisma.instructors.delete({ where: { id: instructorId } });
        }),
    updateInstructor: protectedForProfessorOrAdmin
        .input(z.object({
            instructorId: z.string(),
            instructor: instructorInput
        }))
        .mutation(async ({ ctx, input }) => {
            const { instructor, instructorId } = input
            const updatedInstructor = await ctx.prisma.instructors.update({
                where: { id: instructorId },
                data: {
                    ...instructor
                }
            });
            return updatedInstructor;
        })

})