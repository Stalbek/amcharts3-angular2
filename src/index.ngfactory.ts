/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from './index';
class AmChartsModuleInjector extends import0.ɵNgModuleInjector<import1.AmChartsModule> {
  _AmChartsModule_0:import1.AmChartsModule;
  __AmChartsService_1:import1.AmChartsService;
  constructor(parent:import0.Injector) {
    super(parent,([] as any[]),([] as any[]));
  }
  get _AmChartsService_1():import1.AmChartsService {
    if ((this.__AmChartsService_1 == null)) { (this.__AmChartsService_1 = new import1.AmChartsService(this.parent.get(import0.NgZone))); }
    return this.__AmChartsService_1;
  }
  createInternal():import1.AmChartsModule {
    this._AmChartsModule_0 = new import1.AmChartsModule();
    return this._AmChartsModule_0;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import1.AmChartsModule)) { return this._AmChartsModule_0; }
    if ((token === import1.AmChartsService)) { return this._AmChartsService_1; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const AmChartsModuleNgFactory:import0.NgModuleFactory<import1.AmChartsModule> = new import0.NgModuleFactory<any>(AmChartsModuleInjector,import1.AmChartsModule);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL2hvbWUvcGF1YW4vV29yay9hbUNoYXJ0cy9hbWNoYXJ0czMtYW5ndWxhcjIvc3JjL2luZGV4Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL2hvbWUvcGF1YW4vV29yay9hbUNoYXJ0cy9hbWNoYXJ0czMtYW5ndWxhcjIvc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIiAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==