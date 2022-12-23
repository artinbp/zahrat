const flightFilter = {
    state: {
        flightSearchTicketTemp: []
    },
    getters: {
        getFlightSearchTicketTemp:(state) => state.flightSearchTicketTemp,
    },
    mutations: {
        setFlightSearchTicketTemp (state, data) {
            state.flightSearchTicketTemp = data
        }
    },
    actions: {
        sortFlightLowPrice: ({getters}) => {
            const data = getters.getFlightSearchTicketTemp
            const dataset = (e,r) => {
                return e.price_detail.adult_price - r.price_detail.adult_price
            }
            data.sort(dataset)
            console.log(data.sort(dataset))
        },
        sortFlightHighPrice: ({getters}) => {
            const data = getters.getFlightSearchTicketTemp
            const dataset = (e,r) => {
                return r.price_detail.adult_price - e.price_detail.adult_price
            }
            data.sort(dataset)
            console.log(data.sort(dataset))
        }
    }
}
export default flightFilter
