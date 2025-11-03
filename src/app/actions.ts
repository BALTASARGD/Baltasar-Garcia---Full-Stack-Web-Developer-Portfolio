'use server';

import { skillRecommendationTool } from '@/ai/flows/skill-recommendation-tool';
import { z } from 'zod';

const SkillRecommendationInputSchema = z.object({
  currentSkills: z.string().min(1),
  careerGoals: z.string().min(1),
});

export async function getSkillRecommendations(input: z.infer<typeof SkillRecommendationInputSchema>) {
  const validationResult = SkillRecommendationInputSchema.safeParse(input);

  if (!validationResult.success) {
    return { success: false, error: "Invalid input." };
  }

  try {
    const result = await skillRecommendationTool(validationResult.data);
    return { success: true, data: result };
  } catch (error) {
    console.error("Error in getSkillRecommendations action:", error);
    return { success: false, error: "Failed to get skill recommendations due to a server error." };
  }
}
