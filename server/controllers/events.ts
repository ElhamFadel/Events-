import { Query, Resolver, Arg,Mutation } from 'type-graphql'
const EventModels = require('../models/event');
const Event = require('../schema');
@Resolver((of) => Event)
export class EventResolver {
    @Query((returns) => [Event],{nullable: true})
    async getEvents():Promise<Event[]>{
        return await EventModels.find({})
    }
    
    @Query((returns) => Event)
    async getEvent(@Arg('id') id: string) {
        return await EventModels.findById(id)
    }
    @Query((returns) => [Event])
    async getFilteredEvents(@Arg('dateFilter') dateFilter: {year:string,month:string}) {
        const {year, month}:any = dateFilter;
        return await EventModels.find({
            date: {
                $gte: new Date(year, month, 1),
                $lte: new Date(year, month, 31)
            }
        })
    }
    @Query((returns) => [Event])
    async getFeaturedEvents() {
        return await EventModels.find({isFeatured: true})
    }
    @Mutation((returns) => Event)
    async createEvent(@Arg('event') event: Event) {
        const newEvent = new EventModels(event);
        return await newEvent.save();
    }
}
