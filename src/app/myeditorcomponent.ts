import {CodeModel} from "./codemodel";

export class MyEditorComponent {
  codeModel: CodeModel = {
    language: 'json',
    uri: 'main.json',
    value: '{ "test": true }',
    schemas: [
      {
        uri: 'http://custom/schema.json',
        schema: {
          type: 'object',
          properties: {
            type: {
              enum: ['button', 'textbox']
            }
          }
        }
      }
    ]
  };
}
