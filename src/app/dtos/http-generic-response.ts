import { Source } from './source';

export interface HttpGenericResponse {
    status: string,
    sources: Array<Source>
}
