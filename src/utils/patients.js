import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const patientsDirectory = join(process.cwd(), "data", "patients");

export function getAllPatients(fields = []) {
  const slugs = getPatientSlug();
  const posts = slugs
    .map((slug) => getPatientBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, pos2) => (post1.date > pos2.date ? -1 : 1));
  return posts;
}

export function getPatientSlug() {
  return fs.readdirSync(patientsDirectory);
}

export function getPatientBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(patientsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items = {};

  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}
