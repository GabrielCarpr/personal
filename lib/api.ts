import { join } from "path";
import fs from "fs";
import matter from "gray-matter";
import { ProjectSchema } from "types";

const dir = join(process.cwd(), "_projects");

export const getProjects = async (): Promise<ProjectSchema[]> => {
  const projects = fs.readdirSync(dir).map(async (path) => {
    const file = fs.readFileSync(join(dir, path), "utf8");
    const { data, content } = matter(file);

    return {
      content: content,
      image: data.image ?? null,
      github: data.github ?? null,
      lead: data.lead ?? "",
      name: data.name,
    };
  });

  return Promise.all(projects);
};
