# ViewPixabayImages
I developed Web App for viewing Space images from Pixabay.com. I used React + Redux, Sass, API Pixabay, firebase for deploy. 
See my work here https://react-quiz-cec67.firebaseapp.com/

# Tpg-Dynamic-Form

The dynamic form builds form that is based on passed schema.
Schema is special configuration, based on which form will be generated.

# How to get started with dynamic form

At first you should import TpgDynamicFormModule from '@tpgroup/tpg-dynamic-form' in your specific module.
Then in component's template use \<tpg-form-builder\>\</tpg-form-builder\> tag and provide value in [schema] input. Please note that this value has Array\<Form\> type. 

Basically Form Schema is a top level that contains forms. Here is a simple example for it:

```js
{
  'forms': [
     {
       'layout': 'layout1',
       'id': 'demo_form_builder-form1',
       'headline': 'Form One Headline',
       'sections': [
         {
           'columns': [
             {
               'entities': [
                 {
                   'label': 'This is a label',
                   'id': 'demo_form_builder-label1',
                   'required': false,
                   'components': [
                     {
                       'type': 'TpgTextInputFieldFormComponent',
                       'id': 'demo_form_builder-textfield1',
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
       'id': 'demo_form_builder-form2',
       'headline': 'Form Two Headline',
       'sections': [
         {
           'columns': [
             {
               'entities': [
                 {
                   'label': 'This is a label',
                   'id': 'demo_form_builder-label2',
                   'required': true,
                   'components': [
                     {
                       'type': 'TpgTextInputFieldFormComponent',
                       'id': 'demo_form_builder-textfield2',
                       'name': 'field2',
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

Let's have a look inside this structure.

## Schema
Schema consists from:

templateSelector: FormTemplateSelector - is global selector for forms templates \n
forms: Form[] - contains array of forms that will be generated. Each form is placed one below the other

## Form
Each Form object consists from:

id: string - is unique id for each form
headline: string - is headline text
layout: string - is type of form layout
scrollElementAnchor: string | number - is anchor for scroll
templateSelector: FormTemplateSelector - is form selector for sections templates
infoBox: FormInfoBox - is info box configuration
sections: FormSection[] - is array of form sections. FormSection is separate block of form that is placed one below the other

## FormSection
Each FormSection object consists from:

subtitle: string - is section subtitle
templateSelector: FormTemplateSelector - is section selector for columns templates
infoBox: FormInfoBox - is info box configuration
columns: FormColumn[] - is array of section columns. FormColumn is separate column of section

## FormColumn
Each FormColumn object consists from:

anchor: string - is a column anchor
entities: FormEntity[] - is array of column entities. FormEntity is a separate part of the column that is placed one below the other.

## FormEntity
Each FormEntity object consists from label and components, indicated if fields are mandatory:

id: string - is unique id for each entity
label: string - is a entity label
required: boolean - indicates if entity fields are mandatory
components: FormComponent[] - is array of entity components. FormComponent is specific field to interact with form

## FormComponent
FormComponent has properties of different form components.

Available types of components:
* TpgTextInputFieldFormComponent: TextInputFieldFormComponent
* TpgTextAreaFormComponent: TextAreaFormComponent
* TpgDropdownFormComponent: DropdownFormComponent
* TpgMenuButtonFormComponent: MenuButtonFormComponent
* TpgHintFormComponent: HintFormComponent
* TpgHyperlinkFormComponent: HyperlinkFormComponent
* TpgInlineErrorTextFormComponent: InlineErrorTextFormComponent
* TpgRadioButtonFormComponent: RadioButtonFormComponent
* TpgTextFormComponent: TextFormComponent
* TpgLabelFormComponent: LabelFormComponent
* TpgCheckboxGroupFormComponent: CheckboxGroupFormComponent
* TpgSelectorFormComponent: SelectorFormComponent
* TpgEmailInputFieldFormComponent: EmailInputFieldFormComponent
* TpgFileUploadFormComponent: FileUploadFormControlComponent
* TpgPhoneNumberFormComponent: PhoneNumberFormComponent
* TpgTableFormComponent: TableFormComponent
* TpgNumericStepperFormComponent: NumericStepperFormControlComponent
* TpgColumnPickerFormComponent: ColumnPickerFormComponent
* TpgDateTimePickerFormComponent: DateTimePickerFormControlComponent
* TpgSwitchFormComponent: SwitchFormComponent
* TpgCodeTextAreaFormComponent: CodeTextAreaFormComponent
* TpgWysiwygTextAreaFormComponent: WysiwygTextAreaFormComponent
* TpgRangeSliderFormComponent: RangeSliderFormControlComponent
* TpgAddressInputFormComponent: AddressInputFormComponent
* TpgFromToPickerFormComponent: FromToPickerFormComponent
* TpgHierarchyPickerFormComponent: HierarchyPickerFormComponent
* TpgDateTimeRangePickerComponent: DateTimeRangePickerFormControlComponent
* TpgLanguageSelectionFormComponent: LanguageSelectionFormComponent

# Example how to add a form inside code

1. Import TpgDynamicFormModule from '@tpgroup/tpg-dynamic-form' in your specific module.

some-module.module.ts
```js
import { TpgDynamicFormModule } from '@tpgroup/tpg-dynamic-form';

...

@NgModule({
  ...
   imports: [
     ...
     TpgDynamicFormModule,
   ]
})
```

2. 

List features

Describe how data can be loaded

Create/Enhance section "Complex components description" in README.md which links to this new table documentation
