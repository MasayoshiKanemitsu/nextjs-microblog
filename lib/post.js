import path from "path";
import fs from "fs";
import matter from "gray-matter"; //mdのメタデータを取得
import { remark } from "remark";
import html from "remark-html";
import { notFound } from "next/navigation";

//process.cwd() はカレントディレクトリを指す
const postsDir = path.join(process.cwd(), "posts");

//mdファイルのデータを取得
export function getPostsData() {
  const files = fs.readdirSync(postsDir); //postsディレクトリ内のファイルを配列として取得
  const allPostsData = files.map((file) => {
    const id = file.replace(/\.md$/, ""); //file名をIDに使う
    const fullPath = path.join(postsDir, file);
    const fileContent = fs.readFileSync(fullPath, "utf-8"); //ファイルの内容を取得
    const matterResult = matter(fileContent);
    // const stat = fs.statSync(fullPath);

    //各種情報を返す
    return {
      id,
      // fullPath,
      fileContent,
      ...matterResult.data,
      // name: file,
      // date: stat.mtime,
    };
  });
  return allPostsData;
}

//idを配列で返す
export function getAllPostIds() {
  const files = fs.readdirSync(postsDir); //postsディレクトリ内のファイルを配列として取得
  return files.map((file) => {
    const id = file.replace(/\.md$/, ""); //file名をIDに使う
    return id;
  });
}

//idに基づいたブログの記事を返す
export async function getPostsContent(id) {
  const files = getAllPostIds(); //全記事のIDを取得
  //該当IDが存在しない場合の処理→404へ
  if (files.indexOf(id) === -1) {
    notFound();
  }

  //上記をクリアした場合の処理
  const fullPath = path.join(postsDir, `${id}.md`);
  const fileContent = fs.readFileSync(fullPath, "utf-8"); //ファイルの内容を取得
  const matterResult = matter(fileContent);

  //matterResultの内容をHTMLに変換（remark,remark-htmlを使用）
  const blogContent = await remark().use(html).process(matterResult.content);
  const blogComtentHTML = blogContent.toString(); //String型に変更

  return {
    id,
    blogComtentHTML,
    ...matterResult.data,
  };
}
