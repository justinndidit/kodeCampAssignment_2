const fs = require("fs");
const path = require("path");

// console.log(path.dirname(__dirname + "/folder/index.txt"));

const js = 'alert("Welcome");';
const css = `
h1 {

text-align:center;

}`;

const html = `<!DOCTYPE html>

<html lang="en">

<head>

<meta charset="UTF-8">

<meta http-equiv="X-UA-Compatible" content="IE=edge">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link rel="stylesheet" href="./css/style.css">

<title>Document</title>

</head>

<body>

<h1>Welcome</h1>

<script src="./js/script.js"></script>

</body>

</html>`;

const errHandler = (err) => {
  if (err) throw err;
};

const mkdir = (path1, path2) => {
  fs.mkdir(path.join(__dirname, path1, path2), (err) => {
    errHandler(err);
  });
};

const writeFile = (path, content) => {
  fs.writeFileSync(__dirname + path, content, (err) => errHandler(err));
};

async function frontendTemplate() {
  await mkdir("/frontend-scaffold", "");
  await mkdir("frontend-scaffold", "/js");
  await mkdir("frontend-scaffold", "/css");
  await mkdir("frontend-scaffold", "/images");

  await writeFile("/frontend-scaffold/js/script.js", js);
  await writeFile("/frontend-scaffold/css/style.css", css);
  await writeFile("/frontend-scaffold/index.html", html);

  console.log("Frontend scaffold created successfully!");
}

frontendTemplate();
