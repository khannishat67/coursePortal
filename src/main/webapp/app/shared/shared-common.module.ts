import { NgModule } from '@angular/core';

import { CoursePortalSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [CoursePortalSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [CoursePortalSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class CoursePortalSharedCommonModule {}
