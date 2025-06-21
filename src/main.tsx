
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Font Awesome configuration
import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faEnvelope, 
  faLock, 
  faEye, 
  faEyeSlash, 
  faUser, 
  faBuilding,
  faCheck,
  faQuestionCircle 
} from '@fortawesome/free-solid-svg-icons'

// Add icons to the library
library.add(faEnvelope, faLock, faEye, faEyeSlash, faUser, faBuilding, faCheck, faQuestionCircle)

createRoot(document.getElementById("root")!).render(<App />);
