import IModule from './modules/IModule';
import Captcha from './modules/Captcha';
import ExpandFile from './modules/ExpandFile';
import FormMarkup from './modules/FormMarkup';
import FormSave from './modules/FormSave';
import QuotePost from './modules/QuotePost';
import StyleSwitcher from './modules/StyleSwitcher';

const modules: { [key: string]: IModule } = {};
modules['Captcha'] = new Captcha();
modules['ExpandFile'] = new ExpandFile();
modules['FormMarkup'] = new FormMarkup();
modules['FormSave'] = new FormSave();
modules['QuotePost'] = new QuotePost();
modules['StyleSwitcher'] = new StyleSwitcher();
