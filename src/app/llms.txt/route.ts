import { createGET } from "next-llms-generator/route";

export const GET = createGET({
  generatorOptions: {
    siteUrl: 'http://graybulk.com/',
    enableRecursiveDiscovery: true,
  }
});
