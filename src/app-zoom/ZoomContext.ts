import { createContext } from 'react';
import { VideoClient } from './AppZoomFrame';

type contextType =
| VideoClient
| null;

export default createContext<contextType>(null);