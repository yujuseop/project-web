//만들 번들러(파일 파싱 + 의존성 분석)
const fs = require("fs");
const path = require("path");
const acorn = require("acorn");

function createModule(filePath) {
  const content = fs.readFileSync(filePath, "utf-8"); // 파일 내용 읽기
  const ast = acorn.parse(content, { sourceType: "module" }); // AST 분석

  const dependencies = [];
  // 모든 import 문을 찾아서 dependencies 배열에 추가
  ast.body.forEach((node) => {
    if (node.type === "ImportDeclaration") {
      dependencies.push(node.source.value); //예: './message.js'
    }
  });

  return {
    filePath, //파일 경로
    dependencies, // 이 파일이 import 한 모듈 경로 목록
    code: content, // 파일 원본 코드
  };
}

function createDependencyGraphy(entry) {
  // 모듈 그래프 생성
  const entryPath = path.resolve(entry); // entry 경로 절대화
  const entryModule = createModule(entryPath); // 시작 모듈 생성

  const graph = [entryModule]; // 그래프에 모듈을 담음

  for (const module of graph) {
    module.dependencies.forEach((relPath) => {
      const absPath = path.resolve(path.dirname(module.filePath), relPath); // 상대 경로 -> 절대 경로
      const child = createModule(absPath); //자식 모듈 생성
      graph.push(child); // 그래프에 추가
    });
  }
  return graph; // 모든 모듈이 담긴 의존성 그래프
} // 깊이 우선 탐색 처럼 한번만 순회해서 단순 의존성 그래프 구성

function bundle(entry) {
  // 그래프를 순회하며 코드 합치기
  const graph = createDependencyGraphy(entry);

  let result = "";

  graph.forEach((mod) => {
    result += "// ${mod.filePath}\n"; // 주석으로 원래 파일 표시
    result += mod.code + "\n"; // 코드 추가
  });

  fs.writeFileSync("bundle.js", result); // 최종 코드 저장
  console.log("번들링 완료! -> bundle.js");
}

bundle("./src/index.js");
