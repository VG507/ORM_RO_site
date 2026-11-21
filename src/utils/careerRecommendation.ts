import { careerStages } from '../data/careerRouteData.ts';
import { professionRolesData } from '../data/professionsData.ts';
import { selectorQuestionsData } from '../data/selectorQuestionsData.ts';

export function getCareerRecommendation(interestId: string, formatId: string, experienceId: string) {
  const [interestQuestion, formatQuestion, experienceQuestion] = selectorQuestionsData;
  const interest = interestQuestion.options.find((option) => option.id === interestId);
  const format = formatQuestion.options.find((option) => option.id === formatId);
  const experience = experienceQuestion.options.find((option) => option.id === experienceId);

  if (!interest || !format || !experience) return null;

  const role = professionRolesData.find((item) => item.id === interest.rolesByFormat[format.id]);
  const stage = careerStages.find((item) => item.id === experience.stageId);

  return role && stage ? { role, stage, interest: interest.label, format: format.label } : null;
}
