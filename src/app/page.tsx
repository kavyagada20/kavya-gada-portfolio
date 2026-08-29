import { HeroSection } from '@/components/hero/hero';
import { AboutSection } from '@/components/about/about-section';
import { ProjectGridSection } from '@/components/projects/project-grid';
import { ExperienceSection } from '@/components/experience/experience-timeline';
import { ProblemSolvingSection } from '@/components/problem-solving/problem-solving-section';
import { SkillsSection } from '@/components/skills/skills-section';
import { EducationSection } from '@/components/education/education-section';
import { ActivitiesSection } from '@/components/activities/activities-section';
import { ContactCTA } from '@/components/contact/contact-cta';

export default function HomePage() {
  return (
    <div className="flex flex-col space-y-0">
      <HeroSection />
      <AboutSection />
      <ProjectGridSection />
      <ExperienceSection />
      <ProblemSolvingSection />
      <SkillsSection />
      <EducationSection />
      <ActivitiesSection />
      <ContactCTA />
    </div>
  );
}
