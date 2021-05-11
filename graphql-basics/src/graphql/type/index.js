import path from "path";
import { mergeTypeDefs, loadFilesSync } from "graphql-tools";

const typesArray = loadFilesSync(path.join(__dirname, "/**/*.graphql"), {
  recursive: true,
});

const merged = mergeTypeDefs(typesArray);

export { merged as default };
