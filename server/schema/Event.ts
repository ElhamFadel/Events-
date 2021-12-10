import { Field, ObjectType,Int } from 'type-graphql'

@ObjectType()
export class Event {
    @Field(() => Int)
    id: number;
    @Field(() => String)
    title: string;
    @Field(() => String)
    description: string;
    @Field(() => String)
    location: string;
    @Field(() => Date)
    date: Date;
    @Field(() => String)
    image: string;
    @Field(() =>  Boolean)
    isFeatured: boolean;
}