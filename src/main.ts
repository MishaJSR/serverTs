import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const start = async () => {
    try {
        const PORT = process.env.PORT || 5000;
        const app = await NestFactory.create(AppModule)
        app.enableCors();
        

        const config = new DocumentBuilder()
        .setTitle('Backend')
        .setDescription('Rest API Doc')
        .setVersion('1.0')
        .addTag('SMS')
        .build()


        const document = SwaggerModule.createDocument(app, config);
        SwaggerModule.setup('api/docs', app, document)

        console.log(new Date().toString())

        await app.listen(PORT, () => console.log(`server started on ${PORT} Port`))
    } catch (e) {
        console.log(e)
    }
}

start()