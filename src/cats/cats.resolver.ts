import { Query, Resolver, Args, Mutation } from '@nestjs/graphql';
import { CatsService } from './cats.service';
import { Int } from "type-graphql";

// GraphQL 的解析器，用于解析 GraphQL 客户端传来的请求
// 解析器负责解析请求，然后调用具体的服务类方法
@Resolver('Cats')
export class CatsResolver {
    constructor(
        private catsService: CatsService,
    ) { }

    @Query(type => String, { name: 'getName', description: '获取数据库中的名字（demo 测试用）', nullable: true })
    async getName(
        @Args({ name: 'id', type: () => Int, description: '数据库中的ID（测试用）' }) id: number
    ) {
        return this.catsService.getName(id);
    }
}
