declare interface ISharePointWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'SharePointWebPartStrings' {
  const strings: ISharePointWebPartStrings;
  export = strings;
}
