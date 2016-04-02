import {bootstrap} from 'aurelia-bootstrapper';
import {DOM} from 'aurelia-pal';

export const StageComponent = {
  withResources(resources): ComponentTester {
    return new ComponentTester().withResources(resources);
  }
};

export class ComponentTester {
  _html: string;
  _resources: string | string[] = [];
  _bindingContext: any;
  _configure = aurelia => aurelia.use.standardConfiguration();
  element;

  bootstrap(configure: (aurelia: Aurelia) => void) {
    this._configure = configure;
  }

  withResources(resources): ComponentTester {
    this._resources = resources;
    return this;
  }

  inView(html): ComponentTester {
    this._html = html;
    return this;
  }

  boundTo(bindingContext): ComponentTester {
    this._bindingContext = bindingContext;
    return this;
  }

  create(): Promise<void> {
    return bootstrap(aurelia => {
      return Promise.resolve(this._configure(aurelia)).then(() => {
        aurelia.use.globalResources(this._resources);

        return aurelia.start().then(a => {
          let host = DOM.createElement('div');
          host.innerHTML = this._html;

          DOM.querySelectorAll('body')[0].appendChild(host);
          aurelia.enhance(this._bindingContext, host);

          this.element = host.firstElementChild;
        });
      });
    });
  }
}
