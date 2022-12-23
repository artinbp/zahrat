const flightError = {
    state: {
        flightSearchToggle:'city',
        flightSearchError:{
            title: '',
            desc: '',
            type: '',
            status: false
        },
        customersErrors: {
            mail: {
                status: false,
                title: 'Mail',
                type: ''
            },
            phone: {
                status: false,
                title: 'Phone',
                type: ''
            },
            customers: [
                {
                    firstName: {
                        status: false,
                        title: 'FirstName',
                        type: ''
                    },
                    lastName: {
                        status: false,
                        title: 'LastName',
                        type: ''
                    },
                    passengerCode: {
                        status: false,
                        title: 'PassengerCode',
                        type: ''
                    },
                    countryCode: {
                        status: false,
                        title: 'PassengerCode',
                        type: ''
                    },
                    birthDate: {
                        status: false,
                        title: 'BirthDate',
                        type: ''
                    },
                    passportExpire: {
                        status: false,
                        title: 'PassportExpire',
                        type: ''
                    }
                }
            ]
        },
        originError: false,
        destinationError: false,
        departureDateError: false,
        returnDateError: false
    },
    getters: {
        getFlightSearchToggle:(state) => state.flightSearchToggle,
        getFlightSearchError:(state) => state.flightSearchError,
        getPassengerErrorMail: (state) => state.customersErrors.mail,
        getPassengerErrorPhone: (state) => state.customersErrors.phone,
        getPassengerError: (state) => state.customersErrors
    },
    mutations: {
        setFlightSearchError (state, data) {
            state.flightSearchError = data
        },
        setFlightSearchToggle (state, data) {
            state.flightSearchToggle = data
        },
        setOriginError (state, data) {
            state.originError = data
        },
        setPassengerErrorMail (state, date) {
            state.customersErrors.mail = date
        },
        setPassengerErrorPhone (state, date) {
            state.customersErrors.phone = date
        },
        setPassengerErrorCountyCode (state, data) {
            state.customersErrors.customers[data.index].countryCode = data.data
        },
        setPassengerErrorFirstName (state, data) {
            state.customersErrors.customers[data.index].firstName = data.data
        },
        setPassengerErrorLastName (state, data) {
            state.customersErrors.customers[data.index].lastName = data.data
        },
        setPassengerErrorPassengerCode (state, data) {
            state.customersErrors.customers[data.index].passengerCode = data.data
        },
        setPassengerErrorBirthDate (state, data) {
            state.customersErrors.customers[data.index].birthDate = data.data
        },
        setPassengerErrorPassportExpire (state, data) {
            state.customersErrors.customers[data.index].passportExpire = data.data
        }
    },
    actions: {
    }
}
export default flightError
