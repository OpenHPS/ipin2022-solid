import type { IRequest } from '@comunica/types';
import { ProxyHandlerStatic } from '@comunica/actor-http-proxy';

/**
 * A proxy handler that prefixes all URLs with a given string.
 */
export class DynamicProxyHandler extends ProxyHandlerStatic {
    protected condition: (url: string) => boolean;
    public constructor(prefixUrl: string, condition: (url: string) => boolean) {
        super(prefixUrl);
        this.condition = condition;
    }

    protected extractUrl(request: IRequest): string {
        if (typeof request.input === 'string') {
            return request.input;
        } else {
            return request.input.url;
        }
    }

    public async getProxy(request: IRequest): Promise<IRequest> {
        const url = this.extractUrl(request);
        if (this.condition(url)) {
            return {
                init: request.init,
                input: this.modifyInput(request.input),
            };
        }
        return {
            init: request.init,
            input: this.liftToHttps(request.input),
        };
    }

    liftToHttps(input: RequestInfo): RequestInfo {
        if (typeof input === 'string') {
            return input.replace('http:', 'https:');
        }
        return new Request(input.url.replace('http:', 'https:'), input);
    }
}
