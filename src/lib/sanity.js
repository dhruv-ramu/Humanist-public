import { createClient } from "next-sanity";

export const client = createClient({
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: true,
  projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
});
