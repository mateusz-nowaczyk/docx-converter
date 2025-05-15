export interface CreateTemplateData {
  readonly fileType: string;
  readonly fileName: string;
  readonly file: Buffer;
}

export interface CreateOneTemplateParams {
  readonly templateData: CreateTemplateData;
}
