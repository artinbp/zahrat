import axios from 'axios'
import router from '@/router'
import flightError from '@/store/flight/error';
import flightFilter from '@/store/flight/filter'
import {siteData} from '@/config';

const flight = {
    state: {
        cityPopUp: false,
        origin: '',
        destination: '',
        tickets: [
            {
                flight_id: "b3fb6f6b-d5d0-4474-bdb3-306a22fbe8c1",
                origin_destination_type: "",
                is_passport_mandatory: false,
                air_trip_type: "one_way",
                non_refundable_type: "defult",
                refund_method: "defult",
                price_detail: {
                    currency: "IRR",
                    total_price: -1,
                    adult_price: 5300000,
                    child_price: 5300000,
                    infant_price: 2000000
                },
                seats_remaining: 9,
                outbound_operating_airlines: [
                    {
                        code: "TK",
                        flight_number: "888",
                        equipment: "AB4"
                    }
                ],
                inbound_operating_airlines: null,
                outbound_group: {
                    Origin: "IKA",
                    destination: "AYT",
                    departure_date_time: "2022-08-05T14:40:00Z",
                    arrival_date_time: "2022-08-05T15:40:00Z",
                    journey_duration_in_minute: 150,
                    connection_time_in_minute: -1,
                    flight_segments: [
                        {
                            departure_date_time: "2022-08-05T14:40:00Z",
                            arrival_date_time: "2022-08-05T15:40:00Z",
                            departure_airport: "IKA",
                            arrival_airport: "AYT",
                            flight_number: "888",
                            stop_quantity: 1,
                            travel_time_in_minutes: 150,
                            connection_time_in_minutes: -1,
                            operating_airline: {
                                code: "TK",
                                flight_number: "888",
                                equipment: "AB4"
                            },
                            is_charter: true,
                            is_return: false,
                            baggage: "",
                            seats_remaining: 9,
                            cabin_class: "economy",
                            technical_stops: [
                                {
                                    arrival_airport: "GZP",
                                    arrival_date_time: "2022-08-05T15:00:00Z",
                                    departure_date_time: "2022-08-05T15:20:00Z"
                                }
                            ]
                        }
                    ]
                },
                inbound_group: null,
                fare_family: null
            },
            {
                flight_id: "c9caaf05-c8a9-4e0d-8af5-7546ec825863",
                origin_destination_type: "",
                is_passport_mandatory: false,
                air_trip_type: "one_way",
                non_refundable_type: "defult",
                refund_method: "defult",
                price_detail: {
                    currency: "IRR",
                    total_price: -1,
                    adult_price: 30000000,
                    child_price: 25000000,
                    infant_price: 4000000
                },
                seats_remaining: 9,
                outbound_operating_airlines: [
                    {
                        code: "TK",
                        flight_number: "888",
                        equipment: "AB4"
                    }
                ],
                inbound_operating_airlines: null,
                outbound_group: {
                    Origin: "IKA",
                    destination: "AYT",
                    departure_date_time: "2022-08-05T14:40:00Z",
                    arrival_date_time: "2022-08-05T15:40:00Z",
                    journey_duration_in_minute: 150,
                    connection_time_in_minute: -1,
                    flight_segments: [
                        {
                            departure_date_time: "2022-08-05T14:40:00Z",
                            arrival_date_time: "2022-08-05T15:40:00Z",
                            departure_airport: "IKA",
                            arrival_airport: "AYT",
                            flight_number: "888",
                            stop_quantity: 1,
                            travel_time_in_minutes: 150,
                            connection_time_in_minutes: -1,
                            operating_airline: {
                                code: "TK",
                                flight_number: "888",
                                equipment: "AB4"
                            },
                            is_charter: true,
                            is_return: false,
                            baggage: "",
                            seats_remaining: 9,
                            cabin_class: "economy_plus",
                            technical_stops: [
                                {
                                    arrival_airport: "GZP",
                                    arrival_date_time: "2022-08-05T15:00:00Z",
                                    departure_date_time: "2022-08-05T15:20:00Z"
                                }
                            ]
                        }
                    ]
                },
                inbound_group: null,
                fare_family: null
            }
        ],
        ticket:{
            services: null,
            meal_type_services: null,
            flight: {
                flight_id: "c106f754-d5f9-4c7b-8c53-966bef1e1762",
                origin_destination_type: "",
                is_passport_mandatory: false,
                air_trip_type: "one_way",
                non_refundable_type: "defult",
                refund_method: "defult",
                price_detail: {
                    currency: "IRR",
                    total_price: -1,
                    adult_price: 5300000,
                    child_price: 5300000,
                    infant_price: 2000000
                },
                seats_remaining: 9,
                outbound_operating_airlines: [
                    {
                        code: "TK",
                        flight_number: "888",
                        equipment: "AB4"
                    }
                ],
                inbound_operating_airlines: null,
                outbound_group: {
                    Origin: "IKA",
                    destination: "AYT",
                    departure_date_time: "2022-09-30T14:40:00Z",
                    arrival_date_time: "2022-09-30T16:40:00Z",
                    journey_duration_in_minute: 150,
                    connection_time_in_minute: -1,
                    flight_segments: [
                        {
                            departure_date_time: "2022-09-30T14:40:00Z",
                            arrival_date_time: "2022-09-30T16:40:00Z",
                            departure_airport: "IKA",
                            arrival_airport: "AYT",
                            flight_number: "888",
                            stop_quantity: 1,
                            travel_time_in_minutes: 150,
                            connection_time_in_minutes: -1,
                            operating_airline: {
                                code: "TK",
                                flight_number: "888",
                                equipment: "AB4"
                            },
                            is_charter: true,
                            is_return: false,
                            baggage: "",
                            seats_remaining: 9,
                            cabin_class: "economy",
                            technical_stops: [
                                {
                                    arrival_airport: "GZP",
                                    arrival_date_time: "2022-09-30T15:00:00Z",
                                    departure_date_time: "2022-09-30T15:20:00Z"
                                }
                            ]
                        }
                    ]
                },
                inbound_group: null,
                fare_family: null
            }
        },
        day: '',
        month: '',
        year: '',
        returnDay: '',
        returnMonth: '',
        returnYear: '',
        days: [{ price: '', date: new Date() }],
        customers: {
            email: '',
            phone: '',
            persons: [{
                firstname: '',
                lastname: '',
                birthday: '',
                expire: '',
                code: '',
                gender: 'Male',
                codetype: 'Passport',
                usertype: 'Adult',
                country: ''
            }]
        },
    },
    getters: {
        getFlightSearchTickets:(state) => state.tickets,
        getFlightRivalidatedTicket:(state) => state.ticket,
        getCityPopup:(state) => state.cityPopUp,
        getDay: (state) => state.day,
        getMonth: (state) => state.month,
        getYear: (state) => state.year,
        getReturnDay: (state) => state.returnDay,
        getReturnMonth: (state) => state.returnMonth,
        getReturnYear: (state) => state.returnYear,
        getdays: (state) => state.days,
        getorigin: (state) => state.origin,
        getdestination: (state) => state.destination,
        getPassengerCount:(state) => {
           return state.customers.persons.length
        },
        getPassenger:(state) => {
           return state.customers.persons
        },
        getEmailPassenger:(state) => {
           return state.customers.email
        },
        getPhonePassenger:(state) => {
           return state.customers.phone
        },
        getAdultCount:(state) => {
            return state.customers.persons.filter((item) => item.usertype === 'Adult').length
        },
        getChildCount:(state) => {
            return state.customers.persons.filter((item) => item.usertype === 'Child').length
        },
        getInfantCount:(state) => {
            return state.customers.persons.filter((item) => item.usertype === 'Infant').length
        }
    },
    mutations: {
        setTickets (state, data) {
            state.tickets = data
        },
        setFlightRivalidatedTicket (state, data) {
            state.ticket = data
        },
        setOrigin (state, data) {
            console.log(state.origin,data)
            state.origin = data
            console.log(state.origin,data)
        },
        setDestination (state, data) {
            state.destination = data
        },
        setDays (state) {
            const days =[
                {
                    price: 1000,
                    date: "2022-12-28T20:34:16.000Z"
                },
                {
                    price: 500,
                    date: "2022-12-29T20:34:16.000Z"
                },
                {
                    price: 400,
                    date: "2022-12-30T20:34:16.000Z"
                },
                {
                    price: 500,
                    date: "2022-12-31T20:34:16.000Z"
                },
                {
                    price: 500,
                    date: "2022-01-01T20:34:16.000Z"
                },
                {
                    price: 500,
                    date: "2022-01-02T20:34:16.000Z"
                },
                {
                    price: 500,
                    date: "2022-01-03T20:34:16.000Z"
                },
                {
                    price: 500,
                    date: "2022-01-04T20:34:16.000Z"
                },
                {
                    price: 500,
                    date: "2022-01-05T20:34:16.000Z"
                },
                {
                    price: 500,
                    date: "2022-01-06T20:34:16.000Z"
                },
                {
                    price: 500,
                    date: "2022-01-07T20:34:16.000Z"
                },
                {
                    price: 500,
                    date: "2022-01-08T20:34:16.000Z"
                },
                {
                    price: 500,
                    date: "2022-01-09T20:34:16.000Z"
                },
                {
                    price: 500,
                    date: "2022-01-10T20:34:16.000Z"
                },
                {
                    price: 500,
                    date: "2022-01-11T20:34:16.000Z"
                }
            ]
            state.days = days
            console.log('days :::', state.days)
        },
        setDate (state, date) {
            if (date.min) {
                state.day = date.min.day
                state.month = date.min.month
                state.year = date.min.year
                state.returnDay = date.max.day
                state.returnMonth = date.max.month
                state.returnYear = date.max.year
            } else {
                state.day = date.day
                state.month = date.month
                state.year = date.year
            }
        },
        setCityPopup:(state, data) => {
            state.cityPopUp = data
        },
        setFlightPassenger:(state, data) => {
            console.log(data)
            state.customers.persons[data.index] = data.data
        },
        addAdult (state) {
            if (state.customers.persons.length < 9) {
                const data = {
                    firstname: '',
                    lastname: '',
                    birthday: '',
                    expire: '',
                    code: '',
                    gender: 'Male',
                    codetype: 'Passport',
                    usertype: 'Adult',
                    country: ''
                }
                state.customers.persons.push(data)
            }
        },
        addChild (state) {
            if (state.customers.persons.length < 9){
                const data = {
                    firstname: '',
                    lastname: '',
                    birthday: '',
                    expire: '',
                    code: '',
                    gender: 'Male',
                    codetype: 'Passport',
                    usertype: 'Child',
                    country: ''
                }
                state.customers.persons.push(data)
            }
        },
        addInfant (state) {
            if (state.customers.persons.length < 9){
                const data = {
                    firstname: '',
                    lastname: '',
                    birthday: '',
                    expire: '',
                    code: '',
                    gender: 'Male',
                    codetype: 'Passport',
                    usertype: 'Infant',
                    country: ''
                }
                state.customers.persons.push(data)
            }
        },
        delAdult (state) {
            if (state.customers.persons.filter((item) => item.usertype === 'Adult').length > 1) {
                let serv = true
                for (let i = 0; i < state.customers.persons.length; i++) {
                    if (state.customers.persons[i].usertype === 'Adult' && serv) {
                        state.customers.persons.splice(i, 1)
                        serv = false
                    }
                }
            }
        },
        delChild (state) {
            if (state.customers.persons.filter((item) => item.usertype === 'Child').length > 0) {
                let serv = true
                for (let i = 0; i < state.customers.persons.length; i++) {
                    if (state.customers.persons[i].usertype === 'Child' && serv) {
                        state.customers.persons.splice(i, 1)
                        serv = false
                    }
                }
            }
        },
        delInfant (state) {
            if (state.customers.persons.filter((item) => item.usertype === 'Infant').length > 0) {
                let serv = true
                for (let i = 0; i < state.customers.persons.length; i++) {
                    if (state.customers.persons[i].usertype === 'Infant' && serv) {
                        state.customers.persons.splice(i, 1)
                        serv = false
                    }
                }
            }
        },
        deletePassenger (state, data) {
            state.customers.persons = state.customers.persons.filter((item) => {
                return state.customers.persons.indexOf(item) !== data
            })
        },
        setRevers (state) {
          [state.origin,state.destination] = [state.destination,state.origin]
        },
    },
    actions: {
        fetchFlightOneway: ({getters, commit}) => {
            commit('setFlightSearchError',{
                title: 'please wait',
                desc: '',
                type: 'loading',
                code:'',
                status: true
            })
            const date = new Date(getters.getYear,getters.getMonth,getters.getDay)
            const payload = {
                origin: getters.getorigin,
                destination: getters.getdestination,
                departure_date_time:`${date.getFullYear()}-${(date.getMonth()+1)<9?'0'+(date.getMonth()+1):(date.getMonth()+1)}-${(date.getDate())<9?'0'+(date.getDate()):(date.getDate())}T00:00:00Z`,
                return_date_time: '',
                adults: getters.getAdultCount,
                children: getters.getChildCount,
                infants: getters.getInfantCount
            }
            console.log(getters.getYear,getters.getMonth,getters.getDay, new Date(getters.getYear,getters.getMonth,getters.getDay) , JSON.stringify(payload))
            router.push('/flight/search')
            axios.post(siteData.requestURL+'/v1/flight/search/0/500',JSON.stringify(payload),{  headers: {
                    'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then((r) => {
                    if (r) {
                        console.log(r.data)
                        commit('setTickets', r.data.flights)
                        commit('setFlightSearchTicketTemp', r.data.flights)
                        commit('setFlightSearchError', {
                            title: 'please wait',
                            desc: '',
                            type: 'error',
                            code:'',
                            status: false
                        })
                    }
                })
                .catch(error => {
                    commit('setFlightSearchError',{
                        title: error.message,
                        desc: error.response.data.error,
                        type: 'error',
                        code:error.response.status,
                        status: true
                    })
                    console.log(error)
                })
        }
    },
    modules: {
        flightError,
        flightFilter
    }
}
export default flight
