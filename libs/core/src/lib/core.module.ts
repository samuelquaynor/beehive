import { Module } from '@nestjs/common'
import { configuration } from './config/confguration'
import { ConfigModule } from '@nestjs/config'
import { validationSchema } from './config/validation'
import { GraphQLModule } from '@nestjs/graphql'
import { CoreResolver } from './core.resolver'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validationSchema,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      playground: true,
    }),
  ],
  controllers: [],
  providers: [CoreResolver],
  exports: [],
})
export class CoreModule {}
