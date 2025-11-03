'use server';

/**
 * @fileOverview An AI-powered tool that analyzes current skills and recommends specific skills and technologies to enhance a career as a full-stack web developer.
 *
 * - skillRecommendationTool - A function that provides personalized learning paths with resources.
 * - SkillRecommendationInput - The input type for the skillRecommendationTool function.
 * - SkillRecommendationOutput - The return type for the skillRecommendationTool function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SkillRecommendationInputSchema = z.object({
  currentSkills: z
    .string()
    .describe('A comma-separated list of current skills and technologies.'),
  careerGoals: z
    .string()
    .describe('A description of the desired career goals as a full-stack web developer.'),
});
export type SkillRecommendationInput = z.infer<typeof SkillRecommendationInputSchema>;

const SkillRecommendationOutputSchema = z.object({
  recommendedSkills: z
    .string()
    .describe('A comma-separated list of skills and technologies to learn.'),
  learningPaths: z
    .string()
    .describe('Personalized learning paths with resources for each recommended skill.'),
});
export type SkillRecommendationOutput = z.infer<typeof SkillRecommendationOutputSchema>;

export async function skillRecommendationTool(input: SkillRecommendationInput): Promise<SkillRecommendationOutput> {
  return skillRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'skillRecommendationPrompt',
  input: {schema: SkillRecommendationInputSchema},
  output: {schema: SkillRecommendationOutputSchema},
  prompt: `You are an AI career advisor specializing in full-stack web development.

You will analyze the current skills and career goals of a user and recommend specific skills and technologies they should learn to enhance their career.

Provide personalized learning paths with resources for each recommended skill.

Current Skills: {{{currentSkills}}}
Career Goals: {{{careerGoals}}}

Recommended Skills and Learning Paths:
`, // Ensure the prompt ends appropriately for content generation
});

const skillRecommendationFlow = ai.defineFlow(
  {
    name: 'skillRecommendationFlow',
    inputSchema: SkillRecommendationInputSchema,
    outputSchema: SkillRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
