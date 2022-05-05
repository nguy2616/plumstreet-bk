"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const cookieParser = require("cookie-parser");
const app_module_1 = require("./app.module");
const exceptionsLogger_filter_1 = require("./utils/exceptionsLogger.filter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        credentials: true,
    });
    const { httpAdapter } = app.get(core_1.HttpAdapterHost);
    app.use(cookieParser());
    app.useGlobalFilters(new exceptionsLogger_filter_1.ExceptionsLoggerFilter(httpAdapter));
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map