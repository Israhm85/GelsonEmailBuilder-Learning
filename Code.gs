function doGet(){
const t= HtmlService.createTemplateFromFile('index');
return t.evaluate().setTitle("Gelson's Email Builder");
}

function include(filename){
return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

