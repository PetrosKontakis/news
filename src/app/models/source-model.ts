import { Source } from '../dtos/source';

export class SourceModel implements Source {
    id: string; name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
    urlsToLogos: string[];
    sortBysAvailable: string[];
    constructor(src: Source) {
        Object.assign(this, src)
    }

}
