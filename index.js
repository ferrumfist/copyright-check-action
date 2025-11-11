import fs from "fs";
import path from "path";
import core from "@actions/core";

try {
    const repoPath = process.cwd(); // Корень репозитория
    console.log(`📁 Repo path: ${repoPath}`);

    const files = fs.readdirSync(repoPath);
    console.log("Файлы в корне репозитория:");
    console.log(files);

    // Пример: прочитать конкретный файл
    const readmePath = path.join(repoPath, "README.md");
    if (fs.existsSync(readmePath)) {
        const content = fs.readFileSync(readmePath, "utf8");
        console.log("Содержимое README.md:");
        console.log(content.slice(0, 200) + "..."); // первые 200 символов
    } else {
        console.log("README.md не найден 😅");
    }
} catch (error) {
    core.setFailed(error.message);
}
