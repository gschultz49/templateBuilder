export interface TemplateMetadata {
  description: string;
}
export const GenerateTemplateMetadata = ({
  description,
}: TemplateMetadata): TemplateMetadata => {
  return {
    description,
  };
};
export interface TemplateResponse {
  isDirectory: boolean;
  data: Array<TemplateDirectory | TemplateFile>;
  metadata: TemplateMetadata;
}

export interface TemplateDirectory {
  name: string;
  files: Array<TemplateDirectory | TemplateFile>;
}

export const GenerateTemplateDirectory = ({
  name,
  files,
}: TemplateDirectory): TemplateDirectory => {
  return {
    name,
    files,
  };
};

export interface TemplateFile {
  name: string;
  content: string;
  language: string;
}

export const GenerateTemplateFile = ({
  name,
  content,
  language,
}: TemplateFile): TemplateFile => {
  return {
    name,
    content,
    language,
  };
};

const buildApiBase = (baseEndpoint) => (endpoint) => {
  return `${baseEndpoint}${endpoint}`;
};

export const getApiEndpoint = buildApiBase("/api");

const request = async (state: any): Promise<TemplateResponse> => {
  const response = await fetch(state.url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(state), // body data type must match "Content-Type" header
  });
  return response.json();
};

export default request;
