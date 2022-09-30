import {Component, OnInit, Input} from '@angular/core';
import {CodeModel} from "@ngstack/code-editor";
import {CodeEditorModule} from "@ngstack/code-editor";

@Component({
  selector: 'app-compiler',
  templateUrl: './compiler.component.html',
  styleUrls: ['./compiler.component.css']
})
export class CompilerComponent implements OnInit {

  output: string | null | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

  theme = 'vs-dark';

  @Input()
  code = [];

  @Input()
  codeModel: CodeModel = {
    language: 'c++',
    uri: 'main.json',
    value: '// Your First C++ Program\n' +
      '\n' +
      '#include <iostream>\n' +
      '\n' +
      'int main() {\n' +
      '    std::cout << "Hello World!";\n' +
      '    return 0;\n' +
      '}'
  };

  options = {
    contextmenu: true,
    minimap: {
      enabled: true
    }
  };

  onCodeChanged(value: any) {
    console.log('CODE', value);
  }

  submit() {

  }

  resetEditor() {
    console.log('reset editor');
    window.location.reload()
  }

}
