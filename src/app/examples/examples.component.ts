import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.css']
})
export class ExamplesComponent implements OnInit {
  codeText = "// Your First C++ Program\n" +
    "#include <iostream>\n" +
    "int main()\n" +
    "std::cout << \"Hello World!\";\n" +
    "return 0;\n" +
    "}";

  codeText2 = "#include <iostream> \n" +
    "\n" +
    "using namespace std;\n" +
    "\n" +
    "    int main() { \n" +
    "    int first_number, second_number, sum; \n" +
    "\n" +
    "    cout << \"Enter two integers: \";\n" +
    "    cin >> first_number >> second_number;\n" +
    "\n" +
    "    // sum of two numbers in stored in variable sumOfTwoNumbers\n" +
    "\n" +
    "    sum = first_number + second_number;\n" +
    "\n" +
    "    // prints sum\n" +
    "    cout << first_number << \" + \" << second_number << \" = \" << sum;\n" +
    "    return 0; \n" +
    "}"

  constructor() {
  }

  ngOnInit(): void {
  }

}
