import React from 'react';
import Page from '../../scripts/components/Page';
import { PreviewTemplateComponentProps } from 'netlify-cms-core';

function replaceTemplateTags(content: string) {
  const { rootPath, npmPackage, githubUrl, name } = process.env;
  return content
    .replace('{{root}}', rootPath ? `/${rootPath}` : '')
    .replace('{{npm}}', npmPackage ? `${npmPackage}` : '')
    .replace('{{github}}', githubUrl ? `${githubUrl}` : '')
    .replace('{{name}}', name ? `${name}` : '');
}

const BasicPagePreview = (props: PreviewTemplateComponentProps) => {
  const title = props.entry.getIn(['data', 'title']);
  // const entryWithBodyUpdates = props.entry.updateIn(['data', 'body'],replaceTemplateTags)
  // const body = props.widgetFor('body', undefined, entryWithBodyUpdates);
  const body = props.widgetFor('body');
  return (
    <div className="ds-base">
      <Page header={title} description={body} />
    </div>
  );
};

export default BasicPagePreview;
