# ViewPixabayImages
I developed Web App for viewing Space images from Pixabay.com. I used React + Redux, Sass, API Pixabay, firebase for deploy. 
See my work here https://react-quiz-cec67.firebaseapp.com/

Basically Form Schema is a top level that contains forms. Here is example json for it:

```json
{
  forms: [
     {
       layout: 'layout1',
       'id': 'demo_form_builder2-form1',
       'headline': 'Layout One Headline',
       'sections': [
         {
           'columns': [
             {
               'entities': [
                 {
                   'label': 'This is a label',
                   'id': 'demo_form_builder2-label1',
                   'required': false,
                   'components': [
                     {
                       'type': 'TpgTextInputFieldFormComponent',
                       'id': 'demo_form_builder2-textfield1',
                       'name': 'field1',
                       'required': false,
                       'disabled': true,
                       'control': new FormControl(),
                       'value': ''
                     },
                   ]
                 },
               ]
             }
           ]
         }
       ],
     },
     {
       'layout': 'layout1',
       'id': 'demo_form_builder2-form2',
       'headline': 'Layout One Headline',
       'sections': [
         {
           'columns': [
             {
               'entities': [
                 {
                   'label': 'This is a label',
                   'id': 'demo_form_builder2-label10',
                   'required': true,
                   'components': [
                     {
                       'type': 'TpgTextInputFieldFormComponent',
                       'id': 'demo_form_builder2-textfield3',
                       'name': 'field3',
                       'required': true,
                       'control': new FormControl(),
                       'value': ''
                     },
                   ]
                 },
               ]
             }
           ]
         }
       ],
     },
   ]
}
```
