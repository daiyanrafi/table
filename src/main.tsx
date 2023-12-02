import ReactDOM from 'react-dom';
import { FluentProvider, teamsLightTheme } from '@fluentui/react-components';
import { DetailsListCustomColumnsExample } from './App';


ReactDOM.render(
  <FluentProvider theme={teamsLightTheme}>
    <DetailsListCustomColumnsExample/>
  </FluentProvider>,
  document.getElementById('root'),
);