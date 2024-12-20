import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'



createRoot(document.getElementById('root')).render(
  <I18nextProvider i18n={i18n}>
    <App/>
  </I18nextProvider>,
)
