import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  client: string;
  industry: string;
  date: string;
  tags: string[];
  featured: boolean;
  published: boolean;
  results: Array<{
    metric: string;
    value: string;
    description: string;
  }>;
  content: string;
}

export function getCaseStudies(): CaseStudy[] {
  const caseStudiesDir = path.join(process.cwd(), "content/case-studies");

  if (!fs.existsSync(caseStudiesDir)) {
    console.log("Case studies directory not found, returning empty array");
    return [];
  }

  const files = fs.readdirSync(caseStudiesDir);
  const caseStudies = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(".mdx", "");
      const filePath = path.join(caseStudiesDir, file);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContent);

      return {
        slug,
        content,
        ...data,
      } as CaseStudy;
    });

  return caseStudies
    .filter((cs) => cs.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getCaseStudy(slug: string): CaseStudy | null {
  const caseStudiesDir = path.join(process.cwd(), "content/case-studies");
  const filePath = path.join(caseStudiesDir, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  try {
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);

    return {
      slug,
      content,
      ...data,
    } as CaseStudy;
  } catch (error) {
    console.error(`Error loading case study ${slug}:`, error);
    return null;
  }
}

export function getAllSlugs(type: "case-studies"): string[] {
  const directory = path.join(process.cwd(), "content/case-studies");

  try {
    const fileNames = fs.readdirSync(directory);
    return fileNames
      .filter((name) => name.endsWith(".mdx"))
      .map((fileName) => fileName.replace(/\.mdx$/, ""));
  } catch (error) {
    return [];
  }
}
