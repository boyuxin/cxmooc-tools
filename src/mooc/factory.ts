import {CxPlatform} from "./chaoxing/platform";
import {ZhsPlatform} from "./zhihuishu/platform";
import {Course163Platform} from "./course163/platform";
import {CxCourseVCode} from "./chaoxing/vcode";
import {Application} from "@App/internal/application";

export interface Mooc {
    Init(): void
    // TODO: 实现各种流程流转
    // Start()
    // Stop()
    // OnFinished()
    // Next()
}

export interface MoocFactory {
    CreateMooc(): Mooc
}

export class DefaultMoocFactory implements MoocFactory {
    public CreateMooc(): Mooc {
        let mooc = new CxPlatform().CreateMooc();
        if (mooc == null) {
            mooc = new ZhsPlatform().CreateMooc();
        }
        if (mooc == null) {
            mooc = new Course163Platform().CreateMooc();
        }
        return mooc;
    }
}

