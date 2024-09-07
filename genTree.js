import { readdirSync, statSync } from "fs";
import { join } from "path";

const ignoredDirs = ["node_modules", ".next", ".git"]; // Directories to ignore

function generateTree(dir, prefix = "") {
  const files = readdirSync(dir)
    .filter((file) => !ignoredDirs.includes(file));
  const lastFileIndex = files.length - 1;

  files.forEach((file, index) => {
    const filePath = join(dir, file);
    const stat = statSync(filePath);
    const isLast = index === lastFileIndex;
    const pointer = isLast ? "└── " : "├── ";
    const newPrefix = isLast ? `${prefix}    ` : `${prefix}│   `;

    console.log(`${prefix}${pointer}${file}`);

    if (stat.isDirectory()) {
      generateTree(filePath, newPrefix);
    }
  });
}

// Start generating the tree from the current working directory
generateTree(process.cwd());
