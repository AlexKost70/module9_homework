const parser = new DOMParser();

const xmlString = `
  <list>
    <student>
      <name lang="en">
        <first>Ivan</first>
        <second>Ivanov</second>
      </name>
      <age>35</age>
      <prof>teacher</prof>
    </student>
    <student>
      <name lang="ru">
        <first>Петр</first>
        <second>Петров</second>
      </name>
      <age>58</age>
      <prof>driver</prof>
    </student>
  </list>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const studentNodes = xmlDOM.querySelectorAll("student");
const student1NameNode = studentNodes[0].querySelector("name");
const student2NameNode = studentNodes[1].querySelector("name");
const student1FirstNameNode = student1NameNode.querySelector("first");
const student1SecondNameNode = student1NameNode.querySelector("second");
const student2FirstNameNode = student2NameNode.querySelector("first");
const student2SecondNameNode = student2NameNode.querySelector("second");
const student1AgeNode = studentNodes[0].querySelector("age");
const student2AgeNode = studentNodes[1].querySelector("age");
const student1ProfNode = studentNodes[0].querySelector("prof");
const student2ProfNode = studentNodes[1].querySelector("prof");

const student1NameLangAttr = student1NameNode.getAttribute("lang");
const student2NameLangAttr = student2NameNode.getAttribute("lang");

const result = {
  list: [
    {
     name: student1FirstNameNode.textContent + " " + student1SecondNameNode.textContent, 
     age: Number(student1AgeNode.textContent), 
     prof: student1ProfNode.textContent, 
     lang: student1NameLangAttr
    },
    {
     name: student2FirstNameNode.textContent + " " + student2SecondNameNode.textContent, 
     age: Number(student2AgeNode.textContent), 
     prof: student2ProfNode.textContent, 
     lang: student2NameLangAttr
    }
  ]
}

console.log(result);